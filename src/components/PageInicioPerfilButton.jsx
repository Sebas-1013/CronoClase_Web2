import { Link } from "react-router-dom";
import "../styles/Buttons.css";

export function PageInicioPerfilButton() {
  return (
    <div className="button-container">
      <a href ="inicio-sesion-estudiante"  className="button">
        Estudiante
      </a>
      <a href="inicio-sesion-profesor" className="button">
        Profesor
      </a>
    </div>
  );
}

export default PageInicioPerfilButton;
