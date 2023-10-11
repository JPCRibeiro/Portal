import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import BookIcon from '@mui/icons-material/MenuBookRounded';
import TextIncreaseIcon from '@mui/icons-material/TextIncreaseRounded';
import HomeIcon from '@mui/icons-material/HomeRounded';
import styles from "./Sidebar.module.css";

export default function Sidenav() {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  }

  return (
    <aside style={{ width: clicked ? '197.52px' : '70px' }}>
      <div style={{ left: '0', position: 'fixed' }}>
        <div className={styles.top}>
          <p style={{ display: clicked ? 'block' : 'none' }}>Menu</p>
          <button onClick={toggle}>{clicked ? <CloseIcon sx={{ fontSize: 30 }}/> : <MenuIcon sx={{ fontSize: 30 }}/>}</button>
        </div>
        <ul>
          <Link title="Início" to='/inicio'>
            <HomeIcon sx={{ fontSize: 30 }}/>
            <span style={{ display: clicked ? 'block' : 'none' }}>Página Inicial</span>
          </Link>
          <Link title="Boletim" to='/boletim'>
            <TextIncreaseIcon sx={{ fontSize: 30 }} />
            <span style={{ display: clicked ? 'block' : 'none' }}>Boletim</span>
          </Link>
          <Link title="Biblioteca Virtual" to='/biblioteca'>
            <BookIcon sx={{ fontSize: 30 }} />
            <span style={{ display: clicked ? 'block' : 'none' }}>Livro Virtual</span>
          </Link>
        </ul>
      </div>
    </aside>
  );
}
