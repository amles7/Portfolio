import React from 'react';
import styles from'../styles/Contact.css'


function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contactez-moi</h2>
      <p>Vous souhaitez en savoir plus ou discuter d'un projet ? N'hésitez pas à me contacter via email !</p>
      <a href="Dahiselma@outlook.fr" className={styles.btn}>Email</a>

    </section>
  );
}

export default Contact;
