import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, getDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [userIP, setUserIP] = useState("Desconocida");

  useEffect(() => {
    const obtenerIP = async () => {
      try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        setUserIP(data.ip);
      } catch (error) {
        console.error("Error al obtener IP:", error);
      }
    };
    obtenerIP();
  }, []);

  const registrarAcceso = async (email, estado, intentosFallidos = 0) => {
    await addDoc(collection(db, "accesos"), {
      email,
      ip: userIP,
      fechaAcceso: serverTimestamp(),
      actividad: estado === "Conectado" ? "Inicio de sesión" : "Intento fallido",
      estado,
      intentosFallidos,
    });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Por favor, ingresa un correo y contraseña válidos.");
      setLoading(false);
      return;
    }

    try {
      if (isRegister) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "usuarios", user.uid), {
          email: user.email,
          createdAt: serverTimestamp(),
          role: "usuario",
        });

        await registrarAcceso(user.email, "Conectado");
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await registrarAcceso(user.email, "Conectado");
      }

      onLogin();
    } catch (error) {
      if (error.code === "auth/network-request-failed") {
        setError("Error de conexión. Verifica tu internet.");
      } else {
        await registrarAcceso(email, "Desconectado", 1);
        switch (error.code) {
          case "auth/user-not-found":
            setError("No se encontró una cuenta con este correo.");
            break;
          case "auth/wrong-password":
            setError("Contraseña incorrecta.");
            break;
          case "auth/invalid-email":
            setError("Correo electrónico no válido.");
            break;
          case "auth/email-already-in-use":
            setError("Este correo ya está en uso.");
            break;
          default:
            setError("Las credenciales que has introducido no son correctas.");
        }
      }
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    setError("");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDoc = await getDoc(doc(db, "usuarios", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "usuarios", user.uid), {
          email: user.email,
          createdAt: serverTimestamp(),
          role: "usuario",
        });
      }

      await registrarAcceso(user.email, "Conectado");
      onLogin();
    } catch (error) {
      setError("Error al iniciar sesión con Google. Inténtalo nuevamente.");
    }
    setLoading(false);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert("Reporte enviado con éxito.");
    setShowReport(false);
  };

  return (
    <div className="login-container">
      {showReport ? (
        <div>
          <h2>Reporte Anónimo</h2>
          <form onSubmit={handleReportSubmit}>
            <input type="text" placeholder="Empresa" required />
            <input type="text" placeholder="Tipo de reporte" required />
            <input type="text" placeholder="Funcionario a reportar" required />
            <input type="text" placeholder="Cargo del funcionario" required />
            <textarea placeholder="Detalle de la denuncia" required />
            <button type="submit">Enviar Reporte</button>
            <button type="button" onClick={() => setShowReport(false)}>Cancelar</button>
          </form>
        </div>
      ) : (
        <>
          <h2>{isRegister ? "Registro" : "Iniciar Sesión"}</h2>
          <form onSubmit={handleAuth}>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Procesando..." : isRegister ? "Registrarse" : "Ingresar"}
            </button>
          </form>

          {!isRegister && (
            <button onClick={handleGoogleLogin} disabled={loading} className="google-btn">
              Iniciar sesión con Google
            </button>
          )}

          {error && <p style={{ color: "red" }}>{error}</p>}

          <p>
            ¿Quieres hacer un reporte anónimo?
            <button onClick={() => setShowReport(true)}>Reporte Anónimo</button>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
