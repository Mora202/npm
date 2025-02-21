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

    const [selectedOption, setSelectedOption] = useState(""); 


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
                        {/*  <img src="wo.png" alt="Icono Mundo" className="icono-titulo" /> */}
                        <span>Países No Cooperantes</span>
                       {/*    <button className="boton-desplegar">▼</button>  */}
                    </div>
                    <div className="opciones">
                        <div className="opcion" onClick={() => openModal('modalCargaArchivo')}>
                           {/* <img src="dis.png" alt="Icono Carga" className="icono-opcion" />  */}
                            <span>Carga Archivo Países</span>
                        </div>
                        <div className="opcion" onClick={() => openModal('modalLogCarga')}>
                          {/*   <img src="log.png" alt="Icono Log" className="icono-opcion" />  */}
                            <span>Log de Carga de Países</span>
                        </div>
                    </div>
                </div>

                <div
    id="pais"
    className={`tabcontent ${activeTab === 'pais' ? 'show' : ''}`}
>
    <h2>Personas No Cooperantes</h2>
    
    {/* Sección de Países */}
    <div className="cuadro-tabla">
        <div className="titulo-cuadro">
            <span>Personas No Cooperantes</span>
        </div>
        <div className="opciones">
        <div className="opcion" onClick={() => openModal('modalCargaArchivoPersonas')}>
                <span>Carga Archivo Personas</span>
            </div>
            <div className="opcion" onClick={() => openModal('modalLogCarga')}>
                <span>Log de Carga de Personas</span>
            </div>
        </div>
    </div>
