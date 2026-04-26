import React, { useState } from "react";
import "../styles/PanelMaterias.css";

export default function InfoEvaluacion({ items = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="info-evaluacion">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h4 style={{ margin: 0 }}>Evaluaciones</h4>
        <button className="momento-btn" onClick={() => setOpen((s) => !s)}>
          {open ? "Ocultar" : "Ver"}
        </button>
      </div>

      {open && (
        <div style={{ marginTop: 8 }}>
          {items.length === 0 ? (
            <p>No existen evaluaciones cargadas.</p>
          ) : (
            <ul>
              {items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
