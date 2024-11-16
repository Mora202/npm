import './AdministracionOperacionesFinancieras.css';
import React, { useState } from 'react';

const AdministracionOperacionesFinancieras = () => {
    const [activeTab, setActiveTab] = useState('operaciones-relevantes');
    const [modalVisible, setModalVisible] = useState({
        modalCargaArchivo: false,
        modalLogCarga: false,
        modalCargaArchivoPersonas: false,
    });

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const openModal = (modalName) => {
        setModalVisible((prev) => ({ ...prev, [modalName]: true }));
    };

    const closeModal = (modalName) => {
        setModalVisible((prev) => ({ ...prev, [modalName]: false }));
    };

    const toggleAccordion = (accordionId) => {
        const element = document.getElementById(accordionId);
        if (element) {
            element.style.display = element.style.display === 'block' ? 'none' : 'block';
        }
    };

    return (
        <div className="container">
            <h1>Administración de Operaciones Financieras</h1>
            <div className="tabs">
                <button
                    className={`tablinks ${activeTab === 'operaciones-relevantes' ? 'active' : ''}`}
                    onClick={() => openTab('operaciones-relevantes')}
                >
                    Operaciones relevantes
                </button>
                <button
                    className={`tablinks ${activeTab === 'transferencia-fondos-hero' ? 'active' : ''}`}
                    onClick={() => openTab('transferencia-fondos-hero')}
                >
                    Transferencia internacional de fondos
                </button>
                <button
                    className={`tablinks ${activeTab === 'operaciones-inusuales' ? 'active' : ''}`}
                    onClick={() => openTab('operaciones-inusuales')}
                >
                    Operaciones inusuales
                </button>
                <button
                    className={`tablinks ${activeTab === 'circunstancias-inusuales' ? 'active' : ''}`}
                    onClick={() => openTab('circunstancias-inusuales')}
                >
                    Circunstancia de operación como inusual
                </button>
                <button
                    className={`tablinks ${activeTab === 'reporte-24hrs' ? 'active' : ''}`}
                    onClick={() => openTab('reporte-24hrs')}
                >
                    Reporte de 24 hrs
                </button>
                <button
                    className={`tablinks ${activeTab === 'operaciones-internas' ? 'active' : ''}`}
                    onClick={() => openTab('operaciones-internas')}
                >
                    Operaciones internas preocupantes
                </button>
                <button
                    className={`tablinks ${activeTab === 'pais' ? 'active' : ''}`}
                    onClick={() => openTab('pais')}
                >
                    Paises
                </button>
            </div>

            {/* Tab Content */}
            <div
                id="operaciones-relevantes"
                className={`tabcontent ${activeTab === 'operaciones-relevantes' ? 'show' : ''}`}
            >
                <h2>Operaciones Relevantes</h2>
                <div className="scrollable-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Número de Operación</th>
                                <th>Fecha</th>
                                <th>Monto</th>
                                <th>Tipo de Operación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>2024-09-20</td>
                                <td>$10,000</td>
                                <td>Depósito</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <form id="form-operaciones-relevantes">
                    <label htmlFor="numeroOperacion">Número de Operación:</label>
                    <input type="text" id="numeroOperacion" name="numeroOperacion" required />

                    <label htmlFor="fechaOperacion">Fecha:</label>
                    <input type="date" id="fechaOperacion" name="fechaOperacion" required />

                    <label htmlFor="montoOperacion">Monto:</label>
                    <input type="number" id="montoOperacion" name="montoOperacion" required />

                    <label htmlFor="tipoOperacion">Tipo de Operación:</label>
                    <select id="tipoOperacion" name="tipoOperacion" required>
                        <option value="Depósito">Depósito</option>
                        <option value="Transferencia">Transferencia</option>
                        <option value="Retiro">Retiro</option>
                    </select>

                    <button type="submit">Agregar Operación</button>
                </form>
            </div>

            {/* Países No Cooperantes */}
            <div
                id="pais"
                className={`tabcontent ${activeTab === 'pais' ? 'show' : ''}`}
            >
                <h2>Países No Cooperantes</h2>
                <div className="cuadro-tabla">
                    <div className="titulo-cuadro">
                        <img src="wo.png" alt="Icono Mundo" className="icono-titulo" />
                        <span>Países No Cooperantes</span>
                        <button className="boton-desplegar">▼</button>
                    </div>
                    <div className="opciones">
                        <div className="opcion" onClick={() => openModal('modalCargaArchivo')}>
                            <img src="dis.png" alt="Icono Carga" className="icono-opcion" />
                            <span>Carga Archivo Países</span>
                        </div>
                        <div className="opcion" onClick={() => openModal('modalLogCarga')}>
                            <img src="log.png" alt="Icono Log" className="icono-opcion" />
                            <span>Log de Carga de Países</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Carga Archivo */}
            {modalVisible.modalCargaArchivo && (
                <div id="modalCargaArchivo" className="modal">
                    <div className="modal-content">
                        <span className="cerrar-modal" onClick={() => closeModal('modalCargaArchivo')}>
                            &times;
                        </span>
                        <h2>Países no cooperantes y paraísos fiscales</h2>
                        <div className="modal-body">
                            <p>Explorador de archivos...</p>
                            <button onClick={() => closeModal('modalCargaArchivo')}>Salir</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdministracionOperacionesFinancieras;


