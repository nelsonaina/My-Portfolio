import { VscBeaker } from "react-icons/vsc";
import { SiDevbox } from "react-icons/si";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const cardClass =
    "p-3 rounded-lg border border-slate-700/80 bg-slate-900/40 flex gap-3 items-center min-h-[4.5rem] transition-colors hover:border-slate-600 hover:bg-slate-900/50";

function AboutMe() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className=" scroll-mt-24 w-full border-t border-slate-800 py-12 md:py-10 text-white"
        >
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12 lg:gap-16">
                <div className="flex w-full flex-col gap-4 text-center md:min-w-0 md:flex-1 md:text-left">
                    <p className="text-xl font-normal text-violet-500 md:text-lg">About Me</p>
                    <h2
                        id="about-heading"
                        className="text-2xl font-semibold leading-snug sm:text-3xl md:text-2xl"
                    >
                        I'm passionate about building technology that makes
                        an <span className="text-violet-500">impact</span>.
                    </h2>
                    <p className="mx-auto max-w-prose text-sm leading-relaxed text-slate-400 sm:text-base md:mx-0 md:text-sm">
                        I'm a Computer Science student at Borough of
                        Manhattan Community College and an undergraduate
                        researcher in the CIS department. I enjoy solving complex
                        problems, learning new technologies, and building projects
                        that create real world value.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a
                            href="#contacts"
                            className="inline-flex items-center justify-center gap-2 rounded-md border border-violet-500 px-4 py-3 text-xs transition-colors hover:bg-violet-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                        >
                            <CgProfile
                                className="text-violet-500 text-xl shrink-0 "
                                aria-hidden
                            />
                            Learn More About Me
                        </a>
                    </div>
                </div>

                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-1 md:min-w-0 md:flex-1 cursor-default">
                    <div className={cardClass}>
                        <div className="shrink-0 rounded-full bg-slate-900 p-2">
                            <VscBeaker className="text-xl text-indigo-500" />
                        </div>
                        <div className="min-w-0 text-left">
                            <h3 className="text-sm font-medium">Researcher</h3>
                            <p className="text-xs font-normal text-slate-400">
                                CIS Department, BMCC
                            </p>
                        </div>
                    </div>
                    <div className={cardClass}>
                        <div className="shrink-0 rounded-full bg-slate-900 p-2">
                            <SiDevbox className="text-xl text-indigo-500" />
                        </div>
                        <div className="min-w-0 text-left">
                            <h3 className="text-sm font-medium">Developer</h3>
                            <p className="text-xs font-normal text-slate-400">
                                Front-end & problem solver
                            </p>
                        </div>
                    </div>
                    <div className={cardClass}>
                        <div className="shrink-0 rounded-full bg-slate-900 p-2">
                            <IoBookOutline className="text-xl text-indigo-500" />
                        </div>
                        <div className="min-w-0 text-left">
                            <h3 className="text-sm font-medium">Lifelong Learner</h3>
                            <p className="text-xs font-normal text-slate-400">
                                Exploring new Technologies
                            </p>
                        </div>
                    </div>
                    <div className={cardClass}>
                        <div className="shrink-0 rounded-full bg-slate-900 p-2">
                            <AiOutlineTeam className="text-xl text-indigo-500" />
                        </div>
                        <div className="min-w-0 text-left">
                            <h3 className="text-sm font-medium">Team Player</h3>
                            <p className="text-xs font-normal text-slate-400">
                                Collaborative & Reliable
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