</div>  

                

                
            </div>

            
            
             {/* Transferencia Internacional de Fondos */}
             <div id="transferencia-fondos-hero" className={`tabcontent ${activeTab === 'transferencia-fondos-hero' ? 'show' : ''}`}>
                <h2>Transferencia Internacional de Fondos</h2>
                <form>
                    <label>Nombre del Remitente:</label>
                    <input type="text" name="nombreRemitente" required />

                    <label>Banco Remitente:</label>
                    <input type="text" name="bancoRemitente" required />

                    <label>Banco Destinatario:</label>
                    <input type="text" name="bancoDestinatario" required />

                    <label>Monto a Transferir:</label>
                    <input type="number" name="montoTransferir" required />

                    <label>Fecha de Transferencia:</label>
                    <input type="date" name="fechaTransferencia" required />

                    <button type="submit">Registrar Transferencia</button>
                </form>
            </div>

            {/* Operaciones Inusuales */}
            <div id="operaciones-inusuales" className={`tabcontent ${activeTab === 'operaciones-inusuales' ? 'show' : ''}`}>
                <h2>Lista de Operaciones Inusuales</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Número de Operación</th>
                            <th>Cliente</th>
                            <th>Monto</th>
                            <th>Fecha</th>
                            <th>Razón</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1001</td>
                            <td>Juan Pérez</td>
                            <td>$5000</td>
                            <td>2024-02-01</td>
                            <td>Operación sospechosa</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Agregar Nueva Operación Inusual</h3>
                <form>
                    <label>Número de Operación:</label>
                    <input type="text" name="numeroOperacion" required />

                    <label>Cliente:</label>
                    <input type="text" name="cliente" required />

                    <label>Monto:</label>
                    <input type="number" name="monto" required />

                    <button type="submit">Agregar Operación Inusual</button>
                </form>
            </div>

            {/* Circunstancia de Operación como Inusual */}
            <div id="circunstancias-inusuales" className={`tabcontent ${activeTab === 'circunstancias-inusuales' ? 'show' : ''}`}>
                <h2>Circunstancia de Operación como Inusual</h2>
                <form>
                    <label>Tipo de Circunstancia:</label>
                    <select name="tipoCircunstancia" required>
                        <option value="sospechosa">Sospechosa</option>
                        <option value="injustificada">Injustificada</option>
                        <option value="otro">Otro</option>
                    </select>

                    <label>Fecha:</label>
                    <input type="date" name="fechaCircunstancia" required />

                    <label>Descripción:</label>
                    <textarea name="descripcion" rows="4" required></textarea>

                    <label>Acciones Tomadas:</label>
                    <textarea name="accionesTomadas" rows="4" required></textarea>

                    <button type="submit">Registrar Circunstancia</button>
                </form>
            </div>

             {/* Reporte de 24 hrs */}
             <div id="reporte-24hrs" className={`tabcontent ${activeTab === 'reporte-24hrs' ? 'show' : ''}`}>
                <h2>Reporte de 24 Hrs</h2>
                <p>Aquí se muestra la información del reporte de operaciones en un periodo de 24 hrs.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Horas</th>
                            <th>Descripción</th>
                            <th>Monto</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>08:00 - 09:00</td>
                            <td>Transferencia de fondos</td>
                            <td>$2,500</td>
                            <td>Completado</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Operaciones internas preocupantes */}
            <div id="operaciones-internas" className={`tabcontent ${activeTab === 'operaciones-internas' ? 'show' : ''}`}>
                <h2>Operaciones Internas Preocupantes</h2>
                <p>A continuación, se muestran las operaciones internas que requieren atención especial. Puedes agregar más detalles utilizando el formulario.</p>
                <table>
                    <thead>
                        <tr>
                            <th>ID de Operación</th>
                            <th>Fecha</th>
                            <th>Monto</th>
                            <th>Tipo de Operación</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>INT001</td>
                            <td>2024-10-15</td>
                            <td>$3,000</td>
                            <td>Depósito</td>
                            <td>Pendiente</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Agregar Detalles de Operación</h3>
                <form>
                    <label>Tipo de Operación:</label>
                    <select required>
                        <option value="">Seleccione</option>
                        <option value="deposito">Depósito</option>
                        <option value="retiro">Retiro</option>
                        <option value="transferencia">Transferencia</option>
                    </select>

                    <label>Monto de Operación:</label>
                    <input type="number" required />

                    <label>Fecha de Operación:</label>
                    <input type="date" required />

                    <button type="submit">Agregar Detalle</button>
                </form>
            </div>


          {/* Modal Carga Archivo */}
{modalVisible.modalCargaArchivo && (
    <div className="modal">
        <div className="modal-content">
            <span className="cerrar-modal" onClick={() => closeModal('modalCargaArchivo')}>&times;</span>
            <h2>Países no cooperantes y paraísos fiscales</h2>
            <div className="modal-body">
                <div className="file-explorer">
                    <div className="folders">
                        <ul>
                            <li>📂 c:\</li>
                            <li>📂 Users</li>
                            <li>📂 pc</li>
                            <li>📂 Usa</li>
                            <li>📂 Maxi send</li>
                            <li>📂 State</li>
                            <li>📂 Upload file</li>
                        </ul>
                    </div>
                    <div className="files">
                        <ul>
                            <li>📄 Lista de Países No cooperantes.xlsx <button>🖨️</button></li>
                            <li>📄 Lista de Paraísos Fiscales.xlsx <button>🖨️</button></li>
                            <li>📄 Lista PEP 131216.xlsx <button>🖨️</button></li>
                        </ul>
                    </div>
                </div>
                <p>Formato del archivo Excel (Nombre, Fuente, Clave Interna del País) con títulos en el primer renglón</p>
                <div className="modal-actions">
                    <button className="accept-btn">Aceptar</button>
                    <button className="exit-btn" onClick={() => closeModal('modalCargaArchivo')}>Salir</button>
                </div>
            </div>
        </div>
    </div>
)}


