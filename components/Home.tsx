import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
};

export default Home;