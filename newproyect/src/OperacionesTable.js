// OperacionesTable.js
import './OperacionesTable.css';
// OperacionesTable.js
import React, { useState, useEffect } from 'react';

function OperacionesTable() {
  const [fechaOrden, setFechaOrden] = useState("all");
  const [modalVisible, setModalVisible] = useState(false);
  const [tableModalVisible, setTableModalVisible] = useState(false);
  const [totalRecords, setTotalRecords] = useState(9);
  const [displayedRows, setDisplayedRows] = useState({});

  useEffect(() => {
      updateRecordCount();
  }, [fechaOrden, displayedRows]);

  const toggleRows = (date) => {
      setDisplayedRows(prevState => ({
          ...prevState,
          [date]: !prevState[date]
      }));
  };

  const filterTable = () => {
      setFechaOrden(document.getElementById('fecha-orden').value);
  };

  const updateRecordCount = () => {
      const visibleRows = document.querySelectorAll('tbody .data-row:not([style*="display: none"])');
      setTotalRecords(visibleRows.length);
  };

  const handleCumplimientoClick = (event) => {
      event.stopPropagation();
      const content = document.getElementById('cumplimiento-legal-content');
      content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
  };

  const handleDropdownItemClick = (item) => {
      if (item === "Consulta") {
          setModalVisible(true);
      }
      const content = document.getElementById('cumplimiento-legal-content');
      content.style.display = 'none';
  };

  const closeModal = () => setModalVisible(false);
  const closeTableModal = () => setTableModalVisible(false);

  return (
      <div className="container">
          <div className="toolbar">
              <div>
                  <label htmlFor="fecha-orden" className="fecha-label">Fecha Orden:</label>
                  <select id="fecha-orden" className="fecha-select" onChange={filterTable}>
                      <option value="all">Mostrar todas</option>
                      <option value="21/11/2016">21/11/2016</option>
                      <option value="11/07/2016">11/07/2016</option>
                  </select>
              </div>

              <div className="dropdown">
                  <button id="cumplimiento-legal-btn" className="button" onClick={handleCumplimientoClick}>Cumplimiento Legal</button>
                  <div id="cumplimiento-legal-content" className="dropdown-content">
                      {["Consulta", "Captura en buzon interno anónimo", "Búsqueda previa de órdenes (Relevante/Inusual)", "Buscar órdenes con beneficiarios en listas", "Buscar órdenes de países No Cooperantes/Paraísos fiscales"].map(item => (
                          <a href="#" key={item} className="dropdown-item" onClick={() => handleDropdownItemClick(item)}>{item}</a>
                      ))}
                  </div>
              </div>
          </div>

          {modalVisible && (
              <div id="modal" className="modal">
                  <div className="modal-content">
                      <h3>Cumplimiento Legal</h3>
                      <div className="button-group">
                          <button>
                              <img src="op.png" className="icon" alt="Icono de Opciones" /> Opciones
                          </button>
                          <button>
                              <img src="fil.png" className="icon" alt="Icono de Filtros" /> Filtros
                          </button>
                      </div>
                      <div className="radio-group">
                          <label><input type="radio" name="operacion" value="acumuladas" /> Ops Acumuladas</label>
                          <label><input type="radio" name="operacion" value="individuales" /> Ops Individuales</label>
                      </div>
                      <div className="tc-container">
                          <label htmlFor="tc">TC:</label>
                          <input type="text" id="tc" className="tc-input" defaultValue="15.4192" />
                      </div>
                      <button id="consulta-btn" onClick={() => setTableModalVisible(true)}>
                          <img src="bu.png" className="icon" alt="Icono de Consulta" /> Consulta
                      </button>
                      <button className="close-btn" onClick={closeModal}>Cerrar</button>
                  </div>
              </div>
          )}

          {tableModalVisible && (
              <div id="table-modal-consulta" className="modal">
                  <div className="modal-content">
                      <h3>Resultados de Consulta</h3>
                      <div className="filter-section">
                          <label htmlFor="rango-fechas-checkbox">Rango de Fechas</label>
                          <div className="date-range">
                              <label htmlFor="date-from">Del:</label>
                              <input type="date" id="date-from" />
                              <label htmlFor="date-to">Al:</label>
                              <input type="date" id="date-to" />
                              <label htmlFor="user">Usuario:</label>
                              <input type="text" id="user" placeholder="%%" />
                          </div>
                      </div>
                      <div className="filter-section">
                          <div className="operacion-list">
                              <label htmlFor="operacion-1">ORDENES PAGADAS</label>
                          </div>
                      </div>
                      <div className="filter-section">
                          <label htmlFor="rango-monto-checkbox">Rango por monto</label>
                          <div className="amount-range">
                              <label htmlFor="amount-from">De:</label>
                              <input type="number" id="amount-from" placeholder="0" />
                              <label htmlFor="amount-to">A:</label>
                              <input type="number" id="amount-to" placeholder="0" />
                              <label htmlFor="nivel-riesgo">Nivel Riesgo:</label>
                              <select id="nivel-riesgo">
                                  <option value="bajo">Bajo</option>
                                  <option value="medio">Medio</option>
                                  <option value="alto">Alto</option>
                              </select>
                              <label htmlFor="moneda">Moneda:</label>
                              <select id="moneda">
                                  <option value="mxn">MXN</option>
                                  <option value="usd">USD</option>
                              </select>
                          </div>
                      </div>
                      <button className="close-btn" onClick={closeTableModal}>Cerrar</button>
                  </div>
              </div>
          )}

          <table id="orden-table">
              <colgroup>
                  <col style={{ width: "5%" }} />
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "20%" }} />
              </colgroup>
              <thead>
                  <tr>
                      <th>No. Orden</th>
                      <th>Monto</th>
                      <th>Divisa</th>
                      <th>NIP</th>
                      <th>Remitente Nombre</th>
                      <th>Beneficiario Nombre</th>
                  </tr>
              </thead>
              <tbody>
                  {fechaOrden === "all" || fechaOrden === "21/11/2016" ? (
                      <>
                          <tr className="group-row" onClick={() => toggleRows("21/11/2016")}>
                              <td colSpan="6" className="group">
                                  <div className="group-content">
                                      <div className="cuadrado">
                                          <div className="signo">{displayedRows["21/11/2016"] ? "-" : "+"}</div>
                                      </div>
                                      Fecha Orden: 21/11/2016 (Recuento=3)
                                  </div>
                              </td>
                          </tr>
                          {displayedRows["21/11/2016"] && (
                              <>
                                  <tr className="data-row">
                                      <td>1</td>
                                      <td>100</td>
                                      <td>USD</td>
                                      <td>123456</td>
                                      <td>Juan Pérez</td>
                                      <td>María López</td>
                                  </tr>
                                  <tr className="data-row">
                                      <td>2</td>
                                      <td>200</td>
                                      <td>USD</td>
                                      <td>789012</td>
                                      <td>Pedro González</td>
                                      <td>Laura Martínez</td>
                                  </tr>
                                  <tr className="data-row">
                                      <td>3</td>
                                      <td>300</td>
                                      <td>USD</td>
                                      <td>345678</td>
                                      <td>Paco López</td>
                                      <td>Fulana García</td>
                                  </tr>
                              </>
                          )}
                      </>
                  ) : null}
                  {/* Add the other group and data rows in similar structure */}
              </tbody>
          </table>

          <div className="registro-fijo">
              Total de registros: {totalRecords}
          </div>
      </div>
  );
}

export default OperacionesTable;