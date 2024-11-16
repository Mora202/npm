// Usuarios.js
import React, { useState } from 'react';
import './Usuarios.css'; // 

const Usuarios = () => {
  const [usuario, setUsuario] = useState('');
  const [direccion, setDireccion] = useState('');
  const [rfc, setRfc] = useState('');
  const [telefono, setTelefono] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSearch = () => {
    console.log('Buscando usuario:', usuario);
  };

  const handleAccept = () => {
    console.log('Bloqueo aceptado para el usuario:', usuario);
  };

  const handleCancel = () => {
    console.log('Cancelado');
  };

  const handleAdd = () => {
    console.log('Agregar usuario bloqueado');
  };

  const handleRemove = () => {
    console.log('Quitar usuario bloqueado');
  };

  return (
    <div className="container">
      <h1>Bloqueo de Usuarios</h1>
      
      <div className="user-info">
        <label htmlFor="usuario">Usuario:</label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
       
      </div>

      <div className="user-info">
        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>

      <div className="user-info">
        <label htmlFor="rfc">RFC:</label>
        <input
          type="text"
          id="rfc"
          name="rfc"
          value={rfc}
          onChange={(e) => setRfc(e.target.value)}
        />
      </div>

      <div className="user-info">
        <label htmlFor="telefono">Tel:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      <div className="block-reason">
        <label className="block-label" htmlFor="motivo">
          Motivo del Bloqueo
        </label>
       
      </div>

    

      <div className="blocked-users">
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Mensaje</th>
              <th>Tipo Bloqueo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CYNTHIA PEREZ PRL...</td>
              <td>Automático, match en Lista CNBV...</td>
              <td>Automático, match lis...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usuarios;
