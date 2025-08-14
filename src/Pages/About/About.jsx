import React from 'react';
import MotionWrapper from '../../hooks/MotionWrapper';

function About() {

    return (
        <div className="w-full h-auto overflow-x-hidden overflow-y-hidden flex gap-5 flex-col md:flex-row items-center justify-center px-[50px] py-[10vh] pb-[50px] relative mt-0 md:mt-[50px]">
            <div className=' flex flex-col-reverse md:flex-row gap-5 md:gap-0 xl:gap-5 lg:h-[75vh] '>
                <div className="flex flex-col gap-5 w-full px-2 md:w-[48vw] xl:w-[43vw] ">
                    {/* <img
                    src="/aboutPageImg.jpg"
                    alt=""
                    className="w-[30vw] h-[90vh] rounded-2xl  "
                /> */}
                    <MotionWrapper direction='-x'>
                        <div className="bg-[#181818] w-[100%] p-[15px] rounded-[15px] border-2 border-[#2e2e2e] flex flex-col gap-[10px]">
                            <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-[#a75dd6]">Experience</h1>

                            <h2 className="text-[19px] text-[#a75dd6] russo-one-regular">
                                Zestos Ventures Pvt. Ltd. (GharPadharo)
                                <p className="text-[17px]">June 2025 – Present</p>
                            </h2>

                            <p className="text-[16px] md:text-[18px] text-justify">
                                Working as a Full Stack Developer Intern at GharPadharo. I contributed to the development of their Careers Website, handling both frontend and backend tasks.
                            </p>

                            <p className="text-[16px] md:text-[18px] text-justify">
                                Collaborated effectively using Git for version control, actively participated in team meetings, and gained experience in working within a professional agile environment.
                            </p>
                        </div>
                    </MotionWrapper>

                    <MotionWrapper direction='-x'>
                        <div className="bg-[#181818] w-[100%] p-[15px] rounded-[15px] border-2 border-[#2e2e2e] flex flex-col gap-[10px]  ">
                            <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-[#a75dd6]">Certifications</h1>
                            <div className="text-[18px] leading-[30px]">
                                <h3><b className="text-[#D8B4FE]">IBM:</b> Web Development Fundamentals</h3>
                                <h3><b className="text-[#D8B4FE]">Linux foundation:</b> Node.js Fundamentals</h3>
                                <h3><b className="text-[#D8B4FE]">Accenture :</b> Developer & Technology Job Simulation</h3>
                                {/* <h3><b className="text-[#D8B4FE]">Oracle Corporation :</b> Database for Developers</h3> */}
                            </div>
                        </div>

                    </MotionWrapper>

                </div>

                <div className="w-[100vw] md:w-[48vw] xl:w-[43vw] h-auto px-2 flex flex-col gap-5 ">
                    <MotionWrapper direction='x'>
                        <div className="bg-[#181818] w-[100%] p-[15px] rounded-[15px] border-2 border-[#2e2e2e] flex flex-col gap-[10px]">
                            <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-[#a75dd6]">About Me</h1>

                            <p className="text-[16px] md:text-[18px] text-justify">
                                I'm Pritam Mandal, a passionate and detail-oriented Full Stack Developer who enjoys bringing creative ideas to life through fast, functional, and visually appealing web applications.
                            </p>

                            <p className="text-[16px] md:text-[18px] text-justify">
                                I love working across the entire modern web stack — crafting clean and responsive UIs with <span className="text-[#a75dd6] font-semibold">React.js</span>, and building secure, scalable backend systems using <span className="text-[#a75dd6] font-semibold">Node.js</span>, <span className="text-[#a75dd6] font-semibold">Express</span>, and <span className="text-[#a75dd6] font-semibold">MongoDB</span>.
                            </p>

                            <p className="text-[16px] md:text-[18px] text-justify">
                                I thrive in building real-world projects, solving meaningful problems through code, collaborating with developers, and continuously learning to stay updated with the ever-evolving tech landscape.
                            </p>
                        </div>
                    </MotionWrapper>

                    <MotionWrapper direction='x'>
                        <div className="bg-[#181818] w-[100%] p-[15px] rounded-[15px] border-2 border-[#2e2e2e] flex flex-col gap-[10px]  ">
                            <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-[#a75dd6]">Education</h1>
                            <div className="text-[15px] md:text-[18px] leading-[30px]">
                                <p className="font-semibold">Bachelor of Science in Information Technology</p>
                                <p>Gondwana University, Gadchiroli</p>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>

            <div className="absolute w-[200px] h-[200px] bg-purple-700 opacity-30 rounded-full blur-[150px] top-[20%] left-[10%]" />
            <div className="absolute w-[200px] h-[200px] bg-purple-700 opacity-40 rounded-full blur-[150px] top-[60%] left-[70%]" />
        </div>
    );
}

export default About;
