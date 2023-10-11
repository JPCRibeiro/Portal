import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidenav from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import styles from "./Biblioteca.module.css";
import materiaData from '../../materialData.json';

function SubjectBox({ className, materia, apostilas, onClick }) {
  return (
    <div className={styles.subjectBox}>
      <div className={className}>
        <button onClick={() => onClick(apostilas)}>Acessar</button>
      </div>
      <span>{materia}</span>
    </div>
  );
}

export default function Biblioteca() {
  const location = useLocation();
  const [showMsg, setShowMsg] = useState(false);
  const [apostilas, setApostilas] = useState([]);
  const [selectedAno, setSelectedAno] = useState(null);

  useEffect(() => {
    document.title = "Livro Digital | Portal do Aluno";
  }, [location]);

  const handleCloseMsg = () => {
    setShowMsg(false);
    setSelectedAno(null);
  };

  const handleClick = (apostilas) => {
    setApostilas(apostilas);
    setShowMsg(true);
    setSelectedAno(null);

    if (showMsg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleAnoClick = (ano) => {
    setSelectedAno(ano);
  };

  return (
    <section className={styles.container}>
      <Header />
      <Sidenav />
      <main className={styles.main}>
        <div className={styles.background}>
          <div className={styles.mainWrapper}>
            <h1>Livro Digital</h1>
            <hr></hr>
            <div className={styles.subjectsWrapper}>
              <SubjectBox
                onClick={handleClick}
                materia="Biologia"
                apostilas={materiaData.materias[0].Biologia}
                className={styles.imgBio}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Filosofia"
                apostilas={materiaData.materias[1].Filosofia}
                className={styles.imgFilo}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Física"
                apostilas={materiaData.materias[2].Física}
                className={styles.imgFis}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Geografia"
                apostilas={materiaData.materias[3].Geografia}
                className={styles.imgGeo}
              />
              <SubjectBox
                onClick={handleClick}
                materia="História"
                apostilas={materiaData.materias[4].História}
                className={styles.imgHist}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Inglês"
                apostilas={materiaData.materias[5].Inglês}
                className={styles.imgIng}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Português"
                apostilas={materiaData.materias[6].Português}
                className={styles.imgPort}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Literatura"
                apostilas={materiaData.materias[7].Literatura}
                className={styles.imgLit}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Matemática"
                apostilas={materiaData.materias[8].Matemática}
                className={styles.imgMat}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Química"
                apostilas={materiaData.materias[9].Química}
                className={styles.imgQui}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Redação"
                apostilas={materiaData.materias[10].Redação}
                className={styles.imgRed}
              />
              <SubjectBox
                onClick={handleClick}
                materia="Sociologia"
                apostilas={materiaData.materias[11].Sociologia}
                className={styles.imgSocio}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {showMsg && (
        <div className={styles.msg}>
          <div className={styles.msgBox}>
            {selectedAno ? (
              <div>
                <h2>{selectedAno}</h2>
                <p>{apostilas.find((apostila) => apostila.ano === selectedAno).apostila}</p>
                <button onClick={handleCloseMsg}>Fechar Apostila</button>
              </div>
            ) : (
              <div>
                <h2>Selecione o seu ano escolar:</h2>
                <ul>
                  {apostilas.map((apostila) => (
                    <li key={apostila.ano} onClick={() => handleAnoClick(apostila.ano)}>
                      {apostila.ano}
                    </li>
                  ))}
                </ul>
                <button onClick={handleCloseMsg}>Fechar Aba</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}