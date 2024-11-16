// src/ClientesTable.js
import React, { useState } from 'react';
import './ClientesTable.css';


function ClientesTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      <Header />
      <ClientData />
      <DocumentsSection openModal={openModal} />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="icon">
        <img src="lup.png" alt="Icono de Cliente" />
      </div>
      <div className="title">
        <a href="#">Documentación</a>
      </div>
    </div>
  );
}

function ClientData() {
  return (
    <div className="client-data">
      <div className="data-row">
        <label>Nombre del Cliente:</label>
        <span>MIGUEL HIDALGO Y COSTILLA</span>
      </div>
    </div>
  );
}

function DocumentsSection({ openModal }) {
  return (
    <div className="documents-section">
      <h2>Documentos</h2>
      <div className="consultar-button">
        <button onClick={openModal}>Consultar</button>
      </div>
      <DocumentTable />
    </div>
  );
}

function DocumentTable() {
  const documents = [
    { name: "Acta constitutiva (original y copia)", exists: "no" },
    { name: "RFC", exists: "no" },
    { name: "Comprobante de Domicilio", exists: "no" },
    { name: "Poderes del representante legal", exists: "no" },
    { name: "Identificacion oficial del Rep.Legal", exists: "no" },
    { name: "Estado de cuenta bancario", exists: "no" },
    { name: "Resultados de entrevista", exists: "no" },
    { name: "Contrato (Proemio,clausulado)", exists: "no" },
    { name: "Cuestionario ampliado * (Alto riesgo)", exists: "no" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Documento</th>
          <th>¿Existe?</th>
          <th>Fecha de Vigencia</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc, index) => (
          <tr key={index}>
            <td>
              <div className="doc-checkbox">
                <input type="checkbox" className="doc-checkbox-input" />
                {doc.name}
              </div> 
            </td>
            <td>
              <input type="radio" name={`doc${index}`} value="si" /> Sí
              <input type="radio" name={`doc${index}`} value="no" defaultChecked /> No
            </td>
            <td>
              <div className="date-container">
                <img src="LI.png" alt="Icono Fecha" className="date-icon" />
                <input type="date" defaultValue="2024-09-05" />
              </div>
            </td>
            <td>
              <button>Alta</button>
              <button>Descargar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Modal({ closeModal }) {
  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h3>Información Detallada</h3>
        <table className="modal-table">
          <tbody>
            <tr>
              <th>Campo</th>
              <th>Valor</th>
            </tr>
            <tr>
              <td>Nombre Completo</td>
              <td>Miguel Hidalgo Y Costilla</td>
            </tr>
            <tr>
              <td>Fecha de nacimiento</td>
              <td>11/09/1992</td>
            </tr>
            <tr>
              <td>RFC</td>
              <td>MIH123456</td>
            </tr>
            <tr>
              <td>Domicilio</td>
              <td>Antiguedad de domicilio</td>
            </tr>
            <tr>
              <td>Estado de cuenta bancario</td>
              <td>"Pendiente de revision"</td>
            </tr>
            <tr>
              <td>CURP</td>
              <td>HICM091192HMSNMLA9</td>
            </tr>
            <tr>
              <td>Resultado de entrevista</td>
              <td>En espera...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default ClientesTable;
