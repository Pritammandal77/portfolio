import React from 'react';
import About from '../../Pages/About/About';
import Skills from '../../Pages/Skills/Skills';
import Projects from '../../Pages/Projects/Projects';
import ContactMe from '../../Pages/ContactMe/ContactMe';
import Home from '../../Pages/Home/Home';

function MainBody() {
  return (
    <>
      <section id="home">
        <Home/>
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
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
