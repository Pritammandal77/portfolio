import React from 'react';

function Footer() {
    return (
        <>
            <footer className="all-[unset] russo-one-regular bg-[#050505] text-white py-12 px-4 flex flex-col gap-10 items-center font-inter border-t border-[#1d1d1d]">
                <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 md:w-[90vw] xl:w-[100vw]">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-2">
                            <h1 className="text-4xl applyFontBold text-purple-500 protest-revolution-regular">
                                Pritam Mandal
                            </h1>
                        </div>
                        <p className="text-gray-300 text-md leading-relaxed">
                            A full-stack developer specializing in the MERN stack.
                            I love building scalable, high-performance web applications with clean UI
                            and solid backend architecture
                        </p>
                        <div className="flex gap-3 pt-2">
                            <div className="flex gap-5 text-2xl">
                                <a
                                    href="https://www.instagram.com/pritam_mandal_77/profilecard/?igsh=MWE5cXF5ZGpxam84eA=="
                                    target="_blank"
                                    className="text-[#E4405F]"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a
                                    href="https://x.com/pritam_mandal77"
                                    target="_blank"
                                    className="text-black dark:text-white"
                                >
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/pritam-mandal-871510281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                    className="text-[#0A66C2]"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>

                        </div>
                    </div>

                    { }
                    <div className="flex flex-col gap-3 xl:pl-5">
                        <h2 className="text-2xl applyFontBold text-gray-100">
                            Quick Links
                        </h2>
                        <ol className="flex flex-col gap-2 text-[17px] text-gray-300">
                            <a href="#home" className="text-gray-300 ">Home</a>
                            <li>
                                <a href="#about" className="text-gray-300">About</a>
                            </li>
                            <li>
                                <a href="#skills" className="text-gray-300">Skills</a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-300">Projects</a>
                            </li>
                            <li>
                                <a href="#contactme" className="text-gray-300">Contact Me</a>
                            </li>
                        </ol>
                    </div>

                    { }
                    <div className="flex flex-col gap-3">
                        <h3 className="text-2xl applyFontBold text-gray-900 dark:text-gray-100">
                            My Services
                        </h3>
                        <ol className="flex flex-col gap-2 text-[17px] text-gray-300">
                            <li>Frontend Development</li>
                            <li>Backend Development</li>
                            <li>FullStack Web Apps</li>
                            <li>UI / UX Implementation</li>
                        </ol>
                    </div>

                    { }
                    <div className="flex flex-col gap-2 text-[17px]">
                        <h3 className="text-2xl applyFontBold text-gray-100">
                            Contacts
                        </h3>
                        <p className='text-[17px]'>
                            <a href="mailto:pritampmandal@gmail.com">
                                <span className='text-purple-500 text-[17px] pr-3'>Email </span>
                                 pritampmandal@gmail.com
                            </a>
                        </p>

                        <div className="flex items-center gap-4 text-gray-300 text-[16px]">
                            <p className='text-purple-500 text-[17px]'>Phone</p>
                            <a href="tel:+917720803593">+91 98812 28004</a>
                        </div>
                    </div>
                </div>

                { }
                <div className="text-center w-[80vw] text-gray-400 text-sm pt-10  border-t border-[#1e1e1e]">
                    <p>Made with ❤️ by Pritam</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
