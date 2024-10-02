// src/About.js
import React from 'react';
import Layout from './Layout';

const About = () => {
  return (
    <Layout>
      <h2>About Me</h2>
      <p>
        I am a [Your Role] with a passion for [Your Passion]. I have a degree in [Your Education] and have worked on projects involving [skills or tools you’ve used].
      </p>

      <h3>Skills</h3>
      <ul>
        <li>React, Redux</li>
        <li>JavaScript, HTML, CSS</li>
        <li>Node.js, Express</li>
        <li>Other Technologies</li>
      </ul>

      <h3>Experience</h3>
      <p>
        I have [X years] of experience working as a [your job title] at [company] where I focused on [specific work or projects].
      </p>
    </Layout>
  );
};

export default About;

