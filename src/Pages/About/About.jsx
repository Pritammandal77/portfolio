import React from 'react';
import './About.css';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';

function About() {

    useRevealAnimation()

    return (
        <div className="fullAboutPage py-100 ">
            <div className="aboutPart1">
                <img src="/aboutPageImg.jpg" alt="" className="aboutPageImg reveal-section rounded-2xl" />
                {/* <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-30 rounded-full blur-[150px] top-[10%] left-[10%]" /> */}
            </div>
            <div className="aboutPart2">
                <div className="aboutMe aboutAllSections flex flex-col gap-[10px] reveal-section">
                    <h1 className='text-[15px] md:text-[18px] font-bold aladin-regular'>About Me</h1>
                    <p className="text-[16px] md:text-[18px]">
                        I'm Pritam Mandal, a full stack developer <br /> who loves turning ideas into fast, functional, and beautiful web applications.
                    </p>
                    <p className="text-[16px] md:text-[18px]">
                        I enjoy working across the entire web stack — from crafting clean UI with React.js to developing robust backend systems with Node.js, Express, and MongoDB.
                    </p>
                </div>


                <div className="aboutMe aboutAllSections flex flex-col gap-[10px] reveal-section">
                    <h1 className="text-[15px] md:text-[18px] font-bold text-[#a75dd6] aladin-regular">Education</h1>
                    <div className="text-[15px] md:text-[18px]">
                        <p className="font-semibold degree">Bachelor of Science in Information Technology</p>
                        <p>Gondwana University, Gadchiroli</p>
                    </div>
                </div>

                <div className="aboutPageCertifications aboutAllSections reveal-section">
                    <h1 className="text-[15px] md:text-[18px] font-bold text-[#a75dd6] aladin-regular">Certifications</h1>
                    <div className="certificationsDiv text-[18px]">
                        <h3><b>IBM:</b> Web Development Fundamentals</h3>
                        <h3><b>Linux foundation:</b> Node.js Fundamentals</h3>
                        <h3><b>Accenture :</b> Developer & Technology Job Simulation</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
