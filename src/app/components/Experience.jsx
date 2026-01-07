const Experience = () => {
    return (
        <section
            id="experience"
            className="text-white py-8 sm:py-16 xl:py-32"
        >
            {/* SECTION TITLE */}
            <div className="mb-10 w-fit">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                    Work Experience
                </h2>
                <div className="mt-2 h-1 bg-cyan-500 rounded-full w-full" />
            </div>

            {/* EXPERIENCE ITEM */}
            <div className="relative pl-6 border-l-2 border-cyan-500/40">
                {/* dot */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500"></span>

                <div className="space-y-3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100">
                            Gofive Co., Ltd
                        </h3>
                        <p className="text-sm text-gray-400">
                            Full Stack Developer Intern · 16 June 2025 – 3 October 2025
                        </p>
                    </div>

                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex gap-2">
                            <span className="text-cyan-400">▹</span>
                            Collaborated with the development team to fix critical bugs and
                            optimize UI components in the Empeo system
                        </li>
                        <li className="flex gap-2">
                            <span className="text-cyan-400">▹</span>
                            Designed and developed internal projects
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
