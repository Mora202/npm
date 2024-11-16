// CumplimientoLegalTable.js

import React, { useState } from 'react';
import './CumplimientoLegalTable.css'; // Asegúrate de incluir tus estilos CSS

const CumplimientoLegalTable = () => {
  const [activeTab, setActiveTab] = useState('sector');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      <h1>Configuración Cumplimiento Legal</h1>

      <div className="tabs">
        <button
          className={`tablinks ${activeTab === 'sector' ? 'active' : ''}`}
          onClick={() => openTab('sector')}
        >
          1. Sector
        </button>
        <button
          className={`tablinks ${activeTab === 'perfiles' ? 'active' : ''}`}
          onClick={() => openTab('perfiles')}
        >
          2. Perfiles transaccionales / Alertas
        </button>
        <button
          className={`tablinks ${activeTab === 'matriz' ? 'active' : ''}`}
          onClick={() => openTab('matriz')}
        >
          3. Matriz de Riesgo
        </button>
        <button
          className={`tablinks ${activeTab === 'campos' ? 'active' : ''}`}
          onClick={() => openTab('campos')}
        >
          4. Campos Requeridos
        </button>
        <button
          className={`tablinks ${activeTab === 'adicional' ? 'active' : ''}`}
          onClick={() => openTab('adicional')}
        >
          5. Adicional
        </button>
        <button
          className={`tablinks ${activeTab === 'transaccion' ? 'active' : ''}`}
          onClick={() => openTab('transaccion')}
        >
          6. Transacciones
        </button>
      </div>

      {activeTab === 'sector' && (
        <div id="sector" className="tabcontent">
          <h2>Límites de operación por sector</h2>
          <label htmlFor="sector-select">
            Cuando el sector a que pertenezca el usuario de una operación sea:
          </label>
          <select id="sector-select">
            <option>VENTA DE TARJETAS TELEFÓNICAS PREPAGADAS</option>
            <option>Other option 1</option>
            <option>Other option 2</option>
            <option>Other option 3</option>
          </select>
          <p>y la suma de las operaciones realizadas por este usuario en los últimos</p>
          <input type="number" defaultValue="5" /> días sea = a
          <input type="number" defaultValue="3000" /> Dólares o su equivalente.
          <p>
            El sistema hará una preclasificación de esta operación, preclasificándola como Para Análisis.
          </p>
          <div className="scrollable-table">
            <table>
              <thead>
                <tr>
                  <th>Sector</th>
                  <th>Monto</th>
                  <th>Días</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AGRICULTURA</td>
                  <td>3,000.00</td>
                  <td>5</td>
                </tr>
                {/* Resto de filas */}
              </tbody>
            </table>
          </div>
          <h2>Configuración de sectores por nivel de riesgo</h2>
          <p>
            Adicionalmente, por pertenecer a ese sector, dicho usuario será automáticamente
            clasificado como:
          </p>
          <select>
            <option>Bajo Riesgo</option>
            <option>Mediano Riesgo</option>
            <option>Alto Riesgo</option>
          </select>
          <div className="scrollable-table">
            <table>
              <thead>
                <tr>
                  <th>Sector</th>
                  <th>Tipo Riesgo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EMPLEADO DEL SECTOR PÚBLICO</td>
                  <td>Bajo Riesgo</td>
                </tr>
                {/* Resto de filas */}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'perfiles' && (
        <div id="perfiles" className="tabcontent">
          <h2>Perfiles transaccionales / Alertas</h2>
          <p>Contenido para Perfiles transaccionales / Alertas.</p>
        </div>
      )}
      
      {activeTab === 'matriz' && (
        <div id="matriz" className="tabcontent">
          <h2>Matriz de Riesgo</h2>
          <p>Contenido para Matriz de Riesgo.</p>
        </div>
      )}

      {activeTab === 'campos' && (
        <div id="campos" className="tabcontent">
          <h2>Campos Requeridos</h2>
          <p>Contenido para Campos Requeridos.</p>
        </div>
      )}

      {activeTab === 'adicional' && (
        <div id="adicional" className="tabcontent">
          <h2>Adicional</h2>
          <p>Contenido para Adicional.</p>
        </div>
      )}

      {activeTab === 'transaccion' && (
        <div id="transaccion" className="tabcontent">
          <h2>Consulta CL</h2>
          <div className="consulta-cl tabla-transaccion">
            <div className="seccion">
              <button className="btn-desplegable">Generar LayOuts</button>
            </div>
            <div className="rango-fechas">
              <label>Rango de Fechas</label>
              <div>
                <input type="date" placeholder="Del" />
                <input type="date" placeholder="Al" />
              </div>
            </div>
            <button className="consultar-btn">Consultar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CumplimientoLegalTable;
