// src/Parametros.js
import './Parametros.css';
import React, { useState } from 'react';

const Parametros = () => {
  const [config, setConfig] = useState('1');
  const [similitud, setSimilitud] = useState('95');
  const [resultado, setResultado] = useState('20');
  const [muestra, setMuestra] = useState('10000');

  const [filtros, setFiltros] = useState({
    fechaNacimiento: { enabled: true, incremento: 2, decremento: 5 },
    paisNacimiento: { enabled: false, incremento: 2, decremento: 4 },
    curp: { enabled: true, incremento: 5, decremento: 5 },
    rfc: { enabled: false, incremento: 5, decremento: 5 },
    genero: { enabled: false, incremento: 5, decremento: 5 }
  });

  const handleFiltroChange = (filtro, field, value) => {
    setFiltros({
      ...filtros,
      [filtro]: {
        ...filtros[filtro],
        [field]: value
      }
    });
  };

  const handleSave = () => {
    console.log('Guardando configuraciones:', { config, similitud, resultado, muestra, filtros });
  };

  return (
    <div className="container">
      <header>
        <div className="header-icon"></div>
      </header>


      <section className="config-section">
        <div className="config-header">
          <label htmlFor="config">Configuración:</label>
          <select id="config" value={config} onChange={(e) => setConfig(e.target.value)}>
            <option value="1">Búsqueda de clientes</option>
          </select>
        </div>

        <div className="param-row">
          <div className="param">
            <label htmlFor="similitud">Porcentaje de similitud:</label>
            <input type="text" id="similitud" value={similitud} onChange={(e) => setSimilitud(e.target.value)} />
          </div>
          <div className="param">
            <label htmlFor="resultado">Tamaño de Resultado:</label>
            <input type="text" id="resultado" value={resultado} onChange={(e) => setResultado(e.target.value)} />
          </div>
          <div className="param">
            <label htmlFor="muestra">Tamaño de la Muestra:</label>
            <input type="text" id="muestra" value={muestra} onChange={(e) => setMuestra(e.target.value)} />
          </div>
        </div>

        <div className="filter-header">Filtros adicionales</div>

        <div className="filters-grid">
          {Object.keys(filtros).map((key) => (
            <div key={key} className="filter-group">
              <label>{key.replace(/([A-Z])/g, ' $1')}</label>
              <div className="toggle-switch">
              
              </div>
              <div className="filter-control">
                <label>Incremento:</label>
                <input
                  type="number"
                  value={filtros[key].incremento}
                  onChange={(e) => handleFiltroChange(key, 'incremento', parseInt(e.target.value))}
                />
              </div>
              <div className="filter-control">
                <label>Decremento:</label>
                <input
                  type="number"
                  value={filtros[key].decremento}
                  onChange={(e) => handleFiltroChange(key, 'decremento', parseInt(e.target.value))}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="save-button">
          <button onClick={handleSave}>Guardar</button>
        </div>
      </section>
    </div>
  );
};

export default Parametros;

