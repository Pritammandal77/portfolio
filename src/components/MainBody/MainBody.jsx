import React from 'react';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Experience from '../../Pages/Experience';
import Skills from '../../Pages/Skills';
import Projects from '../../Pages/Projects';
import ContactMe from '../../Pages/ContactMe';
import { WobbleCard } from '../ui/WobbleCard';


function MainBody() {
  return (
    <>
      <section id="home">
        <Home/>
      </section>
      {/* <section id='about'>
        <WobbleCard />
      </section> */}
      <section id='about'>
        <About />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      {/* <section id='techstack'>
        <TechStack />
      </section> */}
      <section id='projects'>
        <Projects />
      </section>
      <section id='contactme'>
        <ContactMe />
      </section>
    </>
  );
}

export default MainBody;
