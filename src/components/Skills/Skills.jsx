import React, { useEffect } from 'react';
import './Skills.css'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Skills() {

  useEffect(() => {
    gsap.utils.toArray(".reveal-section").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className='skillsContainer'>
        <h1 className="skillsMainHead">Skills</h1>

        <div className='skillsDiv'>

          <div className='SkillsBox reveal-section' >
            <h1 className='text-2xl md:text-3xl'>Languages</h1>
            <div className='skillsLogoDiv'>
              <div className='individualskill'>
                <img src="html.png" alt="" className='skillslogoimg' />
                <p>HTML</p>
              </div>

              <div className='individualskill'>
                <img src="css.png" alt="" className='skillslogoimg' />
                <p>CSS</p>
              </div>

              <div className='individualskill'>
                <img src="js.png" alt="" className='skillslogoimg' />
                <p>Javascript</p>
              </div>

              <div className='individualskill'>
                <img src="sql.png" alt="" className='skillslogoimg' />
                <p>SQl</p>
              </div>
            </div>
          </div>

          <div className='SkillsBox reveal-section' >
            <h1 className='librariesHeading text-2xl md:text-3xl'>Libraries & Frameworks</h1>

            <div className='skillsLogoDiv'>
              <div className='individualskill'>
                <img src="react.png" alt="" className='skillslogoimg' />
                <p>React</p>
              </div>

              <div className='individualskill'>
                <img src="redux.png" alt="" className='skillslogoimg' />
                <p>Redux</p>
              </div>

              <div className='individualskill'>
                <img src="tailwindcss.png" alt="" className='skillslogoimg' />
                <p>Tailwind CSS</p>
              </div>

              <div className='individualskill'>
                <img src="bootstrap.png" alt="" className='skillslogoimg' />
                <p>Bootstrap</p>
              </div>
            </div>
          </div>


          <div className='SkillsBox reveal-section'>
            <h1 className='text-2xl md:text-3xl'>Tools</h1>

            <div className='skillsLogoDiv'>
              <div className='individualskill'>
                <img src="git.png" alt="" className='skillslogoimg' />
                <p>Git</p>
              </div>

              <div className='individualskill'>
                <img src="github.png" alt="" className='skillslogoimg invertColor' />
                <p>Github</p>
              </div>

              <div className='individualskill'>
                <img src="vscode.png" alt="" className='skillslogoimg' />
                <p>Vs Code</p>
              </div>
            </div>
          </div>


          <div className='SkillsBox reveal-section' >
            <h1 className='text-2xl md:text-3xl'>Others</h1>

            <div className='skillsLogoDiv'>
              <div className='individualskill'>
                <img src="firebase.png" alt="" className='skillslogoimg' />
                <p>Firebase</p>
              </div>

              <div className='individualskill'>
                <img src="problemsolving.png" alt="" className='skillslogoimg' />
                <p>Problem Solving</p>
              </div>

              <div className='individualskill'>
                <img src="communication.png" alt="" className='skillslogoimg invertColor' />
                <p>Communi- <br />cation</p>
              </div>

              <div className='individualskill'>
                <img src="api.png" alt="" className='skillslogoimg ' />
                <p>API</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Skills;
