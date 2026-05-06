import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import myImg from "../assets/Subject.png";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
    return (
        <section
            id="hero"
            className="scroll-mt-24 w-full text-white flex flex-col items-center gap-10 py-10 md:flex-row md:items-center md:justify-between md:gap-12"
        >
            <div className="w-full max-w-xl flex flex-col gap-4 text-center md:text-left md:min-w-0">
                <p className="text-xl sm:text-2xl">Hi, I'm</p>
                <h1 className="flex flex-wrap justify-center gap-x-1 text-3xl sm:text-4xl md:text-5xl font-mono md:justify-start">
                    <span>Inioluwa</span>
                    <span className="text-violet-400">Aina</span>
                </h1>
                <h2 className="text-lg sm:text-xl text-violet-400 font-normal">
                    Computer Science Student & Developer
                </h2>
                <p className="text-sm text-slate-400 font-sans max-w-md mx-auto md:mx-0">
                    I build efficient, user friendly applications and explore
                    innovative solutions that solves real world problems.
                </p>

                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                    <a
                        href="#projects"
                        className="px-4 py-3 bg-blue-500 rounded-md flex items-center justify-center gap-1 text-xs transition-colors hover:bg-blue-600"
                    >
                        View my work
                        <FaArrowRight className="shrink-0" aria-hidden />
                    </a>
                    <a
                        href="#about"
                        className="px-4 py-3 border rounded-md border-slate-400 flex items-center justify-center gap-1 text-xs transition-colors hover:border-violet-400 hover:text-violet-200"
                    >
                        <IoMail className="shrink-0" aria-hidden />
                        Contact me
                    </a>
                </div>
                <div className="flex flex-col items-center gap-3 pt-2 md:flex-row md:justify-start">
                    <span className="text-xs shrink-0">Connect with me</span>
                    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3.5 border rounded-2xl border-slate-400 transition-colors hover:border-violet-400 hover:text-violet-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://github.com/nelsonaina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3.5 border rounded-2xl border-slate-400 transition-colors hover:border-violet-400 hover:text-violet-300"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="#contacts"
                            className="p-3.5 border rounded-2xl border-slate-400 transition-colors hover:border-violet-400 hover:text-violet-300"
                            aria-label="Email"
                        >
                            <IoMail />
                        </a>
                    </div>
                </div>
            </div>

            <div className="shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                <div className="size-full border border-[rgb(59,64,181)] rounded-full flex justify-center items-center shadow-[0px_2px_20px_2px_#8E51FF]">
                    <img
                        src={myImg}
                        alt="Inioluwa Aina"
                        className="size-full object-cover bg-[rgb(15, 21, 36)] rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
