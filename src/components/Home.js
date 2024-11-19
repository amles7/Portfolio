import React from "react";
import'../styles/Home.css';
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";


function Home() {
  return (
    <section className="home">
      <Header></Header>
      <h1>Bonjour !</h1>
      <p>
        Je suis développeur front-end spécialisé en HTML, CSS, optimisation et
        React. J’aime créer des interfaces web intuitives, performantes et
        optimisées pour différents appareils. Avec une passion pour
        l’intégration et un œil pour les détails, je cherche à rejoindre une
        équipe dynamique où je pourrai continuer à apprendre et à contribuer à
        des projets innovants. Explorez mon portfolio pour découvrir mes
        compétences et projets.
      </p>
      <Projects />
      <Skills/>

      <Footer></Footer>
      
    </section>
  );
}

export default Home;
