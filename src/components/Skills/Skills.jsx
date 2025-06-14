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
      duration: 0.8,
      y: 300,
      scrollTrigger: {
        trigger: SkillDiv1.current,
        scroller: "body",
        start: "top 110%",
        toggleActions: "play none none reverse",
      }

    })
  })

  const SkillDiv2 = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(SkillDiv2.current, {
      opacity: 0,
      duration: 0.8,
      y: 300,
      scrollTrigger: {
        trigger: SkillDiv2.current,
        scroller: "body",
        start: "top 110%",
        toggleActions: "play none none reverse",
      }

    })
  })

  const SkillDiv3 = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(SkillDiv3.current, {
      opacity: 0,
      duration: 0.8,
      y: 300,
      scrollTrigger: {
        trigger: SkillDiv3.current,
        scroller: "body",
        start: "top 110%",
        toggleActions: "play none none reverse",
      }

    })
  })

  const SkillDiv4 = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(SkillDiv4.current, {
      opacity: 0,
      duration: 0.8,
      y: 300,
      scrollTrigger: {
        trigger: SkillDiv4.current,
        scroller: "body",
        start: "top 110%",
        toggleActions: "play none none reverse",
      }

    })
  })

  // const SkillDiv4 = useRef();
  // gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     SkillDiv4.current,
  //     {
  //       opacity: 0,
  //       y: 100,
  //       scale: 0.9,
  //       rotateX: 30,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       rotateX: 0,
  //       duration: 1.2,
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: SkillDiv4.current,
  //         scroller: "body",
  //         start: "top 90%",
  //         end: "top 50%",
  //         scrub: 0.5,
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // });


  const skillsHead = useRef()
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.from(skillsHead.current, {
      opacity: 0,
      duration: 1,
      y: 200,
      scrollTrigger: {
        trigger: skillsHead.current,
        scroller: "body",
        start: "top 105%"
      }
    })
  })


  return (
    <>
      <div className='skillsContainer'>
        <h1 className="skillsMainHead">Skills</h1>

        <div className='skillsDiv'>

          <div className='SkillsBox' ref={SkillDiv1}>
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

          <div className='SkillsBox' ref={SkillDiv2}>
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


          <div className='SkillsBox' ref={SkillDiv3}>
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


          <div className='SkillsBox' ref={SkillDiv4}>
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
