// src/App.js
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Login from "./Login";
import Register from "./Register";
import "./App.css";
import OperacionesTable from "./OperacionesTable";
import CumplimientoLegalTable from "./CumplimientoLegalTable";
import ClientesTable from "./ClientesTable";
import Parametros from "./Parametros";
import Usuarios from "./Usuarios";
import CustomersTable from "./CustomersTable";
import AdministracionOperacionesFinancieras from "./AdministracionOperacionesFinancieras";
import BitacoraUsuarioActividad from "./BitacoraUsuarioActividad";
import GestionUsuarios from "./GestionUsuarios";



function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isOperacionOpen, setIsOperacionOpen] = useState(false);
  const [isCargaArchivosOpen, setIsCargaArchivosOpen] = useState(false);
  const [isConfiguracionOpen, setIsConfiguracionOpen] = useState(false);
  const [isIndicadoresReportesOpen, setIsIndicadoresReportesOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("main");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

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
  const toggleIndicadoresReportesMenu = () => setIsIndicadoresReportesOpen(!isIndicadoresReportesOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  if (!user) {
    return (
      <div className="login-wrapper">
        <Login onLogin={() => setUser(auth.currentUser)} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="top-bar">
  <div className="left-section">
    <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
  </div>
  <div className="right-section">
    <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
  </div>
</div>


      <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={toggleSecurityMenu}>Seguridad</li>
          {isSecurityOpen && (
            <ul className="submenu">
              <li onClick={() => handleOptionClick("GestionUsuarios")}>Gestión de Usuarios</li>
              <li onClick={() => console.log("Administración de permisos clicked")}>Administración de permisos</li>
              <li onClick={() => console.log("Configuración general clicked")}>Configuración General</li>
              <li onClick={() => handleOptionClick("bitacoraUsuarioActividad")}>Bitácora Usuario/Actividad</li>
              
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

      <main
  className={`content ${
    isMenuOpen || isSecurityOpen || isOperacionOpen || isConfiguracionOpen || isCargaArchivosOpen || isIndicadoresReportesOpen
      ? "shifted"
      : ""
  }`}
  onClick={closeMenu}
>
  <h1>"Maxi Send Mexico"</h1>
  {selectedOption === "main" && <></>}
  {selectedOption === "bitacoraUsuarioActividad" && <BitacoraUsuarioActividad />}
  {selectedOption === "GestionUsuarios" && <GestionUsuarios />}
  {selectedOption === "acumuladas" && <OperacionesTable />} 
  {selectedOption === "cumplimientoLegal" && <CumplimientoLegalTable />} 
  {selectedOption === "customers" && <CustomersTable />} 
  {selectedOption === "clientes" && <ClientesTable />} 
  {selectedOption === "parametros" && <Parametros />} 
  {selectedOption === "usuarios" && <Usuarios />} 
  {selectedOption === "adminOperacionesFinancieras" && <AdministracionOperacionesFinancieras />} 
</main>


  
    </div>
  );
}

export default App;












  {/*if (!user) {
    return <Login onLogin={() => setUser(auth.currentUser)} />;
  }    */}
  
  {/*if (!user) {
    return (
      <div>
        {showRegister ? (
          <>
            <Register onRegister={() => setUser(auth.currentUser)} />
            <p>
              ¿Ya tienes cuenta? <button onClick={() => setShowRegister(false)}>Inicia sesión</button>
            </p>
          </>
        ) : (
          <>
            <Login onLogin={() => setUser(auth.currentUser)} />
            <p>
              . <button onClick={() => setShowRegister(true)}>Ayuda Prueba</button>
            </p>
          </> 
        )}
      </div>
    );                                                                   
  }     */}



    {/* <main className={`content ${isMenuOpen ? "menu-open" : ""}`} onClick={closeMenu}>
        <h1>Administrador "Maxi Mexico"</h1>
        {selectedOption === "main" && <></>}
        {selectedOption === "acumuladas" && <OperacionesTable />} 
        {selectedOption === "cumplimientoLegal" && <CumplimientoLegalTable />} 
        {selectedOption === "customers" && <CustomersTable />} 
        {selectedOption === "clientes" && <ClientesTable />} 
        {selectedOption === "parametros" && <Parametros />} 
        {selectedOption === "usuarios" && <Usuarios />} 
        {selectedOption === "adminOperacionesFinancieras" && <AdministracionOperacionesFinancieras />} 
      </main>  */}