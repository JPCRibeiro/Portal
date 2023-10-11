import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"
import Inicio from "./pages/inicio/Inicio";
import Boletim from "./pages/boletim/Boletim";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/boletim" element={<Boletim/>}/>
        </Routes>
    </Router>
  );
}