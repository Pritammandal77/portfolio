import React, { useEffect } from 'react';
import MotionWrapper from '../hooks/MotionWrapper';

function Skills() {
  const frontendSkills = [
    { id: 1, name: "HTML", logo: "https://img.icons8.com/color/480/html-5--v1.png" },
    { id: 2, name: "CSS", logo: "https://img.icons8.com/color/480/css3.png" },
    { id: 3, name: "JavaScript", logo: "https://img.icons8.com/color/480/javascript.png" },
    { id: 7, name: "TypeScript", logo: "https://img.icons8.com/color/480/typescript.png" },
    { id: 4, name: "React.js", logo: "https://img.icons8.com/officel/480/react.png" },
    { id: 27, name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    { id: 5, name: "Redux Toolkit", logo: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
    { id: 6, name: "Tailwind CSS", logo: "https://img.icons8.com/color/480/tailwindcss.png" },
  ];

  const backendSkills = [
    { id: 7, name: "Node.js", logo: "https://img.icons8.com/color/480/nodejs.png" },
    { id: 8, name: "Express.js", logo: "https://img.icons8.com/nolan/64/express-js.png" },
    { id: 9, name: "MongoDB", logo: "https://img.icons8.com/color/480/mongodb.png" },
    { id: 10, name: "Mongoose", logo: "https://img.icons8.com/color/480/mongodb.png" },
    { id: 11, name: "Firebase", logo: "https://img.icons8.com/color/480/firebase.png" },
    { id: 18, name: "REST API", logo: "/api.png" },
  ];

  const tools = [
    { id: 14, name: "Git", logo: "https://img.icons8.com/color/480/git.png" },
    { id: 15, name: "GitHub", logo: "https://img.icons8.com/3d-fluency/94/github-logo.png" },
    { id: 16, name: "Postman", logo: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
    { id: 17, name: "VS Code", logo: "https://img.icons8.com/color/480/visual-studio-code-2019.png" },
    { id: 12, name: "Vercel", logo: "https://img.icons8.com/ios-filled/500/vercel.png" },
    { id: 13, name: "Netlify", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/netlify/netlify-original.svg" },
    { id: 26, name: "Render" , logo : "/RenderLogo.webp"}

  ];

  const softSkills = [
    { id: 20, name: "Problem Solving", logo: "https://img.icons8.com/fluency/480/idea.png" },
    { id: 21, name: "Communication", logo: "https://img.icons8.com/fluency/480/speech-bubble.png" },
    { id: 22, name: "Teamwork", logo: "https://img.icons8.com/fluency/480/teamwork.png" },
    { id: 23, name: "Time Management", logo: "https://img.icons8.com/color/48/time-machine--v1.png" },
    { id: 24, name: "Adaptability", logo: "https://img.icons8.com/color/480/synchronize.png" },
    { id: 25, name: "Self Learning", logo: "https://img.icons8.com/fluency/480/mind-map.png" },
  ];

  return (
    // <div className='w-[100vw] overflow-x-hidden text-white flex flex-col gap-10 items-center px-4 py-[50px] lg:px-[100px]'>
    <div className='w-full h-auto overflow-x-hidden overflow-y-hidden flex flex-col gap-10 items-center justify-evenly px-4 py-[50px] lg:px-[100px] relative mt-0 md:mt-[50px]'>
      <h1 className="text-[35px] lg:text-[50px] font-semibold text-center mb-[60px] text-[#e7e7e7] russo-one-regular">Skills & technologies</h1>

      <div className='w-[100vw] xl:w-[90vw] h-auto rounded-3xl lg:px-10 flex flex-col gap-10'>

        {[{ title: "Frontend", skills: frontendSkills }, { title: "Backend", skills: backendSkills }, { title: "Tools", skills: tools }, { title: "Soft skills", skills: softSkills }].map((section, idx) => (
          <div className='flex flex-col gap-3 px-3 md:px-5' key={idx}>
            <h1 className='text-3xl md:text-4xl russo-one-regular text-gray-400'>{section.title}</h1>
            <MotionWrapper key={idx}>
              <div className='flex gap-5 flex-wrap w-[100%] ' >
                {section.skills.map((data) => (
                  // <div
                  //   className='bg-[#181818] border-2 border-[#2e2e2e] w-[27vw] md:w-[16vw] lg:h-[160px] lg:w-[12vw] text-center flex flex-col items-center justify-evenly p-2 rounded-[10px] gap-2 lg:gap-1 cursor-pointer hover:scale-105 hover:border-[#212121] hover:shadow-[0px_0px_20px_#1e1e1e] transition-all  '
                  //   key={data.id}
                  // >
                  //   <img src={data.logo} alt={data.name} className='w-[55px]' />
                  //   <p className='text-[13px] md:text-[17px]'>{data.name}</p>
                  // </div>
                  <div
                    className='bg-[#181818] border-2 border-[#2e2e2e] w-auto h-15 text-center flex items-center justify-evenly p-2 xl:px-3 rounded-[10px] gap-2 lg:gap-1 cursor-pointer hover:scale-105 hover:border-[#212121] hover:shadow-[0px_0px_20px_#1e1e1e] transition-all  '
                    key={data.id}
                  >
                    <img src={data.logo} alt={data.name} className='w-[30px] md:w-[35px]' />
                    <p className='text-[15px] md:text-[17px] xl:text-[18px]'>{data.name}</p>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        ))}

      </div>

      <div className="absolute w-[200px] h-[200px] bg-purple-700 opacity-30 rounded-full blur-[150px] top-[20%] left-[10%]" />
      <div className="hidden md:flex absolute w-[200px] h-[200px] bg-purple-700 opacity-40 rounded-full blur-[150px] top-[60%] left-[70%]" />
      <div className="flex md:hidden absolute w-[200px] h-[200px] bg-purple-700 opacity-40 rounded-full blur-[150px] top-[40%] left-[70%]" />
      <div className="absolute w-[200px] h-[200px] bg-purple-700 opacity-30 rounded-full blur-[150px] top-[70%] left-[10%]" />

    </div>
  );
}

export default Skills;
