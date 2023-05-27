import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidenav from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import styles from "./Biblioteca.module.css";

function SubjectBox({ className, materia }) {
  return(
    <div className={styles.subjectBox}>
      <div className={className}>
        <button>Acessar</button>
      </div>
      <span>{materia}</span>
    </div>
  )
}

export default function Biblioteca() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Livro Digital | Portal do Aluno";
  }, [location]);

  return (
    <section className={styles.container}>
      <Header/>
      <Sidenav/>
      <main className={styles.main}>
        <div className={styles.background}>
          <div className={styles.mainWrapper}>
            <h1>Livro Digital</h1>
            <hr></hr>
            <div className={styles.subjectsWrapper}>
              <SubjectBox materia='Biologia' className={styles.imgBio}/>
              <SubjectBox materia='Filosofia' className={styles.imgFilo}/>
              <SubjectBox materia='Física' className={styles.imgFis}/>
              <SubjectBox materia='Geografia' className={styles.imgGeo}/>
              <SubjectBox materia='História' className={styles.imgHist}/>
              <SubjectBox materia='Inglês' className={styles.imgIng}/>
              <SubjectBox materia='Português' className={styles.imgPort}/>
              <SubjectBox materia='Literatura' className={styles.imgLit}/>
              <SubjectBox materia='Matemática' className={styles.imgMat}/>
              <SubjectBox materia='Química' className={styles.imgQui}/>
              <SubjectBox materia='Redação' className={styles.imgRed}/>
              <SubjectBox materia='Sociologia' className={styles.imgSocio}/>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </section>
  );
}
