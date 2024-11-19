import React from "react";


function Modal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.name}</h2>
        
        <p><strong>Description :</strong> {project.description}</p>
        <p><strong>Technologies :</strong> {project.technologies}</p>

        {project.issues && (
          <div>
            <h3>Problématiques rencontrées :</h3>
            <ul>
              {project.issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>
        )}

        {project.solutions && (
          <div>
            <h3>Solutions apportées :</h3>
            <ul>
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>
        )}

        {project.skills && (
          <div>
            <h3>Compétences développées :</h3>
            <ul>
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        <a href={project.github} target="_blank" rel="noopener noreferrer">
          Voir le projet sur GitHub
        </a>

        <button onClick={onClose} aria-label="Fermer le modal">X</button>
      </div>
    </div>
  );
}

export default Modal;
