import React from 'react';
import './About.css';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';

function About() {

    useRevealAnimation()

    return (
        <div className="fullAboutPage py-100">
            <div className="aboutPart1">
                <img src="/fullimage.jpg" alt="" className="aboutPageImg reveal-section" />
            </div>
            <div className="aboutPart2">
                <div className="aboutMe aboutAllSections flex flex-col gap-[10px] reveal-section">
                    <h1>About Me</h1>
                    <p className="text-[16px] md:text-[18px]">
                        Hi, I'm Pritam Mandal! I'm a dedicated frontend developer. <br />
                        I am 20 years Old, living in Chandrapur, Maharashtra with a strong passion
                        for creating intuitive and visually appealing web applications.
                    </p>
                </div>

                <div className="aboutAllSections flex flex-col gap-[10px] reveal-section">
                    <h1 className="text-3xl font-bold text-[#a75dd6]">Education</h1>
                    <div className="text-[15px] md:text-[18px]">
                        <p className="font-semibold">Bachelor of Science in Information Technology</p>
                        <p>Gondwana University, Gadchiroli</p>
                    </div>
                </div>

                <div className="aboutPageCertifications aboutAllSections reveal-section">
                    <h1>Certifications</h1>
                    <div className="certificationsDiv text-[18px]">
                        <h3><b>IBM:</b> Web Development Fundamentals</h3>
                        <h3><b>Linux foundation:</b> Node.js Fundamentals</h3>
                        <h3><b>Accenture & Forage:</b> Developer & Technology Job Simulation</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
