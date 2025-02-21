import React, { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import "./GestionUsuarios.css";

const GestionUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: "", correo: "", contrasena: "", puesto: "" });

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const obtenerUsuarios = async () => {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const usuariosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsuarios(usuariosData);
    };

    const agregarUsuario = async () => {
        if (!nuevoUsuario.nombre || !nuevoUsuario.correo || !nuevoUsuario.contrasena || !nuevoUsuario.puesto) {
            alert("Todos los campos son obligatorios");
            return;
        }

        try {
            // Registrar usuario en Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, nuevoUsuario.correo, nuevoUsuario.contrasena);
            const user = userCredential.user;

            // Guardar usuario en Firestore
            const docRef = await addDoc(collection(db, "usuarios"), {
                uid: user.uid,
                nombre: nuevoUsuario.nombre,
                correo: nuevoUsuario.correo,
                puesto: nuevoUsuario.puesto,
                fechaAlta: serverTimestamp(),
            });

            setUsuarios([...usuarios, { id: docRef.id, ...nuevoUsuario, fechaAlta: new Date().toISOString() }]);
            setNuevoUsuario({ nombre: "", correo: "", contrasena: "", puesto: "" });
            alert("Usuario agregado correctamente ✅");
        } catch (error) {
            alert("Error al registrar usuario ❌");
            console.error(error);
        }
    };

    const eliminarUsuario = async (id) => {
        await deleteDoc(doc(db, "usuarios", id));
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
    };

    return (
        <div className="gestion-usuarios-container">
            <h2>Gestión de Usuarios</h2>
            <div className="form-container">
                <input type="text" placeholder="Nombre" value={nuevoUsuario.nombre} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })} />
                <input type="email" placeholder="Correo" value={nuevoUsuario.correo} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, correo: e.target.value })} />
                <input type="password" placeholder="Contraseña" value={nuevoUsuario.contrasena} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, contrasena: e.target.value })} />
                <input type="text" placeholder="Puesto" value={nuevoUsuario.puesto} onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, puesto: e.target.value })} />
                <button onClick={agregarUsuario}>Agregar Usuario</button>
            </div>
            <table className="usuarios-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Puesto</th>
                        <th>Fecha Alta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.correo}</td>
                            <td>{usuario.puesto}</td>
                            <td>{new Date(usuario.fechaAlta).toLocaleDateString()}</td>
                            <td><button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GestionUsuarios;
