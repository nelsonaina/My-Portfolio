import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { MdClose, MdMenu, MdOutlineArrowOutward } from "react-icons/md";

const linkClass =
    "scroll-mt-24 px-2 py-1 text-white transition-colors duration-200 hover:text-violet-500 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500";

const resumeHref = "/myresume.pdf";
const resumeDownloadName = "InioluwaAinaResume.pdf";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b-2 border-slate-800 font-mono">
            <div className="max-w-6xl mx-auto flex justify-between items-center gap-3 p-3">
                <a
                    href="#hero"
                    className="flex items-center shrink-0 min-w-0"
                    onClick={closeMenu}
                >
                    <span className="text-white">Aina.</span>
                    <span className="text-slate-400">Dev</span>
                </a>

                <div className="hidden md:flex items-center text-xs gap-1 lg:gap-3">
                    <a className={linkClass} href="#projects">
                        Projects
                    </a>
                    <a className={linkClass} href="#skills">
                        Skills
                    </a>
                    <a className={linkClass} href="#about">
                        About
                    </a>
                    <a className={linkClass} href="#contacts">
                        Contacts
                    </a>
                </div>

                <div className="hidden md:flex text-xs p-1 gap-2 lg:gap-3 shrink-0">
                    <a
                        href={resumeHref}
                        download={resumeDownloadName}
                        className="flex items-center justify-center gap-1 border border-violet-500 rounded-xl px-2 py-2 text-violet-100 shadow-xl hover:transition hover:duration-200 hover:shadow-[0px_2px_19px_-5px_#8E51FF]"
                    >
                        <FaDownload className="shrink-0" aria-hidden />
                        Resume
                    </a>
                    <a
                        href="https://github.com/nelsonaina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 border border-violet-500 rounded-xl px-2 py-2 text-violet-100 shadow-xl transition-shadow hover:shadow-[0px_2px_19px_-5px_#8E51FF]"
                    >
                        Github
                        <MdOutlineArrowOutward
                            className="shrink-0"
                            aria-hidden
                        />
                    </a>
                </div>

                <button
                    type="button"
                    className="md:hidden p-2 text-white rounded-lg border border-slate-700 hover:bg-slate-900 transition-colors"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    {menuOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
                </button>
            </div>

            {menuOpen ? (
                <div
                    id="mobile-nav"
                    className="md:hidden border-t border-slate-800 bg-slate-950 px-3 py-4 flex flex-col gap-1 text-sm"
                >
                    <a
                        className={`${linkClass} block`}
                        href="#projects"
                        onClick={closeMenu}
                    >
                        Projects
                    </a>
                    <a
                        className={`${linkClass} block`}
                        href="#skills"
                        onClick={closeMenu}
                    >
                        Skills
                    </a>
                    <a
                        className={`${linkClass} block`}
                        href="#about"
                        onClick={closeMenu}
                    >
                        About
                    </a>
                    <a
                        className={`${linkClass} block`}
                        href="#contacts"
                        onClick={closeMenu}
                    >
                        Contacts
                    </a>
                    <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-slate-800">
                        <a
                            href={resumeHref}
                            download={resumeDownloadName}
                            className="flex items-center justify-center gap-2 border border-violet-500 rounded-xl p-2 text-violet-100"
                            onClick={closeMenu}
                        >
                            <FaDownload aria-hidden />
                            Resume
                        </a>
                        <a
                            href="https://github.com/nelsonaina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 border border-violet-500 rounded-xl p-2 text-violet-100"
                            onClick={closeMenu}
                        >
                            Github
                            <MdOutlineArrowOutward aria-hidden />
                        </a>
                    </div>
                </div>
            ) : null}
        </nav>
    );
}

export default NavBar;
