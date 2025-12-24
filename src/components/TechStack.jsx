import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {
    siReact,
    siNodedotjs,
    siMongodb,
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
    siRender,
} from "simple-icons/icons";


export default function TechStack() {
    const icons = [
        renderSimpleIcon({ icon: siReact, size: 40 }),
        renderSimpleIcon({ icon: siNodedotjs, size: 40 }),
        renderSimpleIcon({ icon: siMongodb, size: 40 }),
        renderSimpleIcon({ icon: siMongoose, size: 40 }),
        renderSimpleIcon({ icon: siHtml5, size: 40 }),
        renderSimpleIcon({ icon: siJavascript, size: 40 }),
        renderSimpleIcon({ icon: siTypescript, size: 40 }),
        renderSimpleIcon({ icon: siTailwindcss, size: 40 }),
        renderSimpleIcon({ icon: { ...siExpress, hex: "#FFFFFF" }, size: 40 }),
        renderSimpleIcon({ icon: siGit, size: 40 }),
        renderSimpleIcon({ icon: siRedux, size: 40 }),
        renderSimpleIcon({ icon: siPostman, size: 40 }),
        renderSimpleIcon({ icon: siVercel, size: 40 }),
        renderSimpleIcon({ icon: siNetlify, size: 40 }),
        renderSimpleIcon({ icon: siBootstrap, size: 40 }),
        renderSimpleIcon({ icon: siPython, size: 40 }),
        renderSimpleIcon({ icon: siMysql, size: 40 }),
        renderSimpleIcon({ icon: siLinux, size: 40 }),
        renderSimpleIcon({ icon: { ...siGithub, hex: "#FFFFFF" }, size: 40, }),
        renderSimpleIcon({ icon: { ...siRender, hex: "#FFFFFF" }, size: 40, }),
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

