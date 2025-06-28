import React, { useEffect } from 'react';
import './Skills.css'

function Skills() {

  const frontendSkills = [
    { id: 1, name: "HTML", logo: "https://img.icons8.com/color/480/html-5--v1.png" },
    { id: 2, name: "CSS", logo: "https://img.icons8.com/color/480/css3.png" },
    { id: 3, name: "JavaScript", logo: "https://img.icons8.com/color/480/javascript.png" },
    { id: 4, name: "React.js", logo: "https://img.icons8.com/officel/480/react.png" },
    { id: 5, name: "Redux Toolkit", logo: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
    { id: 6, name: "Tailwind CSS", logo: "https://img.icons8.com/color/480/tailwindcss.png" },
  ]

  const backendSkills = [
    { id: 7, name: "Node.js", logo: "https://img.icons8.com/color/480/nodejs.png" },
    { id: 8, name: "Express.js", logo: "https://img.icons8.com/nolan/64/express-js.png" },
    { id: 9, name: "MongoDB", logo: "https://img.icons8.com/color/480/mongodb.png" },
    { id: 10, name: "Mongoose", logo: "https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" },
    { id: 11, name: "Firebase", logo: "https://img.icons8.com/color/480/firebase.png" },
    { id: 18, name: "REST API", logo: "/api.png" },
  ]

  const tools = [
    { id: 12, name: "Vercel", logo: "https://img.icons8.com/ios-filled/500/vercel.png" },
    { id: 13, name: "Netlify", logo: "https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png" },
    { id: 14, name: "Git", logo: "https://img.icons8.com/color/480/git.png" },
    { id: 15, name: "GitHub", logo: "https://img.icons8.com/3d-fluency/94/github-logo.png" },
    { id: 16, name: "Postman", logo: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
    { id: 17, name: "VS Code", logo: "https://img.icons8.com/color/480/visual-studio-code-2019.png" },
  ]

  const softSkills = [
    { id: 20, name: "Problem Solving", logo: "https://img.icons8.com/fluency/480/idea.png" },
    { id: 21, name: "Communication", logo: "https://img.icons8.com/fluency/480/speech-bubble.png" },
    { id: 22, name: "Teamwork", logo: "https://img.icons8.com/fluency/480/teamwork.png" },
    { id: 23, name: "Time Management", logo: "https://img.icons8.com/color/48/time-machine--v1.png" },
    { id: 24, name: "Adaptability", logo: "https://img.icons8.com/color/480/synchronize.png" },
    { id: 25, name: "Self Learning", logo: "https://img.icons8.com/fluency/480/mind-map.png" }
  ]

  return (
    <>
      <div className='skillsContainer '>
        <h1 className="skillsMainHead">Skills</h1>

        <div className='w-[90vw] xl:w-[80vw] h-auto p-5 rounded-3xl bg-[#1f2937]  lg:px-10 flex flex-col gap-10'>

          <div className='flex flex-col gap-3 '>
            <h1 className='text-3xl md:text-4xl russo-one-regular text-gray-400'>Frontend</h1>
            <div className='skills-div grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6  gap-5'>
              {
                frontendSkills && frontendSkills.map((data) => (
                  <div className='individualskill reveal-section' key={data.id} >
                    <img src={data.logo} alt="" className='skillslogoimg' />
                    <p className='text-[16px]'>{data.name}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl md:text-4xl russo-one-regular text-gray-400'>Backend</h1>
            <div className='skills-div grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-5'>
              {
                backendSkills && backendSkills.map((data) => (
                  <div className='individualskill reveal-section ' key={data.id} >
                    <img src={data.logo} alt="" className='skillslogoimg' />
                    <p className='text-[16px]'>{data.name}</p>
                  </div>
                ))
              }
            </div>
          </div>


          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl md:text-4xl russo-one-regular text-gray-400'>Tools</h1>
            <div className='skills-div grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-5'>
              {
                tools && tools.map((data) => (
                  <div className='individualskill reveal-section' key={data.id} >
                    <img src={data.logo} alt="" className='skillslogoimg' />
                    <p className='text-[16px]'>{data.name}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl md:text-4xl russo-one-regular text-gray-400'>Soft skills</h1>
            <div className='skills-div grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-5'>
              {
                softSkills && softSkills.map((data) => (
                  <div className='individualskill reveal-section' key={data.id} >
                    <img src={data.logo} alt="" className='skillslogoimg' />
                    <h1 className='text-[13px] md:text-[16px]'>{data.name}</h1>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Skills;




































{/* <div className='skillsDiv'>

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

</div> */}