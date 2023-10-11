import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div>
      Inicio
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/inicio">Home</Link>
          </li>
          <li>
            <Link to="/boletim">Boletim</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
