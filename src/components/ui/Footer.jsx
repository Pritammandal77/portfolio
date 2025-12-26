import React from 'react';

function Footer() {
    return (
        <>
            <footer className="all-[unset] russo-one-regular bg-[#050505] text-white py-12 px-4 flex flex-col gap-10 items-center font-inter border-t border-[#1d1d1d]">
                <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 md:w-[90vw] xl:w-[100vw]">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-2">
                            <h1 className="text-4xl  text-purple-500">
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
                                    href="https://www.instagram.com/your_username"
                                    target="_blank"
                                    className="text-[#E4405F]"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a
                                    href="https://x.com/your_username"
                                    target="_blank"
                                    className="text-black dark:text-white"
                                >
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/your_username"
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
                        <h2 className="text-2xl text-gray-100">
                            Quick Links
                        </h2>
                        <ol className="flex flex-col gap-2">
                            <a href="#home">Home</a>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contactme">Contact Me</a>
                            </li>
                        </ol>
                    </div>

                    { }
                    <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            My Services
                        </h3>
                        <ol className="flex flex-col gap-2">
                            <li>Frontend Development</li>
                            <li>Backend Development</li>
                            <li>FullStack Web Apps</li>
                            <li>UI / UX Implementation</li>
                        </ol>
                    </div>

                    { }
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-gray-100">
                            Contact Me
                        </h3>
                        <p className="text-gray-300">
                            Chandrapur Maharashtra, India
                        </p>
                        <p className="text-gray-300">
                            Email: pritampmandal@gmail.com
                        </p>

                        <p>Phone</p>
                        <div className="flex flex-col text-gray-300 text-[14px]">
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
