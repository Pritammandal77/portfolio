import React from 'react';
import MotionWrapper from '../../hooks/MotionWrapper';

function Experience() {
    return (
        <>
            <div className='md:hidden w-full h-auto flex flex-col items-center py-10 xl:py-20'>
                <div>
                    <h1 className="text-[35px] lg:text-[50px] font-semibold text-center mb-[60px] text-[#e7e7e7] russo-one-regular">Work Experience</h1>
                </div>

                <div className='w-full flex items-center justify-center py-5 px-5'>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 w-[95vw] xl:w-[70%]">
                        <MotionWrapper direction='-x' >
                            <li className="mb-10 ms-6 pl-6 xl:p-8">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <div className='flex flex-col gap-5 text-[17px]'>
                                    <div>
                                        <h3 className="flex items-center mb-1 text-[18px] font-semibold text-gray-900 dark:text-white">Zestos Ventures Pvt. Ltd. (GharPadharo)</h3>
                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2025 - Sept 2025</time>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p>Worked as a Full Stack Developer Intern at GharPadharo. <br />
                                            I contributed to the development of two projects : </p>
                                        <p> <span className='text-purple-500'> 1. Careers Website  </span>– handled both frontend and backend tasks.</p>
                                        <p>
                                            <span className='text-purple-500'>2. Club Website</span> –
                                            An <span className='font-semibold'>individually developed project</span> where I built features like upcoming events, image gallery, and engaging CTA buttons to enhance user interaction.
                                            The project is <span className='font-semibold'>successfully deployed</span> and accessible online.
                                        </p>
                                        <p>I collaborated seamlessly with the team using Git & Github for version control, consistently contributing to smooth workflows and efficient code management. I actively participated in team meetings, shared ideas, and provided inputs to enhance the product. Additionally, I gained valuable hands-on experience working in a professional Agile environment, learning industry-standard practices like sprint planning, task prioritization, and collaborative problem-solving.</p>
                                    </div>
                                </div>
                            </li>
                        </MotionWrapper>

                        {/* <li className="mb-10 ms-6 p-8">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <div className='flex flex-col gap-2'>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Zestos Ventures Pvt. Ltd. (GharPadharo)</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2025 - Sept 2025</time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                                <p>Working as a Full Stack Developer Intern at GharPadharo. <br />
                                    I contributed to the development of two projects:</p>
                                <p>1. Careers Website – handled both frontend and backend tasks.</p>
                                <p>2. Club Website – developed features like upcoming events, image gallery, and engaging CTA buttons to enhance user interaction.</p>
                                <p>I collaborated seamlessly with the team using Git for version control, consistently contributing to smooth workflows and efficient code management. I actively participated in team meetings, shared ideas, and provided inputs to enhance the product. Additionally, I gained valuable hands-on experience working in a professional Agile environment, learning industry-standard practices like sprint planning, task prioritization, and collaborative problem-solving.</p>
                            </div>
                        </li> */}

                    </ol>

                </div>

            </div>
        </>
    );
}

export default Experience;
