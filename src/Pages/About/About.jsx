import React from 'react';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';

function About() {
    useRevealAnimation();

    return (
        <div className="w-full h-auto overflow-x-hidden overflow-y-hidden flex flex-col md:flex-row items-center justify-evenly px-[50px] py-[10vh] pb-[50px] relative mt-0 md:mt-[50px]">
            <div className="hidden xl:flex items-end justify-end w-[35vw] h-[90vh]">
                <img
                    src="/aboutPageImg.jpg"
                    alt=""
                    className="w-[30vw] h-[90vh] rounded-2xl reveal-section"
                />
            </div>

            <div className="w-[100vw] lg:w-[50vw] h-auto px-0 md:px-[20px] flex flex-col items-center justify-between gap-[30px]">
                <div className="bg-[#1D1D20] w-[90%] p-[15px] rounded-[15px] border-2 border-[#2e2e2e] flex flex-col gap-[10px] reveal-section">
                    <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-[#a75dd6]">About Me</h1>
                    <p className="text-[16px] md:text-[18px] text-justify">
                        I'm Pritam Mandal, a full stack developer <br /> who loves turning ideas into fast, functional, and beautiful web applications.
                    </p>
                    <p className="text-[16px] md:text-[18px] text-justify">
                        I enjoy working across the entire web stack — from crafting clean UI with React.js to developing robust backend systems with Node.js, Express, and MongoDB.
                    </p>
                </div>

                <div className="bg-[#1D1D20] w-[90%] p-[15px] rounded-[15px] border-2 border-[#2e2e2e] flex flex-col gap-[10px] reveal-section">
                    <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-[#a75dd6]">Education</h1>
                    <div className="text-[15px] md:text-[18px] leading-[30px]">
                        <p className="font-semibold">Bachelor of Science in Information Technology</p>
                        <p>Gondwana University, Gadchiroli</p>
                    </div>
                </div>

                <div className="bg-[#1D1D20] w-[90%] p-[15px] rounded-[15px] border-2 border-[#2e2e2e] flex flex-col gap-[10px] reveal-section">
                    <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-[#a75dd6]">Certifications</h1>
                    <div className="text-[18px] leading-[30px]">
                        <h3><b className="text-[#D8B4FE]">IBM:</b> Web Development Fundamentals</h3>
                        <h3><b className="text-[#D8B4FE]">Linux foundation:</b> Node.js Fundamentals</h3>
                        <h3><b className="text-[#D8B4FE]">Accenture :</b> Developer & Technology Job Simulation</h3>
                    </div>
                </div>
            </div>

            <div className="absolute w-[200px] h-[200px] bg-purple-700 opacity-30 rounded-full blur-[150px] top-[20%] left-[10%]" />
            <div className="absolute w-[200px] h-[200px] bg-purple-700 opacity-40 rounded-full blur-[150px] top-[60%] left-[70%]" />
        </div>
    );
}

export default About;
