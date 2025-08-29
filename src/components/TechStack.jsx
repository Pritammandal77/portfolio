// import { Cloud, renderSimpleIcon } from "react-icon-cloud";
// import { siReact, siNodedotjs, siMongodb } from "simple-icons/icons";

// export default function TechStack() {
//   const icons = [
//     renderSimpleIcon({ icon: siReact, size: 45 }),
//     renderSimpleIcon({ icon: siNodedotjs, size: 45 }),
//     renderSimpleIcon({ icon: siMongodb, size: 45 }),
//     <img key="tailwind" src="/tailwind.svg" alt="Tailwind" width={45} height={45} />,
//   ];

//   return (
//     <Cloud options={{ wheelZoom: false, dragControl: true }}>
//       {icons}
//     </Cloud>
//   );
// }


// import { Cloud, renderSimpleIcon } from "react-icon-cloud";
// import {
//   siReact,
//   siNodedotjs,
//   siMongodb,
//   siTailwindcss,
//   siJavascript,
//   siTypescript,
//   siHtml5,
// //   siCss3,
//   siGit,
//   siGithub,
//   siRedux,
//   siFirebase,
//   siExpress,
// } from "simple-icons/icons";

// export default function TechStack() {
//   const icons = [
//     renderSimpleIcon({ icon: siReact, size: 80 }),
//     renderSimpleIcon({ icon: siNodedotjs, size: 80 }),
//     renderSimpleIcon({ icon: siMongodb, size: 80 }),
//     renderSimpleIcon({ icon: siTailwindcss, size: 80 }),
//     renderSimpleIcon({ icon: siJavascript, size: 80 }),
//     renderSimpleIcon({ icon: siTypescript, size: 80 }),
//     renderSimpleIcon({ icon: siHtml5, size: 80 }),
//     // renderSimpleIcon({ icon: siCss3, size: 80 }),
//     renderSimpleIcon({ icon: siGit, size: 80 }),
//     renderSimpleIcon({ icon: siGithub, size: 80 }),
//     renderSimpleIcon({ icon: siRedux, size: 80 }),
//     renderSimpleIcon({ icon: siFirebase, size: 80 }),
//     renderSimpleIcon({ icon: siExpress, size: 80 }),
//   ];

//   return (
//     <div className="w-full h-[500px] flex items-center justify-center">
//       <Cloud
//         options={{
//           // Interaction
//           dragControl: true,
//           wheelZoom: false,

//           // Auto rotation
//           initial: [0.2, -0.2], // rotation direction (x, y)
//           reverse: true,
//           depth: 0.8,
//           speed: 0.5, // rotation speed

//         }}
//       >
//         {icons}
//       </Cloud>
//     </div>
//   );
// }


// import { Cloud, renderSimpleIcon } from "react-icon-cloud";
// import {
//     siReact,
//     siNodedotjs,
//     siMongodb,
//     siHtml5,
//     //   siCss3,
//     siJavascript,
//     siTypescript,
//     siTailwindcss,
//     siExpress,
//     siGit,
//     siGithub,
//     siVercel,
//     siNetlify,
//     siPostman,
//     siRedux,
//     //   siVisualstudiocode,
//     siMongoose,
// } from "simple-icons/icons";

// export default function TechStack() {
//     const icons = [
//         renderSimpleIcon({ icon: siReact, size: 45 }),
//         renderSimpleIcon({ icon: siNodedotjs, size: 45 }),
//         renderSimpleIcon({ icon: siMongodb, size: 45 }),
//         renderSimpleIcon({ icon: siMongoose, size: 45 }),
//         renderSimpleIcon({ icon: siHtml5, size: 45 }),
//         // renderSimpleIcon({ icon: siCss3, size: 45 }),
//         renderSimpleIcon({ icon: siJavascript, size: 45 }),
//         renderSimpleIcon({ icon: siTypescript, size: 45 }),
//         renderSimpleIcon({ icon: siTailwindcss, size: 45 }),
//         renderSimpleIcon({ icon: siExpress, size: 45 }),
//         renderSimpleIcon({ icon: siGit, size: 45 }),
//         renderSimpleIcon({ icon: siGithub, size: 45 }),
//         renderSimpleIcon({ icon: siRedux, size: 45 }), // Redux (Toolkit ka icon available nahi, Redux use karna padega)
//         renderSimpleIcon({ icon: siPostman, size: 45 }), // REST API alternative
//         // renderSimpleIcon({ icon: siVisualstudiocode, size: 45 }),
//         renderSimpleIcon({ icon: siVercel, size: 45 }),
//         renderSimpleIcon({ icon: siNetlify, size: 45 }),
//         // Custom images (missing in simple-icons)
//         <img key="render" src="/render.svg" alt="Render" width={45} height={45} />,


