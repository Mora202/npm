// src/App.js
import React, { useState } from 'react';
import './App.css';
import OperacionesTable from './OperacionesTable';
import CumplimientoLegalTable from './CumplimientoLegalTable';
import ClientesTable from './ClientesTable';
import Parametros from './Parametros';
import Usuarios from './Usuarios';
import CustomersTable from './CustomersTable';
import AdministracionOperacionesFinancieras from './AdministracionOperacionesFinancieras'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isOperacionOpen, setIsOperacionOpen] = useState(false);
  const [isCargaArchivosOpen, setIsCargaArchivosOpen] = useState(false);
  const [isConfiguracionOpen, setIsConfiguracionOpen] = useState(false);
  const [isIndicadoresReportesOpen, setIsIndicadoresReportesOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState("main");

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsSecurityOpen(false);
      setIsOperacionOpen(false);
      setIsCargaArchivosOpen(false);
      setIsConfiguracionOpen(false);
      setIsIndicadoresReportesOpen(false);
    }
  };

  const toggleSecurityMenu = () => setIsSecurityOpen(!isSecurityOpen);
  const toggleOperacionMenu = () => setIsOperacionOpen(!isOperacionOpen);
  const toggleCargaArchivosMenu = () => setIsCargaArchivosOpen(!isCargaArchivosOpen);
  const toggleConfiguracionMenu = () => setIsConfiguracionOpen(!isConfiguracionOpen);
  const toggleIndicadoresReportesMenu = () => setIsIndicadoresReportesOpen(!isIndicadoresReportesOpen); // Controlamos el submenú

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>

      <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>X</button>
        <ul>
          <li onClick={toggleSecurityMenu}>Seguridad</li>
          {isSecurityOpen && (
            <ul className="submenu">
              <li onClick={() => console.log("Gestión de Usuarios clicked")}>Gestión de Usuarios</li>
              <li onClick={() => console.log("Administración de permisos clicked")}>Administración de permisos</li>
              <li onClick={() => console.log("Configuración general clicked")}>Configuración General</li>
              <li onClick={() => console.log("Bitácora Usuario/Actividad clicked")}>Bitácora Usuario/Actividad</li>
            </ul>
          )}
          <li onClick={toggleOperacionMenu}>Operación</li>
          {isOperacionOpen && (
            <ul className="submenu">
              <li onClick={() => handleOptionClick("acumuladas")}>Acumuladas</li>
              <li onClick={() => handleOptionClick("cumplimientoLegal")}>Cumplimiento Legal</li>
              <li onClick={() => handleOptionClick("customers")}>Customers</li>
            </ul>
          )}
          <li onClick={toggleConfiguracionMenu}>Configuración</li>
          {isConfiguracionOpen && (
            <ul className="submenu">
              <li onClick={() => handleOptionClick("parametros")}>Parámetros</li>
              <li onClick={() => handleOptionClick("usuarios")}>Usuarios</li>
            </ul>
          )}
          <li onClick={toggleCargaArchivosMenu}>Carga de archivos</li>
          {isCargaArchivosOpen && (
            <ul className="submenu">
              <li onClick={() => handleOptionClick("clientes")}>Clientes</li>
            </ul>
          )}
          <li onClick={toggleIndicadoresReportesMenu}>Indicadores y reportes</li>
          {isIndicadoresReportesOpen && (
            <ul className="submenu">
              <li onClick={() => handleOptionClick("adminOperacionesFinancieras")}>Operaciones financieras</li>
            </ul>
          )}
        </ul>
      </nav>

      <main className={`content ${isMenuOpen ? 'menu-open' : ''}`} onClick={closeMenu}>
        <h1>Administrador "Maxi Mexico"</h1>
        {selectedOption === 'main' && (
          <>
         
          </>
        )}
        {selectedOption === 'acumuladas' && (
          <>
            <OperacionesTable />
          </>
        )}
        {selectedOption === 'cumplimientoLegal' && (
          <>
            <CumplimientoLegalTable />
          </>
        )}
        {selectedOption === 'customers' && (
          <>
            <CustomersTable />
          </>
        )}
        {selectedOption === 'clientes' && (
          <>
            <ClientesTable />
          </>
        )}
        {selectedOption === 'parametros' && (
          <>
            <Parametros />
          </>
        )}
        {selectedOption === 'usuarios' && (
          <>
            <Usuarios />
          </>
        )}
        {selectedOption === 'adminOperacionesFinancieras' && (
          <>
            <AdministracionOperacionesFinancieras />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
