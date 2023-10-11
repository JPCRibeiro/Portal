import './CssGlobal.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"
import Inicio from "./pages/inicio/Inicio";
import Requerimento from "./pages/requerimento/Requerimento";
import Biblioteca from "./pages/biblioteca/Biblioteca";
import Boletim from "./pages/boletim/Boletim";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/boletim" element={<Boletim/>}/>
          <Route path="/requerimento" element={<Requerimento/>}/>
          <Route path="/biblioteca" element={<Biblioteca/>}/>
        </Routes>
    </Router>
  );
}
