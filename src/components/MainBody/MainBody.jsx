import React from 'react';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import newHome from '../newHome/newHome';
import Home from '../Home/Home';

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
