import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Requerimento.module.css";
import Header from "../../components/header/Header";
import Sidenav from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

export default function Requerimento() {
  const location = useLocation();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [turma, setTurma] = useState("");
  const [motivo, setMotivo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fileName, setFileName] = useState("Nenhum arquivo escolhido");
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Requerimento | Portal do Aluno";
  }, [location]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setErrorMessages((prevState) => ({ ...prevState, [name]: "" }));

    switch (name) {
      case "nome":
        setNome(value);
        break;
      case "sobrenome":
        setSobrenome(value);
        break;
      case "matricula":
        setMatricula(value);
        break;
      case "turma":
        setTurma(value);
        break;
      case "motivo":
        setMotivo(value);
        break;
      case "descricao":
        setDescricao(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(fileName);
    }
  };

  const handleSubmit = () => {
    const inputs = [
      {name: "nome", value: nome, errorMessage: "Preencha esse campo obrigatório."},
      { name: "sobrenome", value: sobrenome, errorMessage: "Preencha esse campo obrigatório."},
      {name: "matricula", value: matricula, errorMessage: "Preencha esse campo obrigatório."},
      {name: "motivo", value: motivo, errorMessage: "Preencha esse campo obrigatório."},
      {name: "turma", value: turma, errorMessage: "Selecione uma opção no menu."},
      {name: "descricao", value: descricao, errorMessage: "Preencha esse campo obrigatório."},
    ];

    const newErrorMessages = {};

    inputs.forEach((input) => {
      if (input.value === "") {
        newErrorMessages[input.name] = input.errorMessage;
      } else {
        newErrorMessages[input.name] = "";
      }
    });

    setErrorMessages(newErrorMessages);

    if (Object.values(newErrorMessages).every((erro) => erro === "")) {
      setIsLoading(true);
      setInterval(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <section className={styles.container}>
        <Header/>
        <Sidenav/>
        <main className={styles.main}>
          <div className={styles.background}>
            <div className={styles.mainWrapper}>
              <div className={styles.formSent}>
                <h1>Sua solicitação foi enviada!</h1>
                <h2>Retornaremos contato em breve.</h2>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <Header />
      <Sidenav />
      <main className={styles.main}>
        <div className={styles.background}>
          <div className={styles.mainWrapper}>
            <h1>Abrir Requerimento</h1>
            <hr></hr>
            <div className={styles.col3}>
              <div className={`${styles.inputBox} ${styles.col1}`}>
                <label>Nome<span className={styles.required}>*</span></label>
                <input className={errorMessages.nome && styles.borderError} type="text" name="nome" value={nome} onChange={handleInputChange}/>
                <span className={styles.error}>{errorMessages.nome}</span>
              </div>
              <div className={styles.inputBox}>
                <label>Sobrenome<span className={styles.required}>*</span></label>
                <input className={errorMessages.sobrenome && styles.borderError} type="text" name="sobrenome" value={sobrenome} onChange={handleInputChange}/>
                <span className={styles.error}>{errorMessages.sobrenome}</span>
              </div>
              <div className={styles.inputBox}>
                <label>Matrícula<span className={styles.required}>*</span></label>
                <input className={errorMessages.matricula && styles.borderError} type="number" name="matricula" value={matricula} onChange={handleInputChange}/>
                <span className={styles.error}>{errorMessages.matricula}</span>
              </div>
            </div>
            <div className={styles.col1}>
              <label>Turma<span className={styles.required}>*</span></label>
              <select className={errorMessages.turma && styles.borderError} type="option" value={turma} name="turma"onChange={handleInputChange}>
                <option hidden>Selecione sua turma</option>
                <option>1° ano do Ensino Fundamental</option>
                <option>2° ano do Ensino Fundamental</option>
                <option>3° ano do Ensino Fundamental</option>
                <option>4° ano do Ensino Fundamental</option>
                <option>5° ano do Ensino Fundamental</option>
                <option>6° ano do Ensino Fundamental</option>
                <option>7° ano do Ensino Fundamental</option>
                <option>8° ano do Ensino Fundamental</option>
                <option>9° ano do Ensino Fundamental</option>
                <option>1° ano do Ensino Médio</option>
                <option>2° ano do Ensino Médio</option>
                <option>3° ano do Ensino Médio</option>
              </select>
              <span className={styles.error}>{errorMessages.turma}</span>
            </div>
            <div className={styles.col1}>
              <label>
                Motivo da solicitação<span className={styles.required}>*</span>
              </label>
              <input className={errorMessages.motivo && styles.borderError} type="text" name="motivo" value={motivo} onChange={handleInputChange}/>
              <span className={styles.error}>{errorMessages.motivo}</span>
            </div>
            <div className={styles.col1}>
              <label>Descrição da solicitação<span className={styles.required}>*</span></label>
              <textarea className={errorMessages.descricao && styles.borderError}name="descricao" value={descricao} onChange={handleInputChange} placeholder="Por favor, preencha com todas as informações necessárias para atendermos sua solicitação."/>
              <span className={styles.error}>{errorMessages.descricao}</span>
            </div>
            <div>
              <label>Anexar Documentação</label>
              <input id="file" type="file" onChange={handleFileChange} />
              <label htmlFor="file">
                <span className={styles.fileUpload}>Escolher arquivo</span>
                <span>{fileName}</span>
              </label>
            </div>
            <button type="button" onClick={handleSubmit}>
              {isLoading ? "Enviando" : "Enviar solicitação"}
              {isLoading && <div className={styles.loader}></div>}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
