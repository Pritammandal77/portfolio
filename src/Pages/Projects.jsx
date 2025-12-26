import React from 'react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MotionWrapper from '../hooks/MotionWrapper';
import ScaleWrapper from '../hooks/ScaleWrapper';
gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "devStackr",
        description: "It is an fullstack Social media platform for developers , where users can create an account & connect with other users , It includes features like , post creation , like & comment on posts , follow & unfollow users ,search users , edit profile , real time chat using socket.io",
        image: "devstackr.jpg",
        skills: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "socket.io"],
        liveLink: "https://devstackr.netlify.app",
        githubLink: "https://github.com/Pritammandal77/devstackr-frontend",
        githubLink2: "https://github.com/Pritammandal77/devstackr-backend",
        direction: 'y'
    },
    {
        title: "Career Website",
        description: "It is the carrer website of Zestos Ventures Pvt. Ltd. As part of my internship at GharPadharo , I worked on their career website , where peoples can come & apply for Jobs & internship at gharPadharo , I work collaborately using git & github with the team.",
        image: "Careers.jpg",
        skills: ["React.js", "CSS", "Tailwind CSS", "App Script", "GSAP"],
        liveLink: "https://career.gharpadharo.com",
        githubLink: "https://github.com/Pritammandal77/E-Commerce",
        direction: 'y'
    },
    {
        title: "E-Commerce",
        description: "It is an fullstack Ecommerce application , where users can browse a lot of products , search products , browse products by categories , authentication & database using firebase , user can add products to cart , track thier ordered products.",
        image: "auraMart.png",
        skills: ["React.js", "Redux Toolkit", "Tailwind css", "Firebase"],
        liveLink: "https://the-aura-mart.netlify.app",
        githubLink: "https://github.com/Pritammandal77/E-Commerce",
        direction: 'y'
    },
    {
        title: "Zeno AI",
        description: "It Is A smart and interactive chatbot & Voice Asistant designed to provide quick, accurate, and engaging responses to users. User can chat with AI powered by Groq API & also talk with the voice assistant created by the Web Speech API.",
        image: "/zenoAiImg.jpg",
        skills: ["React.js", "redux toolkit", "tailwind css"],
        liveLink: "https://the-zeno-ai.netlify.app/",
        githubLink: "https://github.com/Pritammandal77/Zeno-AI",
        direction: 'y'
    },
    {
        title: "Recipe Gram",
        description: "It is a recipe App ,User can browse diffferent types of recipes ,can Search Recipes ,view The full detailed recipe with its Ingredients . Also can save Favourite Recipes on localStorage & Delete Recipes.",
        image: "https://imgs.search.brave.com/MlMyF6p_e6f8sCUB32EpZfxLX7WngSN8-5AX3SocTA8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI4/MDk1NjMyL3Bob3Rv/L3JlY2lwZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9M19q/Zm5zQTdTTTZxbW9h/bDJEV3lyeklLY25r/SHdkTXJodGpjS3Ni/QzZMYz0",
        skills: ["React.js", "Vanila CSS", "Context API"],
        liveLink: "https://recipe-gram.netlify.app/",
        githubLink: "https://github.com/Pritammandal77/Recipe-App",
        direction: 'y'
    },
    {
        title: "Club Website (GharPadharo)",
        description: "It is the club website of GharPadharo (Zestos Ventures Pvt. Ltd.) , As part of my internship at Gharpadharo. I individually built their club website, where they can showcase their upcoming events , image gallery , CTA button , etc",
        image: "/gharPadharoClub.png",
        skills: ["React.js", "Tailwind CSS", "Framer Motion"],
        liveLink: "https://club.gharpadharo.com",
        githubLink: "https://github.com/Pritammandal77",
        direction: 'y'
    },
    // {
    //     title: "New Project coming soon",
    //     description: "Something big is coming soon 🔥",
    //     image: "/newProjectImg.jpeg",
    //     liveLink: "#",
    //     githubLink: "#",
    //     direction: 'y'
    // }  
];

function Projects() {
    return (
        <div className="w-[100vw] flex flex-col gap-10 justify-center items-center px-4 md:px-0 py-14 md:py-24 overflow-x-hidden overflow-y-hidden relative">
            <h1 className="text-[40px] lg:text-[50px] font-semibold text-center mb-[60px] text-[#e7e7e7] russo-one-regular">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[100%] md:w-[90vw] xl:px-2 place-items-center">
                {projectsData.map((project, index) => (
                    // <MotionWrapper key={index} direction={project.direction}>
                    <ScaleWrapper key={index}>

                        <div

                            className="relative w-[90vw] md:w-[45vw] xl:w-[45vw] h-auto md:h-[auto] md:min-h-[64vh] lg:h-[50vh] xl:h-[75vh] bg-[#181818] border-1 border-[#303030] flex flex-col gap-3 rounded-lg cursor-pointer hover:shadow-[0_0_20px_#1f1f1f] hover:border-[#714f91] "
                        >
                            <a href={project.githubLink} target='_blank' rel="noreferrer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[27vh] md:h-[25vh] lg:h-[35vh] rounded"
                                />
                            </a>
                            <div className='flex flex-col gap-2 p-3 md:p-4'>
                                <h2 className='text-3xl lg:text-4xl font-bold aladin-regular'>{project.title}</h2>
                                <p className='text-[17px] text-justify'>{project.description}</p>
                                <div className='flex flex-wrap gap-4 py-2'>
                                    {project?.skills?.map((data, idx) => (
                                        <p
                                            key={idx}
                                            className='text-[#D8B4FE] bg-[#303034] px-2 py-1 rounded-xl border border-[#585858]'
                                        >
                                            {data}
                                        </p>
                                    ))}
                                </div>
                                <div className='w-full flex justify-between'>
                                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-[49%] bg-[#9333EA] px-3 py-2 rounded-lg text-[16px] flex items-center justify-center gap-3">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        Live view
                                    </a>
                                    <a href={project.githubLink} target='_blank' rel="noreferrer" className={` ${project.githubLink2 ? "w-[24%]" : "w-[49%]"}  border border-[#4b4b4b] px-3 py-2 rounded-lg flex items-center justify-center gap-3`}>
                                        <i className="fa-brands fa-github"></i>
                                        <a href={project.githubLink} target='_blank' rel="noreferrer" className={`${project.githubLink2 ? "hidden xl:inline" : "inline"}  cursor-pointer text-white`}>
                                            {project.githubLink2 ? "Frontend code" : "Source code"}
                                        </a>
                                    </a>
                                    {
                                        project.githubLink2 &&
                                        <a href={project.githubLink2} target='_blank' rel="noreferrer" className='ml-2 w-[24%] border border-[#4b4b4b] px-3 py-2 rounded-lg flex items-center justify-center gap-3'>
                                            <i className="fa-brands fa-github"></i>
                                            <a href={project.githubLink2} target='_blank' rel="noreferrer" className='hidden xl:inline cursor-pointer text-white'>
                                                Backend code
                                            </a>
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </ScaleWrapper>
                    // </MotionWrapper>
                ))}
            </div>

            <div className="absolute w-[200px] h-[200px] bg-blue-700 opacity-30 rounded-full blur-[150px] top-[10%] left-[10%]" />
            <div className="absolute w-[200px] h-[200px] bg-cyan-700 opacity-30 rounded-full blur-[130px] top-[40%] left-[70%]" />
            <div className="absolute w-[200px] h-[200px] bg-purple-700 opacity-30 rounded-full blur-[130px] top-[80%] left-[10%]" />

        </div>
    );
}

export default Projects;
