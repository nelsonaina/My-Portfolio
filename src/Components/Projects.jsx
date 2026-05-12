import proj from "../Information/projIndex";
import { FaArrowRight } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

function Projects() {
    const langColor = {
        HTML: "text-sky-400",
        CSS: "text-pink-400",
        JavaScript: "text-amber-300",
        "C++": "text-violet-400",
    };

    return (
        <>
            <section
                id="projects"
                className="scroll-mt-24 border-t border-white/6 bg-slate-940 py-12 text-white"
            >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2
                            id="projects-heading"
                            className="text-3xl font-bold tracking-tight text-white after:mt-3 after:block after:h-1 after:w-14 after:rounded-full after:bg-linear-to-r after:from-violet-500 after:to-blue-500 after:content-[''] sm:text-4xl"
                        >
                            Projects
                        </h2>
                        <p className="mt-2 text-xl text-slate-500">
                            Featured Projects
                        </p>
                    </div>
                    <Link to="/designs">
                        <a
                            href="#contacts"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-500/50 bg-transparent px-4 py-2.5 text-sm text-slate-200 transition-colors hover:border-violet-400/80 hover:text-white"
                        >
                            View All Projects
                            <FaArrowRight
                                className="shrink-0 text-xs"
                                aria-hidden
                            />
                        </a>
                    </Link>
                </div>

                {/* cards */}
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {proj.map((item) => (
                        <a
                            key={item.key}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex w-full flex-col overflow-hidden rounded-3xl border border-slate-500/50 bg-gray-950 p-5 shadow-lg transition-all duration-300 hover:border-violet-500/25 hover:shadow-[0_12px_40px_-16px_rgba(124,58,237,0.45)]"
                        >
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-white/4">
                                <img
                                    className="h-full w-full object-cover brightness-[0.92] transition duration-300 group-hover:scale-[1.02]"
                                    src={item.img}
                                    alt={`${item.title} preview`}
                                    loading="lazy"
                                />
                            </div>

                            <div className="mt-5 flex w-full flex-1 flex-col gap-3 text-left">
                                <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
                                    {item.title}
                                </h3>
                                <p className="flex-1 text-sm leading-relaxed text-slate-400">
                                    {item.desc}
                                </p>

                                <div className="flex items-end justify-between gap-3 pt-1">
                                    <div className="flex flex-wrap gap-2">
                                        {item.language.map((lang) => (
                                            <span
                                                key={`${item.title}-${lang}`}
                                                className={`rounded-full bg-[#0a0a1a] px-2.5 py-1 text-xs font-medium ${langColor[lang] ?? "text-slate-300"}`}
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="inline-flex shrink-0 text-white/90">
                                        <HiExternalLink
                                            className="h-5 w-5"
                                            aria-hidden
                                        />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Projects;
