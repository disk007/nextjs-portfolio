"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import 'react-photo-view/dist/react-photo-view.css';
import { LuZoomIn, LuZoomOut } from "react-icons/lu";
import { MdOutlineRefresh } from "react-icons/md";
import Image from "next/image";
import { projectDetails } from "../data.jsx";
import {
    TransformWrapper,
    TransformComponent,
    useControls,
} from "react-zoom-pan-pinch";
const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
        <div className="flex justify-end">
            <div className="p-2 cursor-pointer mx-2" onClick={() => resetTransform()}><MdOutlineRefresh className="text-slate-400 hover:text-white w-5 h-5" /></div>
            <div className="p-2 cursor-pointer mx-2" onClick={() => zoomOut()}><LuZoomOut className="text-slate-400 hover:text-white w-5 h-5" /></div>
            <div className="p-2 cursor-pointer mx-2" onClick={() => zoomIn()}><LuZoomIn className="text-slate-400 hover:text-white w-5 h-5" /></div>
        </div>
    )
}


const DetailProjectPage = ({ params }) => {
    const { id } = params;
    const project = projectDetails.find((proj) => proj.id.toString() === id);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        if (project?.images?.length) {
            setActiveImage(project.images[0]);
        }
    }, [project]);
    return (
        <>
            <main className="min-h-screen bg-[#121212] text-gray-300 px-4 md:px-10 py-24">
                {/* container */}
                <div className="max-w-7xl mx-auto space-y-16">

                    {/* ===== TOP SECTION ===== */}
                    {activeImage ? (
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                            {/* IMAGE GALLERY */}
                            <div className="p-2 md:p-3">
                                <div className="
                                    relative
                                    aspect-[4/3]
                                    sm:aspect-square
                                    rounded-xl
                                    overflow-hidden
                                    bg-[#181818]
                                ">

                                    <TransformWrapper
                                    >
                                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                            <>
                                                <Controls />
                                                <TransformComponent
                                                    wrapperStyle={{ width: "100%", height: "90%" }}
                                                >
                                                    <img
                                                        src={activeImage}
                                                        alt="Project preview"

                                                        className="object-contain"
                                                    />
                                                </TransformComponent>

                                            </>
                                        )}
                                    </TransformWrapper>
                                </div>


                                {/* thumbnails */}
                                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                                    {project.images.map((img) => (
                                        <button
                                            key={img}
                                            onClick={() => setActiveImage(img)}
                                            className={`relative min-w-[56px] h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden
                    ${activeImage === img
                                                    ? "ring-cyan-400"
                                                    : "ring-transparent opacity-70 hover:opacity-100"
                                                }
                  `}
                                        >
                                            <Image src={img} alt="thumb" className="object-cover" fill />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* PROJECT INFO */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-semibold ">
                                        {project.title}
                                    </h1>
                                </div>
                                <div className="bg-[#181818] rounded-xl p-2 md:p-5">
                                    <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                                        Project Overview
                                    </h2>
                                    <p className="leading-relaxed text-gray-300">
                                        {project.description}
                                    </p>
                                </div>

                                {/* features */}
                                <ul className="space-y-2">
                                    {project.dutys.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="text-cyan-400">✔</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* tech stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full text-sm
                  bg-cyan-400/10 text-cyan-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* actions */}
                                {project.gitUrl !="" && (
                                <div className="flex flex-wrap gap-4 pt-4">
                                    
                                    <Link
                                        href={project.gitUrl}
                                        className="flex justify-center items-center gap-1 px-6 py-3 rounded-xl
                border border-gray-600 text-gray-200
                hover:border-gray-400 transition"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                        GitHub
                                    </Link>
                                </div>
                                )}
                            </div>
                        </section>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500">Loading...</p>
                        </div>
                    )}


                </div>
            </main>
        </>
    );
};
export default DetailProjectPage;