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
        <Routes basename="/Portal/login">
          <Route path="/Portal/login" element={<Login/>}/>
          <Route path="/Portal/inicio" element={<Inicio/>}/>
          <Route path="/Portal/boletim" element={<Boletim/>}/>
          <Route path="/Portal/requerimento" element={<Requerimento/>}/>
          <Route path="/Portal/biblioteca" element={<Biblioteca/>}/>
        </Routes>
    </Router>
  );
}
