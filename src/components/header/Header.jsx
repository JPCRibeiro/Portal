import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import AccountIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../assets/book-logo.svg";

export default function Header() {
  const username = localStorage.getItem("username");

  return (
    <header>
      <nav>
        <div className={styles.userInfo}>
          <AccountIcon sx={{ fontSize: 40 }} />
          <span>{username}</span>
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width="40" />
          <span>Portal do Aluno</span>
        </div>
        <Link title='Sair' to="/Portal/login">
            <span>Sair</span>
            <LogoutIcon sx={{ fontSize: 30 }} />
        </Link>
      </nav>
    </header>
  );
}