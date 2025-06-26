import React, { useEffect } from 'react';
import './Projects.css'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Projects() {
    return (
        <>
            <div className="projectsPage">
                <h1 className="projectHeading">My Projects</h1>
                <div className="projectsDiv">

                    <div className="card reveal-section" >
                        <a href="https://github.com/Pritammandal77/E-commerce" target='_blank'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLQSVUptuw0TlsaSPAbHgCcUqWd9BMFJ3bQ&s"
                                alt="" className="projectsImg" />
                        </a>

                        <h2>E-Commerce</h2>
                        <p>It is an Ecommerce application , built using React.js , Redux Toolkit , Tailwind CSS , Firebase.
                        </p>
                        <button className="liveViewBtn">
                            <a href="https://the-aura-mart.netlify.app" className="linkText"
                                target="_blank">Live view</a>
                        </button>
                        <a href="https://github.com/Pritammandal77/E-Commerce" target='_blank'
                            className='cursor-pointer'>
                            <i className="fa-brands fa-github text-4xl absolute right-7 top-7 p-1 bg-black rounded-full"></i>
                        </a>
                    </div>

                    <div className="card reveal-section" >
                        <a href="https://github.com/Pritammandal77/Zeno-AI" target='_blank'>
                            <img src="https://media.istockphoto.com/id/1465545513/photo/chatbot.jpg?s=612x612&w=0&k=20&c=3IZrVSv95FmcHt744wvcvZiml1LXTnEQimq_3V5CCbQ="
                                alt="" className="projectsImg" />
                        </a>

                        <h2>Zeno AI</h2>
                        <p>It Is A smart and interactive chatbot & Voice Asistant designed to provide
                            quick, accurate, and engaging responses to users.
                        </p>

                        <button className="liveViewBtn ">
                            <a href="https://the-zeno-ai.netlify.app/" className="linkText"
                                target="_blank">Live view</a>
                        </button>
                        <a href="https://github.com/Pritammandal77/Zeno-AI" target='_blank'
                            className='cursor-pointer'>
                            <i className="fa-brands fa-github text-4xl absolute right-7 top-7 p-1 bg-black rounded-full"></i>
                        </a>

                    </div>

                    <div className="card reveal-section" >
                        <a href="https://github.com/Pritammandal77/Recipe-App" target='_blank'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCuJEpFVYi-SFcwsK_9li9t9aQdfyrXxGyA&s" alt=""
                                className="projectsImg" />
                        </a>

                        <h2>Recipe Gram</h2>
                        <p>It is a recipe App , User Can Search Recipes , View The
                            Full Recipe , Its Ingredients , Save Favourite Recipes & Delete Recipes .
                        </p>
                        <button className="liveViewBtn">
                            <a href="https://recipe-gram.netlify.app/" className="linkText"
                                target="_blank">Live View</a>
                        </button>
                        <a href="https://github.com/Pritammandal77/Recipe-App" target='_blank'
                            className='cursor-pointer'>
                            <i className="fa-brands fa-github text-4xl absolute right-7 top-7 p-1 bg-black rounded-full"></i>
                        </a>
                    </div>

                    <div className="card reveal-section" >
                        <img src="data:image/jpeg;base64,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"
                            alt="" className="projectsImg" />
                        <h2>New Project</h2>
                        <p> New Project Coming soon
                        </p>
                        <button className="liveViewBtn">
                            <a href=" " className="linkText"
                                target="_blank">Soon</a>
                        </button>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Projects;
