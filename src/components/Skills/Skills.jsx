import React from 'react';
import './Skills.css'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Skills() {

  const SkillDiv1 = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(SkillDiv1.current, {
      opacity: 0,
      duration: 0.6,
      y: 400,
      scrollTrigger: {
        trigger: SkillDiv1.current,
        scroller: "body",
        start: "top 100%"
      }

    })
  })

  const SkillDiv2 = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(SkillDiv2.current, {
      opacity: 0,
      duration: 0.6,
      y: 300,
      scrollTrigger: {
        trigger: SkillDiv2.current,
        scroller: "body",
        start: "top 100%"
      }

    })
  })

  const SkillDiv3 = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(SkillDiv3.current, {
      opacity: 0,
      duration: 0.6,
      y: 300,
      scrollTrigger: {
        trigger: SkillDiv3.current,
        scroller: "body",
        start: "top 100%"
      }

    })
  })

  return (
    <>
      <div className='skillsContainer'>
        <h1 className="skillsHead">Skills</h1>

        <div className='skillsDiv'>

          <div className='languages-Frameworks'>
            <div className='languagesDiv' ref={SkillDiv1}>
              <h1>Languages</h1>
              <div className='languagesLogoDiv'>
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

            <div className='frameworksDiv' ref={SkillDiv2}>
              <h1 style={{ fontSize: '30px' }}>Libraries & Frameworks</h1>

              <div className='frameworksLogoDiv'>
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
          </div>

          <div className='otherSkiilsDiv' ref={SkillDiv3}>

            <h1>Other Skills</h1>

            <div className='otherSkillsBox'>
              <div className='otherSkiilsDivPart1'>

                <h1>Tools</h1>

                <div className='individualOtherskill'>
                  <img src="git.png" alt="" className='skillslogoimg otherSkillsImg' />
                  <p>Git</p>
                </div>

                <div className='individualOtherskill'>
                  <img src="github.png" alt="" className='skillslogoimg githubLogo otherSkillsImg' />
                  <p>Github</p>
                </div>

                <div className='individualOtherskill'>
                  <img src="vscode.png" alt="" className='skillslogoimg otherSkillsImg' />
                  <p>VS code</p>
                </div>

              </div>

              <div className='otherSkiilsDivPart2'>
                <h1>Others</h1>

                <div className='individualOtherskill'>
                  <img src="firebase.png" alt="" className='skillslogoimg otherSkillsImg' />
                  <p>Firebase</p>
                </div>

                <div className='individualOtherskill'>
                  <img src="problemsolving.png" alt="" className='skillslogoimg otherSkillsImg' />
                  <p>Problem Solving</p>
                </div>

                <div className='individualOtherskill'>
                  <img src="communication.png" alt="" className='skillslogoimg otherSkillsImg' />
                  <p className='communication'>Communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
