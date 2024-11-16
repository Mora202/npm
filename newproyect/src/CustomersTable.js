import React from 'react';
import './CustomersTable.css';

const OperacionesTable = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="header-icon">
            <img src="lup.png" alt="Icono Cliente" className="icono-cliente" />
          </div>
          <h1>Administración de clientes (KYC)</h1>
        </div>
        <a href="#" className="buscar-cliente">Buscar Cliente</a>
      </header>

      <section className="search-parameters">
        <h2 className="parametros-busqueda">Parámetros de Búsqueda</h2>
        <div className="form-row">
          <label htmlFor="tipo-persona">Tipo de Persona:</label>
          <select id="tipo-persona" defaultValue="">
            <option value="">SELECCIONE</option>
            <option value="fisica">Persona Física</option>
            <option value="moral">Persona Moral</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="clave-persona">Clave Persona:</label>
          <input type="text" id="clave-persona" placeholder="Ingrese la clave" />
        </div>
        <div className="form-row">
          <label htmlFor="nombre-razon-social">Nombre / Razón Social:</label>
          <input type="text" id="nombre-razon-social" placeholder="Ingrese el nombre o razón social" />
        </div>
      </section>

      <section className="date-range">
        <h2 className="rango-fechas">Rango de fechas de alta del cliente</h2>
        <div className="form-row">
          <label htmlFor="fecha-inicio">Fecha Inicio:</label>
          <div className="date-input-container">
            <img src="LI.png" alt="Ícono Fecha" className="icono-fecha" />
            <input type="date" id="fecha-inicio" defaultValue="2022-06-09" />
          </div>
          <label htmlFor="fecha-final">Fecha Final:</label>
          <div className="date-input-container">
            <img src="LI.png" alt="Ícono Fecha" className="icono-fecha" />
            <input type="date" id="fecha-final" defaultValue="2024-09-05" />
          </div>
        </div>
      </section>

      <div className="button-row">
        <button type="button" className="search-btn">Buscar</button>
        <button type="button" className="clear-btn">Limpiar</button>
      </div>

      <section className="search-results">
        <div className="form-row">
          <label htmlFor="entries-number">Mostrar</label>
          <select id="entries-number">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <label>Entradas</label>
        </div>
        <table>
          <thead>
            <tr>
              <th>AML ID</th>
              <th>Clave Persona</th>
              <th>Nombre/Razón Social</th>
              <th>Match en Listas</th>
              <th>P E P</th>
              <th>Lista Negras</th>
              <th>IFPE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123456</td>
              <td>ABC123</td>
              <td>Empresa XYZ</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="client-details">
        <h2>Datos Generales</h2>
       
        <div className="form-row">
          <label htmlFor="aml-id">AML ID:</label>
          <input type="text" id="aml-id" defaultValue="1011" />
          <label htmlFor="clave-persona">Clave Persona:</label>
          <input type="text" id="clave-persona" defaultValue="92A16165-8A0F-A603-6FD" />
        </div>
        {/* Continúa la sección client-details */}
      </section>

      <section className="atributos-adicionales">
        <h2>Atributos Adicionales</h2>
        <div className="form-row">
          <label htmlFor="estatus-cliente">Estatus Cliente:</label>
          <select id="estatus-cliente">
            <option>Seleccione</option>
          </select>
          <label htmlFor="ingreso-mensual">Ingreso Mensual:</label>
          <input type="text" id="ingreso-mensual" />
        </div>
        {/* Continúa la sección atributos-adicionales */}
      </section>
    </div>
  );
};

export default OperacionesTable;
