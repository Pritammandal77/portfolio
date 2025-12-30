import React from "react";
import ScaleWrapper from "../components/animations/ScaleWrapper";
import MotionWrapper from "../components/animations/MotionWrapper";

const GithubContribution = () => {
    return (
        <section className="w-full py-20 xl:py-28 px-2 md:px-16 relative flex items-center justify-center overflow-x-hidden">

            <div className="z-10 absolute w-[200px] h-[200px] bg-blue-700 opacity-30 rounded-full blur-[150px] top-[10%] left-[10%]" />
            <div className="z-10 absolute w-[200px] h-[200px] bg-purple-700 opacity-30 rounded-full blur-[130px] bottom-[10%] left-[70%]" />

            <div className="relative max-w-6xl w-full flex flex-col gap-12">

                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-[35px] lg:text-[50px] font-semibold text-[#e7e7e7] russo-one-regular">
                        GitHub Contributions
                    </h1>
                    <p className="mt-3 text-gray-300 text-lg">
                        Consistency, discipline, and real work — visualized
                    </p>
                </div>

                {/* Stats Row */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-5 ">
                    {[
                        { title: "Daily Coding", value: "Consistency Driven" },
                        { title: "Commit Habit", value: "Build in Public" },
                        { title: "Mindset", value: "Problem Solver" },
                    ].map((item, idx) => (
                        <MotionWrapper
                            key={idx}
                        >
                            <div
                                className="bg-[#181818] border border-[#2e2e2e] rounded-xl p-5 text-center hover:border-purple-500 transition"
                            >
                                <p className="text-md text-gray-400 font-bold">{item.title}</p>
                                <p className="text-3xl text-purple-500 mt-1 font-bold aladin-regular">
                                    {item.value}
                                </p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>

                <ScaleWrapper>
                    {/* Contribution Card */}
                    <div className="bg-[#181818] border border-[#2e2e2e] flex flex-col items-center justify-center gap-8 rounded-2xl p-2 py-6 md:p-10 transition-all duration-300">

                        {/* Contribution Chart */}
                        <div className="overflow-x-auto w-full flex items-center justify-center">
                            <img
                                src="https://ghchart.rshah.org/16A34A/Pritammandal77"
                                alt="GitHub Contribution Chart"
                                className="mx-auto w-full max-w-[950px] h-auto"
                            />
                        </div>


                        {/* Legend */}
                        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-400 flex-wrap ">
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[#FFFFFF] rounded-sm border border-gray-500"></span>
                                Off Days
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[#A7F3D0] rounded-sm"></span>
                                Low Activity
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[#16A34A] rounded-sm"></span>
                                High Activity
                            </span>
                        </div>


                        {/* Footer */}
                        <p className="text-center text-gray-400 mt-6 text-sm">
                            Green squares don’t lie - they show consistency & discipline
                        </p>

                        {/* CTA */}
                        <div className="flex justify-center mt-6">
                            <a
                                href="https://github.com/Pritammandal77"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-2xl bg-[#9333EA] text-black font-medium hover:scale-105 transition"
                            >
                                View GitHub Profile
                            </a>
                        </div>
                    </div>
                </ScaleWrapper>

            </div>
        </section>
    );
};

export default GithubContribution;











// import React from "react";

// const GithubContribution = () => {
//     return (
//         <section className="w-full py-20 xl:py-25 px-5 md:px-16 relative flex flex-col items-center justify-center gap-15">
//             {/* Glow Effects */}
//             <div className="absolute w-[300px] h-[300px] bg-[#9333EA] opacity-30 blur-[180px] top-10 left-10" />
//             <div className="absolute w-[250px] h-[250px] bg-[#9333EA] opacity-30 blur-[160px] bottom-10 right-10" />

//             <div className="relative max-w-6xl mx-auto flex flex-col gap-10">
//                 {/* Heading */}
//                 <div className="text-center mb-10">
//                     <div>
//                         <h1 className="text-[35px] lg:text-[50px] font-semibold text-center mb-[60px] text-[#e7e7e7] russo-one-regular">Github Contribution</h1>
//                     </div>
//                     <p className="mt-3 text-gray-300 text-lg">
//                         My consistency, dedication, and love for building in public 🚀
//                     </p>
//                 </div>

//                 {/* Card */}
//                 <div className="bg-[#181818] border border-[#2e2e2e] rounded-2xl p-6 md:p-10 backdrop-blur-md transition-all duration-300">

//                     {/* Contribution Chart */}
//                     <div className="overflow-x-auto">
//                         <img
//                             src="https://ghchart.rshah.org/16A34A/Pritammandal77"
//                             alt="GitHub Contribution Chart"
//                             className="mx-auto min-w-[950px]"
//                         />
//                     </div>

//                     {/* Footer Text */}
//                     <p className="text-center text-gray-400 mt-6 text-sm">
//                         Green squares don’t lie — showing real work & daily commitment 💻
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default GithubContribution;


