import React, { useState } from "react";
import "../styles/Projects.css";
import Modal from "./Modal"; 
import Booki from"../image/Booki.png"
import Architecte from"../image/Architecte.png"
import kasa from "../image/Kasa.png"
import Grimoire from "../image/Grimoire.png"
import Photographe from "../image/Photographe.png"

const projectsData = [
  {
    id: 1,
    name: "Agence de voyage",
    description: "Page d'accueil pour une agence de voyage intégrée en HTML et CSS, permettant aux utilisateurs de trouver des hébergements et activités.",
    technologies: "HTML, CSS",
    image: Booki,
    github: "https://github.com/amles7/p1-Booki",
    issues: [
      "Adaptation de la mise en page pour les écrans de différentes tailles (desktop, tablette, mobile).",
      "Optimisation de la structure HTML pour respecter les bonnes pratiques d'accessibilité."
    ],
    solutions: [
      "Utilisation de flexbox et de media queries pour garantir une mise en page responsive adaptée à chaque format d'écran.",
      "Amélioration des balises sémantiques HTML pour une meilleure accessibilité et référencement naturel (SEO)."
    ],
    skills: [
      "Création d'une interface utilisateur en HTML/CSS",
      "Adaptation de la mise en page pour différents supports (desktop, tablette, mobile)",
      "Optimisation pour l'accessibilité et le référencement naturel"
    ]
  },
  {
    id: 2,
    name: "Portfolio d’une architecte d’intérieur",
    description: "Page web dynamique pour présenter le portfolio d'une architecte d'intérieur, incluant des fonctionnalités administratives et de gestion de contenu.",
    technologies: "JavaScript",
    image: Architecte,
    github: "https://github.com/amles7/Sophie-Bluel/tree/master",
    issues: [
      "Intégration des nouvelles fonctionnalités en respectant le design Figma tout en maintenant la cohérence avec le code existant.",
      "Développement de la page de connexion et de la modale d'upload pour permettre au client de gérer ses contenus.",
      "Assurer la persistance des données via le backend fourni pour que les mises à jour restent visibles."
    ],
    solutions: [
      "Utilisation de JavaScript pour créer la page de connexion et la modale d'upload, en suivant les bonnes pratiques pour le développement dynamique et sécurisé.",
      "Adoption de Figma comme référence visuelle, permettant une intégration fidèle des éléments de design tout en ajustant les composants au besoin.",
      "Tests réguliers en local et utilisation de la structure backend fournie pour garantir la persistance des données."
    ],
    skills: [
      "Développement d'interfaces dynamiques avec JavaScript",
      "Création de fonctionnalités administratives (connexion, upload de médias)",
      "Intégration d'UI depuis des designs Figma"
    ]
  },
  {
    id: 3,
    name: "Site de photographe",
    description: "Optimisation et débogage du site de la photographe Nina Carducci pour améliorer les performances, le SEO et l'accessibilité.",
    technologies: "SEO",
    image: Photographe,
    github: "https://github.com/amles7/Nina-Carducci",
    issues: [
      "Améliorer la vitesse de chargement du site, notamment à cause des images trop lourdes.",
      "Optimiser le référencement local pour augmenter la visibilité dans les résultats de recherche.",
      "Corriger les bugs de la modale de la galerie et du système de filtres pour l’affichage des catégories."
    ],
    solutions: [
      "Compression des images et utilisation de formats adaptés pour alléger le poids des fichiers et améliorer le temps de chargement.",
      "Ajout de données structurées Schema.org pour le référencement local, et ajout de métadonnées pour les réseaux sociaux.",
      "Débogage de la navigation dans la modale pour permettre le passage entre images, et ajout d'un indicateur visuel doré pour la catégorie sélectionnée."
    ],
    skills: [
      "Optimisation des performances pour le SEO",
      "Mise en œuvre de Schema.org pour le référencement local",
      "Amélioration de l'accessibilité et du code pour une meilleure expérience utilisateur",
      "Correction de bugs dans des fonctionnalités dynamiques (modale et filtres)"
    ]
  },
  {
    id: 4,
    name: "Application web de location immobilière",
    description: "Développement d'une application de location immobilière en React pour Kasa, avec un design responsive et des fonctionnalités interactives.",
    technologies: "React, Sass",
    image: kasa,
    github: "https://github.com/amles7/kasa",
    issues: [
      "Absence de backend : j'ai dû travailler uniquement avec un fichier JSON pour les données d'annonces.",
      "Conformité avec le design et les animations Figma tout en assurant la responsivité du site.",
      "Implémentation d'une galerie d'images avec défilement cyclique et gestion de l'affichage d'un seul bouton si une seule image est présente."
    ],
    solutions: [
      "Utilisation du fichier JSON fourni pour simuler le backend, en structurant le code pour faciliter l'intégration future d'une API.",
      "Application de React Router pour la navigation et création de composants modulaires pour respecter les maquettes Figma.",
      "Développement d'un composant Gallery avec des fonctionnalités cycliques, comme spécifié, pour une navigation fluide et intuitive dans les images."
    ],
    skills: [
      "Développement d'applications web avec React",
      "Gestion des états et de la navigation avec React Router",
      "Intégration de maquettes et animations depuis Figma",
      "Utilisation de Sass pour le CSS et animations pour le menu déroulant"
    ]
  },
  {
    id: 5,
    name: "Site de notation de livres",
    description: "Développement du back-end pour un site de notation de livres nommé 'Mon Vieux Grimoire', permettant aux utilisateurs d'ajouter et noter des livres.",
    technologies: "Express, MongoDB, CRUD",
    image: Grimoire,
    github: "https://github.com/amles7/-Mon-Vieux-Grimoire",
    issues: [
      "Conception d'une API RESTful pour gérer les données de notation de livres et permettre l'ajout de nouveaux livres.",
      "Assurer la compatibilité avec le front-end React développé par un autre collaborateur, selon les spécifications techniques de l'API.",
      "Implémentation d'une optimisation des images uploadées pour respecter les bonnes pratiques de Green Code et minimiser l'empreinte écologique."
    ],
    solutions: [
      "Création d'une API RESTful avec Express et MongoDB, permettant des opérations CRUD pour l'ajout, la mise à jour, la suppression et la notation des livres.",
      "Tests de l'API avec Postman pour vérifier la conformité avec les spécifications fournies et garantir l'intégration fluide avec le front-end.",
      "Utilisation de bibliothèques d'optimisation d'images côté serveur pour réduire la taille des images uploadées et respecter les bonnes pratiques en matière de développement durable."
    ],
    skills: [
      "Développement d'API RESTful avec Express et MongoDB",
      "Gestion des opérations CRUD et persistance des données",
      "Optimisation d'images pour le Green Code",
      "Collaboration avec un développeur front-end pour l'intégration API"
    ]
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id ="portfolio"className="projectContainer">
      {projectsData.map((project) => (
        <div key={project.id} className="projectCard" onClick={() => openModal(project)}>
          <img src={project.image} alt={`${project.name} screenshot`} className="projectImage" />
          <h3>{project.name}</h3>
        </div>
      ))}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projects;