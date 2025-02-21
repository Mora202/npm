import React, { useState } from "react";
import { getFirestore, collection, query, where, getDocs, orderBy, Timestamp } from "firebase/firestore";

const BitacoraUsuarioActividad = () => {
  const [bitacora, setBitacora] = useState([]);
  const [detalles, setDetalles] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchEmail, setSearchEmail] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  const db = getFirestore();

  const buscarBitacora = async () => {
    if (!searchEmail) return;
  
    console.log("Buscando registros para:", searchEmail);
    console.log("Fechas seleccionadas:", fechaInicio, fechaFin);
  
    const bitacoraRef = collection(db, "bitacora");
  
    let q = query(bitacoraRef, where("email", "==", searchEmail));
  
    if (fechaInicio && fechaFin) {
      const fechaInicioTimestamp = Timestamp.fromDate(new Date(fechaInicio));
      const fechaFinTimestamp = Timestamp.fromDate(new Date(fechaFin));
      fechaFinTimestamp.toDate().setHours(23, 59, 59, 999); // Asegurar que cubra todo el día
  
      q = query(
        bitacoraRef,
        where("email", "==", searchEmail),
        where("fechaAcceso", ">=", fechaInicioTimestamp),
        where("fechaAcceso", "<=", fechaFinTimestamp),
        orderBy("fechaAcceso", "desc")
      );
    }
  
    console.log("Ejecutando consulta en Firestore...");
    const querySnapshot = await getDocs(q);
    console.log("Registros encontrados:", querySnapshot.size);
  
    if (querySnapshot.empty) {
      console.warn("No se encontraron registros para el usuario.");
      setBitacora([]);
      setDetalles({});
      return;
    }
  
    const data = {};
    const detallesData = {};
  
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      console.log("Documento obtenido:", item);
  
      if (!data[item.email]) {
        data[item.email] = {
          email: item.email,
          ip: item.ip || "Desconocida",
          accesos: 0,
          intentosFallidos: 0,
        };
        detallesData[item.email] = [];
      }
  
      data[item.email].accesos++;
      if (!item.exito) data[item.email].intentosFallidos++;
  
      detallesData[item.email].push({
        ...item,
        fechaAcceso: item.fechaAcceso?.toDate().toLocaleString() || "Fecha desconocida",
      });
    });
  
    console.log("Datos procesados:", data);
    setBitacora(Object.values(data));
    setDetalles(detallesData);
  };
  

  return (
    <div>
      <h2>Bitácora Usuario/Actividad</h2>
      <input type="text" placeholder="Correo..." value={searchEmail} onChange={(e) => setSearchEmail(e.target.value)} />
      <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
      <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
      <button onClick={buscarBitacora}>Buscar</button>

      <table>
        <thead>
          <tr>
            <th>IP</th>
            <th>Usuario</th>
            <th>Número de accesos</th>
            <th>Intentos fallidos</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {bitacora.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.ip}</td>
              <td>{usuario.email}</td>
              <td>{usuario.accesos}</td>
              <td>{usuario.intentosFallidos}</td>
              <td>
                <button onClick={() => setSelectedUser(usuario.email)}>Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && detalles[selectedUser]?.length > 0 && (
        <div>
          <h3>Detalles de {selectedUser}</h3>
          <table>
            <thead>
              <tr>
                <th>IP</th>
                <th>Actividad</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {detalles[selectedUser].map((detalle, index) => (
                <tr key={index}>
                  <td>{detalle.ip}</td>
                  <td>{detalle.exito ? "Acceso exitoso" : "Intento fallido"}</td>
                  <td>{detalle.fechaAcceso}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => setSelectedUser(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default BitacoraUsuarioActividad;
