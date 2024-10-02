// src/Projects.js
import React, { useState } from 'react';
import Modal from './Modal';
import Layout from './Layout';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const projects = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' },
    { title: 'Project 3', description: 'Description of project 3' },
  ];

  return (
    <Layout>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => openModal(project)}>Learn More</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </Layout>
  );
};

export default Projects;

