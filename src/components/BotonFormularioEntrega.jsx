import React from "react";
import "../styles/PanelMaterias.css";

export default function BotonFormularioEntrega({ onClick }) {
  return (
    <button className="btn-cargar" onClick={onClick || (() => alert('Abrir formulario de entrega'))}>
      Cargar Entregas
    </button>
  );
}
