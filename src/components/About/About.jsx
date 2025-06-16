import React, { useEffect } from 'react';
import './About.css'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {

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
            <div className="fullAboutPage py-100">
                <div className="aboutPart1">
                    <img src="fullimage.jpeg.jpg" alt="" className="aboutPageImg reveal-section" />
                </div>
                <div className="aboutPart2">
                    <div className="aboutMe aboutAllSections flex flex-col gap-[10px] reveal-section" >
                        <h1>About Me</h1>
                        <p className='text-[16px] md:text-[18px]'>Hi, I'm Pritam Mandal! I'm a dedicated frontend developer.  <br /> I am 20 years Old , Living in chandrapur , Maharashtra
                            with a strong passion for creating intuitive and visually appealing
                            web applications.
                            With expertise in modern web development technologies, I focus on delivering high-quality,
                            user-centric solutions that enhance user experience and performance. I like solving
                            problems and continuously learning new trends in frontend development.
                        </p>
                    </div>
                    <div className="aboutAllSections flex flex-col gap-[10px] reveal-section">
                        <h1 className='text-3xl font-bold text-[#a75dd6]'>Education</h1>
                        <div className="text-[15px] md:text-[18px] ">
                            <p className='font-semibold '>Bachelor of Science in Information Technology</p>
                            <p>Gondwana University, Gadchiroli</p>
                        </div>
                    </div>
                    <div className="aboutPageCertifications aboutAllSections reveal-section">
                        <h1>Certifications</h1>
                        <div className="certificationsDiv text-[18px]">
                            <h3><b>IBM : </b> Web Development Fundamentals</h3>
                            <h3><b>Linux foundation : </b> Node.js Fundamentals</h3>
                            <h3><b>Accenture & Forage : </b>Developer & Technolgy Job Simulation</h3>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default About;