{/* Modal Log Carga */}
{modalVisible.modalLogCarga && (
    <div className="modal">
        <div className="modal-content">
            <span className="cerrar-modal" onClick={() => closeModal('modalLogCarga')}>&times;</span>
            <h2>Opción de Carga de Países</h2>
            <div className="modal-body">
                <div className="log-options">
                    <button 
                        className={selectedOption === "configuracion" ? "active" : ""}
                        onClick={() => setSelectedOption("configuracion")}
                    >
                        Configuración
                    </button>
                    <button 
                        className={selectedOption === "listas" ? "active" : ""}
                        onClick={() => setSelectedOption("listas")}
                    >
                        Listas
                    </button>
                    <button 
                        className={selectedOption === "busqueda" ? "active" : ""}
                        onClick={() => setSelectedOption("busqueda")}
                    >
                        Búsqueda
                    </button>
                </div>
                
                <div className="log-message">
                    {selectedOption === "configuracion" && <p>Configuración avanzada del sistema</p>}
                    {selectedOption === "listas" && <p>Lista de archivos cargados</p>}
                    {selectedOption === "busqueda" && <p>Búsqueda de registros de carga</p>}
                </div>

                <button className="close-btn" onClick={() => closeModal('modalLogCarga')}>Cerrar</button>
            </div>
        </div>
    </div>
)}

{modalVisible.modalCargaArchivoPersonas && (
    <div className="modal">
        <div className="modal-content">
            <span className="cerrar-modal" onClick={() => closeModal('modalCargaArchivoPersonas')}>&times;</span>
            <h2>Lista de Personas Relacionadas</h2>
            <div className="modal-body">
                <div className="file-explorer">
                    <div className="folders">
                        <ul>
                            <li>📂 c:\</li>
                            <li>📂 Users</li>
                            <li>📂 pc</li>
                            <li>📂 Documentos</li>
                            <li>📂 Personas</li>
                        </ul>
                    </div>
                    <div className="files">
                        <ul>
                            <li>📄 Lista_Personas_Sancionadas.xlsx <button>🖨️</button></li>
                            <li>📄 Lista_PEP.xlsx <button>🖨️</button></li>
                        </ul>
                    </div>
                </div>
                <p>Formato del archivo Excel: (Nombre, Apellido, Nacionalidad, Documento de Identidad).</p>
                <div className="modal-actions">
                    <button className="accept-btn">Aceptar</button>
                    <button className="exit-btn" onClick={() => closeModal('modalCargaArchivoPersonas')}>Salir</button>
                </div>
            </div>
        </div>
    </div>
)}
{/* Modal Log Carga */}
{modalVisible.modalLogCarga && (
    <div className="modal">
        <div className="modal-content">
            <span className="cerrar-modal" onClick={() => closeModal('modalLogCarga')}>&times;</span>
            <h2>Opción de Carga de Países</h2>
            <div className="modal-body">
                <div className="log-options">
                    <button 
                        className={selectedOption === "configuracion" ? "active" : ""}
                        onClick={() => setSelectedOption("configuracion")}
                    >
                        Configuración
                    </button>
                    <button 
                        className={selectedOption === "listas" ? "active" : ""}
                        onClick={() => setSelectedOption("listas")}
                    >
                        Listas
                    </button>
                    <button 
                        className={selectedOption === "busqueda" ? "active" : ""}
                        onClick={() => setSelectedOption("busqueda")}
                    >
                        Búsqueda
                    </button>
                </div>
                
                <div className="log-message">
                    {selectedOption === "configuracion" && <p>Configuración avanzada del sistema para personas.</p>}
                    {selectedOption === "listas" && <p>Detalle Icono
                        Listas de archivos cargados de personas.</p>}
                    {selectedOption === "busqueda" && <p>Búsqueda de registros de carga de personas.</p>}
                </div>

                <button className="close-btn" onClick={() => closeModal('modalLogCarga')}>Cerrar</button>
            </div>
        </div>
    </div>
)}





        </div>
    );
};

export default AdministracionOperacionesFinancieras;


