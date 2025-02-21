// CumplimientoLegalTable.js

import React, { useState } from 'react';
import './CumplimientoLegalTable.css'; 


const CumplimientoLegalTable = () => {
  const [activeTab, setActiveTab] = useState('sector');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
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
          <h2>Perfiles transaccionales Dólares</h2>
          <select className="perfiles-select">
            <option>Envíos</option>
            <option>Recepciones</option>
          </select>
          <div className="perfiles-container">
            <div className="perfiles-header">
              <div className="perfiles-title">ENVÍOS</div>
              <div className="perfiles-title">ALERTAS</div>
            </div>
            <div className="perfiles-content">
              <div className="perfiles-envios">
                <table className="perfiles-table">
                  <tbody>
                    {[...Array(15)].map((_, index) => (
                      <tr key={index}>
                        <td>Nivel {index + 1}</td>
                        <td>de</td>
                        <td><input type="text" className="input-envios" /></td>
                        <td>a</td>
                        <td><input type="text" className="input-alertas" /></td>
                        <td>%</td>
                        <td><input type="text" className="input-alertas" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
  <>
    <h2>Operaciones para análisis (Pre-Inusuales)</h2>
    <div className="alertas-section">
      <h3>Alertas tempranas de operaciones fraccionadas:</h3>
      <label>
        <input type="checkbox" /> Alertar que se está llevando a cabo una operación fraccionada
      </label>
      <div className="radio-options">
        <label>
          <input type="radio" name="tipo-alerta" /> Días naturales
        </label>
        <label>
          <input type="radio" name="tipo-alerta" /> Mes calendario
        </label>
      </div>
    </div>

    <div className="operaciones-analisis-section">
      <h3>Operaciones para análisis:</h3>
      <label>
        <input type="checkbox" /> Preclasificar automáticamente las operaciones como para análisis cuando su Eq. En dólares sea &gt; a
      </label>
      <div className="inputs-inline">
        <input type="number" placeholder="Ingresa monto" />
        <span>en los últimos</span>
        <input type="number" placeholder="Días" />
        <span>días</span>
      </div>

      <table className="analisis-table">
        <thead>
          <tr>
            <th>Cons.</th>
            <th>Eq. en dólares sea &gt; a</th>
            <th>En los últimos días</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2999</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3000</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>

      <label>
        <input type="checkbox" /> Aplicar esta validación también en remitentes
      </label>
    </div>

    <div className="configuracion-operaciones-ilicitas">
      <h2>Configuración Operaciones Ilícitas</h2>
      <div className="config-section">
        <h3>Operaciones Relevantes:</h3>
        <label>
          <input type="checkbox" /> Clasificar automáticamente las operaciones como Relevantes cuando su Eq. En dólares sea &gt; a
        </label>
        <input type="number" placeholder="Ingresa monto" />
      </div>

      <div className="config-section">
        <h3>Captura Beneficiario:</h3>
        <label>
          <input type="checkbox" /> Requiere la captura del nombre completo del "Beneficiario" sin abreviaturas cuando el monto de la orden o su equivalente sea &gt; a
        </label>
        <input type="number" placeholder="Ingresa monto (Dolares)" /> 
      </div>

      <div className="config-section">
        <h3>Preguntar por Propietario Real:</h3>
        <label>
          <input type="checkbox" /> Solicitar los datos del "Propietario Real" cuando el usuario actúe por cuenta de un tercero.
        </label>
        <span>Preguntar en operaciones cuyo equivalente sea &gt; a:</span>
        <input type="number" placeholder="Ingresa monto (Dolares)" /> 
      </div>

      <div className="config-section">
        <h3>Captura procedencia y destino de los recursos:</h3>
        <label>
          <input type="checkbox" /> Solicitar los datos de procedencia y destino de los recursos. Preguntar en operaciones cuyo equivalente sea &gt; a:
        </label>
        <input type="number" placeholder="Ingresa monto (Dolares)" /> 
      </div>
    </div>
  </>
)}


{activeTab === "transaccion" && (
        <div id="transaccion" className="tabcontent">
          <h2>Consulta CL</h2>

          {/* Botones superiores */}
          <div className="botones-superiores">
            <button className="btn-desplegable">Generar LayOuts</button>
            <button className="btn-desplegable">Países No Cooperantes</button>
            <button className="btn-desplegable">Consulta CL</button>
          </div>

          {/* Rango de Fechas */}
          <div className="campo">
            <label>Rango de Fechas</label>
            <div className="campo-inputs">
              <input type="date" placeholder="dd/mm/aaaa" />
              <input type="date" placeholder="dd/mm/aaaa" />
            </div>
          </div>

          {/* Usuario */}
          <div className="campo">
            <label>Usuario:</label>
            <input type="text" placeholder="%" />
          </div>

          {/* Beneficiario */}
          <div className="campo">
            <label>Beneficiario:</label>
            <input type="text" placeholder="%" />
          </div>

          {/* Rango por Monto */}
          <div className="campo">
            <label>Rango por Monto</label>
            <div className="campo-inputs">
              <input type="text" placeholder="De" />
              <input type="text" placeholder="A" />
            </div>
          </div>

          {/* Riesgo */}
          <div className="campo">
            <label>Riesgo:</label>
            <select>
              <option value="">Seleccionar</option>
            </select>
          </div>

          {/* Moneda */}
          <div className="campo">
            <label>Moneda:</label>
            <select>
              <option value="">Seleccionar</option>
            </select>
          </div>

          {/* Botón Consultar */}
          <button className="consultar-btn">Consultar</button>

          {/* Botones inferiores */}
          <div className="botones-inferiores">
            <button className="btn-desplegable">Operaciones CL</button>
            <button className="btn-desplegable">Matriz de Riesgo</button>
          </div>

          {/* Botón para abrir el modal */}
          <button className="btn-ver-transacciones" onClick={openModal}>
            Ver transacciones
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h3>Transacciones</h3>
            <p>Aquí puedes ver los detalles de las transacciones.</p>
            <button onClick={() => closeModal('modalLogCarga')}>Cerrar</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CumplimientoLegalTable;