//         // agar Redux Toolkit ka alag svg chahiye toh yahan bhi daal sakte ho
//         // <img key="reduxtoolkit" src="/redux-toolkit.svg" alt="Redux Toolkit" width={45} height={45} />,
//     ];

//     return (
//         <div className="w-full h-[500px] flex items-center justify-center">
//             <Cloud
//                 options={{
//                     clickToFront: 500,
//                     depth: 1,
//                     wheelZoom: false,
//                     imageScale: 2,
//                     activeCursor: "pointer",
//                     tooltip: "native",
//                     initial: [0.1, -0.1], // auto rotate axis
//                     reverse: true,
//                     dragControl: true, // mouse drag
//                     decel: 0.95, // smooth deceleration
//                     maxSpeed: 0.05, // auto rotate speed
//                     minSpeed: 0.01,
//                 }}
//             >
//                 {icons}
//             </Cloud>
//         </div>
//     );
// }




import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
    siReact,
    siNodedotjs,
    siMongodb,
    siMongoose,
    siHtml5,
    siJavascript,
    siTypescript,
    siTailwindcss,
    siExpress,
    siGit,
    siGithub,
    siVercel,
    siNetlify,
    siPostman,
    siRedux,
    siBootstrap,
    siPython,
    siMysql,
    siLinux,
    siRender, // ⚡ Render ka icon bhi import kar
} from "simple-icons/icons";

export default function TechStack() {
    const icons = [
        renderSimpleIcon({ icon: siReact, size: 45 }),
        renderSimpleIcon({ icon: siNodedotjs, size: 45 }),
        renderSimpleIcon({ icon: siMongodb, size: 45 }),
        renderSimpleIcon({ icon: siMongoose, size: 45 }),
        renderSimpleIcon({ icon: siHtml5, size: 45 }),
        renderSimpleIcon({ icon: siJavascript, size: 45 }),
        renderSimpleIcon({ icon: siTypescript, size: 45 }),
        renderSimpleIcon({ icon: siTailwindcss, size: 45 }),
        // ⚡ Express ko white banaya
        renderSimpleIcon({ icon: { ...siExpress, hex: "#FFFFFF" }, size: 45 }),
        renderSimpleIcon({ icon: siGit, size: 45 }),
        renderSimpleIcon({ icon: siRedux, size: 45 }),
        renderSimpleIcon({ icon: siPostman, size: 45 }),
        renderSimpleIcon({ icon: siVercel, size: 45 }),
        renderSimpleIcon({ icon: siNetlify, size: 45 }),
        renderSimpleIcon({ icon: siBootstrap, size: 45 }),
        renderSimpleIcon({ icon: siPython, size: 45 }),
        renderSimpleIcon({ icon: siMysql, size: 45 }),
        renderSimpleIcon({ icon: siLinux, size: 45 }),

        // ⚡ White GitHub logo
        renderSimpleIcon({
            icon: { ...siGithub, hex: "#FFFFFF" },
            size: 45,
        }),

        // ⚡ White Render logo
        renderSimpleIcon({
            icon: { ...siRender, hex: "#FFFFFF" },
            size: 45,
        }),
    ];

    return (
        <div className="w-full  h-auto px-5 py-10 md:h-auto md:py-20 xl:py-5 md:px-15 flex items-center justify-center ">
            <Cloud
                options={{
                    clickToFront: 500,
                    depth: 1,
                    wheelZoom: false,
                    imageScale: 2,
                    activeCursor: "pointer",
                    tooltip: "native",
                    initial: [0.1, -0.1],
                    reverse: true,
                    dragControl: true,
                    decel: 0.95,
                    maxSpeed: 0.05,
                    minSpeed: 0.01,
                }}
            >
                {icons}
            </Cloud>
        </div>
    );
}
