// MainComponent.js
import React, { useState } from 'react';
import OperacionesTable from './OperacionesTable';
import CumplimientoLegalTable from './CumplimientoLegalTable';
import ClientesTable from './ClientesTable';
import CustomersTable from './CustomersTable'; // Importamos el nuevo componente
import Parametros from './Parametros';
import Usuarios from './Usuarios';
import AdministracionOperacionesFinancieras from './AdministracionOperacionesFinancieras'; // Importar el nuevo componente

const MainComponent = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOperacionOpen, setIsOperacionOpen] = useState(false);
    const [isConfiguracionOpen, setIsConfiguracionOpen] = useState(false);
    const [isIndicadoresOpen, setIsIndicadoresOpen] = useState(false); // Nuevo estado para "Indicadores y reportes"

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOperacionOpen(false);
        setIsConfiguracionOpen(false);
        setIsIndicadoresOpen(false); // Cerrar otros submenús al seleccionar una opción
    };

    const toggleOperacionMenu = () => setIsOperacionOpen(!isOperacionOpen);
    const toggleConfiguracionMenu = () => setIsConfiguracionOpen(!isConfiguracionOpen);
    const toggleIndicadoresMenu = () => setIsIndicadoresOpen(!isIndicadoresOpen); // Nuevo toggle para "Indicadores y reportes"

    return (
        <div>
            {/* Menú de opciones */}
            <div className="sidebar">
                {/* Submenú de Operaciones */}
                <button onClick={toggleOperacionMenu}>Operaciones</button>
                {isOperacionOpen && (
                    <div className="submenu">
                        <button onClick={() => handleOptionClick('Operación')}>Acumuladas</button>
                        <button onClick={() => handleOptionClick('CumplimientoLegal')}>Cumplimiento Legal</button>
                        <button onClick={() => handleOptionClick('Clientes')}>Clientes</button>
                        <button onClick={() => handleOptionClick('Customers')}>Customers</button> {/* Nueva sección */}
                    </div>
                )}

                {/* Configuración con submenú */}
                <button onClick={toggleConfiguracionMenu}>Configuración</button>
                {isConfiguracionOpen && (
                    <div className="submenu">
                        <button onClick={() => handleOptionClick('Parametros')}>Parámetros</button>
                        <button onClick={() => handleOptionClick('Usuarios')}>Usuarios</button>
                    </div>
                )}

                {/* Nuevo submenú para Indicadores y reportes */}
                <button onClick={toggleIndicadoresMenu}>Indicadores y reportes</button>
                {isIndicadoresOpen && (
                    <div className="submenu">
                        <button onClick={() => handleOptionClick('AdministracionOperacionesFinancieras')}>
                            Administración de operaciones financieras
                        </button>
                    </div>
                )}
            </div>

            {/* Contenido de cada opción seleccionada */}
            <div className="content">
                {selectedOption === 'Operación' && <OperacionesTable />}
                {selectedOption === 'CumplimientoLegal' && <CumplimientoLegalTable />}
                {selectedOption === 'Clientes' && <ClientesTable />}
                {selectedOption === 'Customers' && <CustomersTable />} {/* Renderizado de la nueva sección */}
                {selectedOption === 'Parametros' && <Parametros />}
                {selectedOption === 'Usuarios' && <Usuarios />}
                {selectedOption === 'AdministracionOperacionesFinancieras' && <AdministracionOperacionesFinancieras />}
            </div>
        </div>
    );
};

export default MainComponent;
