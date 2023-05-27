import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidenav from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer"
import styles from "./Boletim.module.css";

function InputNota({ label, nota, onChange, placeholder }) {
  return (
    <>
      <label>{label}</label>
      <input type="number" value={nota} onChange={onChange} placeholder={placeholder}/>
    </>
  );
}

function TableRow({ leftTd, rightTd, style }) {
  return (
    <tr>
      <td>
        {leftTd}
      </td>
      <td className={styles.tableRightCol} style={style}>
        {rightTd}
      </td>
    </tr>
  );
}

export default function Boletim() {
  const [nota1, setNota1] = useState("");
  const [nota1Tabela, setNota1Tabela] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota2Tabela, setNota2Tabela] = useState("");
  const [nota3, setNota3] = useState("");
  const [nota3Tabela, setNota3Tabela] = useState("");
  const [nota4, setNota4] = useState("");
  const [nota4Tabela, setNota4Tabela] = useState("");
  const [nota5, setNota5] = useState("");
  const [nota5Tabela, setNota5Tabela] = useState("");
  const [nota6, setNota6] = useState("");
  const [nota6Tabela, setNota6Tabela] = useState("");
  const [media, setMedia] = useState("");
  const [situacao, setSituacao] = useState("");
  const [notaFinal, setNotaFinal] = useState("");
  const [textoBotao, setTextoBotao] = useState("Calcular Boletim");

  const situacaoStyle = {
    color: media >= 6 ? "green" : "red",
  };

  const validaNota = (nota, setNota) => {
    if (nota > 10 || nota.length > 3 || nota < 0) {
      setNota("");
    } else {
      setNota(nota);
    }
  };

  const handleChangeNota1 = (e) => {
    const { value } = e.target;
    validaNota(value, setNota1);
  };

  const handleChangeNota2 = (e) => {
    const { value } = e.target;
    validaNota(value, setNota2);
  };

  const handleChangeNota3 = (e) => {
    const { value } = e.target;
    validaNota(value, setNota3);
  };

  const handleChangeNota4 = (e) => {
    const { value } = e.target;
    validaNota(value, setNota4);
  };

  const handleChangeNota5 = (e) => {
    const { value } = e.target;
    validaNota(value, setNota5);
  };

  const handleChangeNota6 = (e) => {
    const { value } = e.target;
    validaNota(value, setNota6);
  };

  const gerenciaNotas = () => {
    setNota1("");
    setNota2("");
    setNota3("");
    setNota4("");
    setNota5("");
    setNota6("");

    const nota1Tabela = parseFloat(nota1);
    const nota2Tabela = parseFloat(nota2);
    const nota3Tabela = parseFloat(nota3);
    const nota4Tabela = parseFloat(nota4);
    const nota5Tabela = parseFloat(nota5);
    const nota6Tabela = parseFloat(nota6);
    setNota1Tabela(nota1Tabela.toFixed(1));
    setNota2Tabela(nota2Tabela.toFixed(1));
    setNota3Tabela(nota3Tabela.toFixed(1));
    setNota4Tabela(nota4Tabela.toFixed(1));
    setNota5Tabela(nota5Tabela.toFixed(1));
    setNota6Tabela(nota6Tabela.toFixed(1));
  };

  useEffect(() => {
    const notasPreenchidas = nota1 && nota2 && nota3 && nota4 && nota5 && nota6;
    if (notasPreenchidas) {
      setTextoBotao("Calcular Boletim");
    }
  }, [nota1, nota2, nota3, nota4, nota5, nota6]);

  const calcularMedia = () => {
    const notasPreenchidas = nota1 && nota2 && nota3 && nota4 && nota5 && nota6;

    if (!notasPreenchidas) {
      setTextoBotao('Preencha todos os campos acima!')
      return;
    }

    const soma = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) + Number(nota5) + Number(nota6);
    const media = soma / 6;
    setMedia(media.toFixed(1));

    if (media >= 6) {
      setSituacao("Aprovado");
      setNotaFinal("");
    } else if (media >= 2) {
      setSituacao("Prova Final");
      const notaFinal = 12 - media;
      setNotaFinal(notaFinal.toFixed(1));
    } else {
      setSituacao("Reprovado");
    }

    gerenciaNotas();
  };

  const location = useLocation();

  useEffect(() => {
    document.title = "Boletim | Portal do Aluno";
  }, [location]);

  return (
    <section className={styles.container}>
      <Header/>
      <Sidenav/>
      <main className={styles.main}>
        <div className={styles.background}>
          <div className={styles.mainWrapper}>
            <h1>Boletim</h1>
            <hr></hr>
            <p className={styles.instruction}>Registre sua notas e veja sua situação em cada matéria</p>
            <div className={styles.box}>
              <div className={styles.inputBox}>
                <InputNota label="1º Bimestre" nota={nota1} onChange={handleChangeNota1} placeholder="2"/>
                <InputNota label="2º Bimestre" nota={nota2} onChange={handleChangeNota2} placeholder="9"/>
                <InputNota label="3º Bimestre" nota={nota3} onChange={handleChangeNota3} placeholder="7.5"/>
                <InputNota label="4º Bimestre" nota={nota4} onChange={handleChangeNota4} placeholder="10"/>
                <InputNota label="5º Bimestre" nota={nota5} onChange={handleChangeNota5} placeholder="1.5"/>
                <InputNota label="6º Bimestre" nota={nota6} onChange={handleChangeNota6} placeholder="3"/>
                <button onClick={calcularMedia}>{textoBotao}</button>
              </div>
              <div className={styles.tableBox}>
                <table>
                  <tbody>
                    <TableRow leftTd="Nota - 1º Bimestre" rightTd={nota1Tabela}/>
                    <TableRow leftTd="Nota - 2º Bimestre" rightTd={nota2Tabela}/>
                    <TableRow leftTd="Nota - 3º Bimestre" rightTd={nota3Tabela}/>
                    <TableRow leftTd="Nota - 4º Bimestre" rightTd={nota4Tabela}/>
                    <TableRow leftTd="Nota - 5º Bimestre" rightTd={nota5Tabela}/>
                    <TableRow leftTd="Nota - 6º Bimestre" rightTd={nota6Tabela}/>
                    <TableRow leftTd="Média Final" rightTd={media} />
                    <TableRow style={situacaoStyle} leftTd="Situação" rightTd={situacao}/>
                    {media >= 2 && media < 6 && (
                      <TableRow leftTd="Nota para passar" rightTd={notaFinal} />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
