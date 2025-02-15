import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';


function MainBody() {
  return (
    <>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </>
  );
}

export default MainBody;
