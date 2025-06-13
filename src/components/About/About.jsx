import React from 'react';
import './About.css'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {

    const myFullImage = useRef()
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.from(myFullImage.current, {
            opacity: 0,
            duration: 0.6,
            y: 200,
            scrollTrigger: {
                trigger: myFullImage.current,
                scroller: "body",
                start: "top 105%",
                toggleActions: "play none none reverse",

            }

        })
    })

  
    const Aboutme = useRef()
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.from(Aboutme.current, {
            opacity: 0,
            duration: 0.6,
            y: 200,
            scrollTrigger: {
                trigger: Aboutme.current,
                scroller: "body",
                start: "top 105%",
                toggleActions: "play none none reverse",

            }
        })
    })

    const skillsBody = useRef()
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.from(skillsBody.current, {
            opacity: 0,
            duration: 1,
            y: 200,
            scrollTrigger: {
                trigger: skillsBody.current,
                scroller: "body",
                start: "top 105%",
                toggleActions: "play none none reverse",

            }
        })
    })


    const certifications = useRef()
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.from(certifications.current, {
            opacity: 0,
            duration: 1,
            y: 200,
            scrollTrigger: {
                trigger: certifications.current,
                scroller: "body",
                // markers: true,
                start: "top 105%",
                toggleActions: "play none none reverse",

            }

        })
    })

    return (
        <>
            <div className="fullAboutPage py-100">
                <div className="aboutPart1">
                    <img src="fullimage.jpeg.jpg" alt="" className="aboutPageImg" ref={myFullImage} />
                </div>
                <div className="aboutPart2">
                    <div className="aboutMe aboutAllSections flex flex-col gap-[10px]" ref={Aboutme}>
                        <h1>About Me</h1>
                        <p className='text-[16px] md:text-[18px]'>Hi, I'm Pritam Mandal! I'm a dedicated frontend developer.  <br /> I am 20 years Old , Living in chandrapur , Maharashtra
                            with a strong passion for creating intuitive and visually appealing
                            web applications.
                            With expertise in modern web development technologies, I focus on delivering high-quality,
                            user-centric solutions that enhance user experience and performance. I like solving
                            problems and continuously learning new trends in frontend development.
                        </p>
                    </div>
                    {/* <div className="aboutPageSkills aboutAllSections flex flex-col gap-[0px]"  ref={skillsBody}>
                        <h1>Skills</h1>
                        <div className="AboutSkillsDiv text-[16px] md:text-[18px]">
                            <h3><b>languages </b> : HTML , CSS , Javascript , C++ , SQL </h3>
                            <h3><b>Backend </b> : Firebase</h3>
                            <h3><b>Libraries</b> : React.js , Redux Toolkit , Tailwind CSS , BootStrap</h3>
                            <h3><b>Tools</b> : Vs Code , Git & Github</h3>
                            <h3><b>Others </b>: Problem Solving , Communication , Animations , etc</h3>
                        </div>
                    </div> */}
                    <div className="aboutAllSections flex flex-col gap-[10px]" ref={skillsBody}>
                        <h1 className='text-3xl font-bold text-[#a75dd6]'>Education</h1>
                        <div className="text-[15px] md:text-[18px] ">
                            <p className='font-semibold '>Bachelor of Science in Information Technology</p>
                            <p>Gondwana University, Gadchiroli</p>
                        </div>
                    </div>
                    <div className="aboutPageCertifications aboutAllSections" ref={certifications}>
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
