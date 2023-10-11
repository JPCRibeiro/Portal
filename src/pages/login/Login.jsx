import styles from './Login.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
//import alunosData from '../../alunos.json';
import logo from "../../assets/book-logo.svg";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameMessageError, setUsernameMessageError] = useState('');
  const [passwordMessageError, setPasswordMessageError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameMessageError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMessageError('');
  };

  /*
  const validateForm = () => {
    const minimoCaracteresSenha = 8;
    let valid = true;

    if (!username || username.trim() === '') {
      setUsernameMessageError('O campo deve estar preenchido!');
      valid = false;
    } else if (!alunosData.alunos.find((aluno) => aluno.nome === username.trim())) {
      setUsernameMessageError('Usuário não encontrado!');
      valid = false;
    } 
  
    if (password.length < minimoCaracteresSenha) {
      setPasswordMessageError(`A senha deve conter no mínimo ${minimoCaracteresSenha} caracteres!`);
      valid = false;
    }

    return valid;
  };
  */

  const validateForm = () => {
    const minimoCaracteresSenha = 8;
    let valid = true;

    if (username.trim() === '') {
      setUsernameMessageError('O campo deve estar preenchido!');
      valid = false;
    } 
  
    if (password.length < minimoCaracteresSenha) {
      setPasswordMessageError(`A senha deve conter no mínimo ${minimoCaracteresSenha} caracteres!`);
      valid = false;
    }

    return valid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      localStorage.setItem("username", username);
      navigate("/inicio");
    }
  };

  const location = useLocation();

  useEffect(() => {
    document.title = "Login | Portal do Aluno";
  }, [location]);


  return (
    <main className={styles.container}>
      <div className={styles.formBox}>
        <img src={logo} alt="logo" width="50"/>
        <form className={styles.form}>
          <h1>Login do Aluno</h1>
          <label>Usuário</label>
          <input className={`${styles.inputUsername} ${usernameMessageError && styles.borderError}`} type="text" value={username} onChange={handleUsernameChange} placeholder="Nome do Aluno"/>
          <span>{usernameMessageError}</span>
          <label>Senha</label>
          <input className={`${styles.inputPassword} ${passwordMessageError && styles.borderError}`} type="password" onChange={handlePasswordChange} placeholder="••••••••"/>
          <span>{passwordMessageError}</span>
          <button type="button" onClick={handleLogin}>Entrar</button>
        </form>
      </div>
    </main>
  );
}