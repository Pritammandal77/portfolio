import React from 'react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "E-Commerce",
        description: "It is an fullstack Ecommerce application , where users can browse a lot of products , search products , browse products by categories , authentication & database using firebase , user can add products to cart , track thier ordered products.",
        image: "auraMart.png",
        skills: ["React.js", "Redux Toolkit", "Tailwind css", "Firebase"],
        liveLink: "https://the-aura-mart.netlify.app",
        githubLink: "https://github.com/Pritammandal77/E-Commerce"
    },
    {
        title: "Zeno AI",
        description: "It Is A smart and interactive chatbot & Voice Asistant designed to provide quick, accurate, and engaging responses to users. User can chat with AI powered by Groq API & also talk with the voice assistant created by the Web Speech API.",
        image: "/zenoAiImg.jpg",
        skills: ["React.js", "redux toolkit", "tailwind css"],
        liveLink: "https://the-zeno-ai.netlify.app/",
        githubLink: "https://github.com/Pritammandal77/Zeno-AI"
    },
    {
        title: "Recipe Gram",
        description: "It is a recipe App ,User can browse diffferent types of recipes ,can Search Recipes ,view The full detailed recipe with its Ingredients . Also can save Favourite Recipes on localStorage & Delete Recipes.",
        image: "/recipeApp.jpg",
        skills: ["React.js", "Vanila CSS", "Context API"],
        liveLink: "https://recipe-gram.netlify.app/",
        githubLink: "https://github.com/Pritammandal77/Recipe-App"
    },
    {
        title: "New Project coming soon",
        description: "Something big is coming soon 🔥",
        image: "/newProjectImg.jpeg",
        liveLink: "#",
        githubLink: "#"
    }
];

function Projects() {
    return (
        <div className="w-[100vw] flex flex-col gap-10 justify-center items-center px-4 md:px-0 py-14 md:py-24 overflow-x-hidden relative">
            <h1 className="text-[40px] lg:text-[50px] font-semibold text-center mb-[60px] text-[#e7e7e7] russo-one-regular">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[100%] md:w-[90vw] place-items-center">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="relative w-[90vw] md:w-[45vw] h-auto md:h-[auto] md:min-h-[64vh] lg:h-[50vh] xl:h-[75vh] bg-[#202022] border-1 border-[#303030] flex flex-col gap-3 rounded-lg cursor-pointer hover:shadow-[0_0_20px_#1f1f1f] hover:border-[#714f91] "
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
                                <button className="w-[49%] bg-[#9333EA] px-3 py-2 rounded-lg text-[16px] flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    <a href={project.liveLink} className="text-white" target="_blank" rel="noreferrer">
                                        Live view
                                    </a>
                                </button>
                                <button className='w-[49%] border border-[#4b4b4b] px-3 py-2 rounded-lg flex items-center justify-center gap-3'>
                                    <i className="fa-brands fa-github"></i>
                                    <a href={project.githubLink} target='_blank' rel="noreferrer" className='cursor-pointer text-white'>
                                        Source code
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute w-[200px] h-[200px] bg-blue-700 opacity-30 rounded-full blur-[150px] top-[10%] left-[10%]" />
            <div className="absolute w-[200px] h-[200px] bg-cyan-700 opacity-30 rounded-full blur-[130px] top-[40%] left-[70%]" />
            <div className="absolute w-[200px] h-[200px] bg-purple-700 opacity-30 rounded-full blur-[130px] top-[80%] left-[10%]" />
          
        </div>
    );
}

export default Projects;
