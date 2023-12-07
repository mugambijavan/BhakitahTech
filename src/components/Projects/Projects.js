import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Your Vision, Our Innovation</SectionTitle>
  <iframe
      src="https://projects-exhibit.vercel.app/"
      title="Projects Exhibit"
      width="100%"
      height="500px"
      frameBorder="0"
    ></iframe>
  </Section>
);

export default Projects;
