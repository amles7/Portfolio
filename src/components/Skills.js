import React from 'react';
import Collapse from './Collapse';
import styles from '../styles/Skills.css';
import Circle from '../image/Circle.webp'


function Skills() {
  return (
    
    <section id="skills" className={styles.skills}>
      
      <div className='titre'>
      <h2>Mes Compétences</h2>
      <img src={Circle} alt="compétence developpeur web" />
</div>
      
      <Collapse title="HTML et CSS">
        <p className='content'>Création d’interfaces responsives et optimisées avec HTML5 et CSS3, incluant Flexbox et Grid.</p>
      </Collapse>

      <Collapse title="React">
        <p>Développement d’interfaces dynamiques et réactives, avec une organisation en composants.</p>
      </Collapse>

      <Collapse title="JavaScript">
        <p>En apprentissage pour renforcer mon utilisation dans le développement front-end.</p>
      </Collapse>

      <Collapse title="Optimisation et Débogage">
        <p>Amélioration des performances des sites et identification des erreurs à l’aide de Chrome DevTools.</p>
      </Collapse>
    </section>
   
  ); 
}

export default Skills;
