// src/Home.js
import React, { useState } from 'react';
import Modal from './Modal';
import Layout from './Layout';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout>
      <h2>Hello, I'm [Your Name]</h2>
      <p>
        I'm a [Your Profession], passionate about building exceptional digital experiences. 
        Currently, I’m focused on [current project or expertise]. 
      </p>

      <button onClick={openModal}>More About Me</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>More About Me</h2>
        <p>
          I have experience in [list skills or technologies] and have worked on various projects such as [list a couple of key projects].
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </Layout>
  );
};

export default Home;

