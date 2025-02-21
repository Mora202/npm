import React, { useState } from "react";

const AnonymousReport = ({ onBack }) => {
  const [empresa, setEmpresa] = useState("");
  const [tipoReporte, setTipoReporte] = useState("");
  const [funcionario, setFuncionario] = useState("");
  const [cargo, setCargo] = useState("");
  const [detalle, setDetalle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      empresa,
      tipoReporte,
      funcionario,
      cargo,
      detalle,
    });
    alert("Reporte enviado con éxito.");
    onBack();
  };

  return (
    <div className="report-container">
      <h2>Reporte Anónimo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tipo de reporte"
          value={tipoReporte}
          onChange={(e) => setTipoReporte(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Funcionario a reportar"
          value={funcionario}
          onChange={(e) => setFuncionario(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cargo del funcionario"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          required
        />
        <textarea
          placeholder="Detalle de la denuncia"
          value={detalle}
          onChange={(e) => setDetalle(e.target.value)}
          required
        />
        <button type="submit">Enviar Reporte</button>
        <button type="button" onClick={onBack}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default AnonymousReport;
