import React, { useState } from "react";
import InfoEvaluacion from "./InfoEvaluacion";
import BotonFormularioEntrega from "./BotonFormularioEntrega";
import "../styles/PanelMaterias.css";

export default function InfoMateria({ nombre, descripcion, evaluaciones = [], onEntrega }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleEntrega() {
    if (typeof onEntrega === "function") onEntrega();
    else alert("Abrir formulario de entrega");
  }

  return (
    <div className="materia-card">
      <div className="materia-header">
        <h2>{nombre}</h2>
        <div className="materia-actions">
          <button className="momento-btn" onClick={() => setShowDetails((s) => !s)}>
            {showDetails ? "Ocultar" : "Detalles"}
          </button>
        </div>
      </div>

      <div className="materia-content">
        {showDetails && descripcion && <p className="materia-desc">{descripcion}</p>}

        <InfoEvaluacion items={evaluaciones} />
      </div>

      <div className="materia-footer">
        <div className="materia-footer-left">
          {/* place for extra small info if needed */}
        </div>

        <div className="materia-footer-actions">
          <button className="btn-cargar" onClick={handleEntrega}>
            Entregar.
          </button>
          <BotonFormularioEntrega onClick={handleEntrega} />
        </div>
      </div>
    </div>
  );
}
