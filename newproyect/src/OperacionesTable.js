// OperacionesTable.js
import './OperacionesTable.css';
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
    const visibleRows = document.querySelectorAll('.operaciones-table tbody .data-row:not([style*="display: none"])');
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
    <div className="operaciones-container">
      <div className="operaciones-toolbar">
        <div>
          <label htmlFor="fecha-orden" className="operaciones-fecha-label">Fecha Orden:</label>
          <select id="fecha-orden" className="operaciones-fecha-select" onChange={filterTable}>
            <option value="all">Mostrar todas</option>
            <option value="21/11/2016">21/11/2016</option>
            <option value="11/07/2016">11/07/2016</option>
          </select>
        </div>

        <div className="operaciones-dropdown">
          <button id="cumplimiento-legal-btn" className="operaciones-button" onClick={handleCumplimientoClick}>Cumplimiento Legal</button>
          <div id="cumplimiento-legal-content" className="operaciones-dropdown-content">
            {["Consulta", "Captura en buzon interno anónimo", "Búsqueda previa de órdenes (Relevante/Inusual)", "Buscar órdenes con beneficiarios en listas", "Buscar órdenes de países No Cooperantes/Paraísos fiscales"].map(item => (
              <a href="#" key={item} className="operaciones-dropdown-item" onClick={() => handleDropdownItemClick(item)}>{item}</a>
            ))}
          </div>
        </div>
      </div>

      {modalVisible && (
  <div id="modal" className="operaciones-modal">
    <div className="operaciones-modal-content">
      <h3 className="modal-title">Cumplimiento Legal</h3>

      {/* Opciones y Filtros */}
      <div className="operaciones-button-group">
        <button className="operaciones-option">
          <img src="/icono-opciones.png" alt="Opciones" />
          Opciones
        </button>
        <button className="operaciones-option">
          <img src="/icono-filtros.png" alt="Filtros" />
          Filtros
        </button>
      </div>

      {/* Radios de Selección */}
      <div className="operaciones-radio-group">
        <label>
          <input type="radio" name="tipoOperacion" value="acumuladas" />
          Ops Acumuladas
        </label>
        <label>
          <input type="radio" name="tipoOperacion" value="individuales" />
          Ops Individuales
        </label>
      </div>

      {/* Campo TC */}
      <div className="operaciones-tc-container">
        <label htmlFor="tc">TC:</label>
        <input id="tc" type="text" className="operaciones-tc-input" value="15.4192" readOnly />
      </div>

      {/* Botón de Consulta */}
      <button className="operaciones-consulta-btn">
        <img src="/icono-buscar.png" alt="Buscar" />
        Consulta
      </button>

      {/* Botón de Cerrar */}
      <button className="operaciones-close-btn" onClick={closeModal}>
        Cerrar
      </button>
    </div>
  </div>
)}

{tableModalVisible && (
  <div id="table-modal-consulta" className="operaciones-modal">
    <div className="operaciones-modal-content">
      <h3 className="modal-title">Resultados de consulta</h3>

      {/* Rango de Fechas */}
      <div className="operaciones-date-range">
        <label>Del:</label>
        <input type="date" className="operaciones-date-input" />
        <label>Al:</label>
        <input type="date" className="operaciones-date-input" />
      </div>

      {/* Nombre del Usuario */}
      <div className="operaciones-input-container">
        <label>Nombre del Usuario:</label>
        <input type="text" className="operaciones-text-input" placeholder="Ingrese el nombre" />
      </div>

      <h4 className="modal-subtitle">Órdenes Pagadas</h4>

      {/* Rango de Monto */}
      <div className="operaciones-amount-range">
        <label>De:</label>
        <input type="number" className="operaciones-amount-input" placeholder="0.00" />
        <label>A:</label>
        <input type="number" className="operaciones-amount-input" placeholder="0.00" />
      </div>

      {/* Nivel de Riesgo */}
      <div className="operaciones-input-container">
        <label>Nivel de Riesgo:</label>
        <select className="operaciones-select">
          <option value="bajo">Bajo</option>
          <option value="medio">Medio</option>
          <option value="alto">Alto</option>
        </select>
      </div>

      {/* Selección de Moneda */}
      <div className="operaciones-input-container">
        <label>Moneda:</label>
        <select className="operaciones-select">
          <option value="mxn">MXN</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </div>

      {/* Botón de Cerrar */}
      <button className="operaciones-close-btn" onClick={closeTableModal}>
        Cerrar
      </button>
    </div>
  </div>
)}



      <table className="operaciones-table">
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
              <tr className="operaciones-group-row" onClick={() => toggleRows("21/11/2016")}>
                <td colSpan="6" className="operaciones-group">
                  <div className="operaciones-group-content">
                    <div className="operaciones-cuadrado">
                      <div className="operaciones-signo">{displayedRows["21/11/2016"] ? "-" : "+"}</div>
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
        </tbody>
      </table>

      <div className="operaciones-registro-fijo">
        Total de registros: {totalRecords}
      </div>
    </div>
  );
}

export default OperacionesTable;
