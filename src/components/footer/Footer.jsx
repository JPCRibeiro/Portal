import { Link } from "react-router-dom";
import "./Footer.module.css";
import logo from "../../assets/book-logo.svg";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="logo" width="40"/>
        <ul>
          <Link to="/requerimento">
            <li>Requerimentos</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
