import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const devInfo = "flex items-center space-x-4";

function Footer() {
    return (
        <>
            <footer className="text-white bg-gray-950 border-t border-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-20 py-10">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
                        <div className="space-y-3">
                            <h2 className="text-xl font-semibold">Let&apos;s Connect</h2>
                            <p className="text-sm text-slate-300">
                                I&apos;m currently open to internship opportunities and collaborations.
                                Feel free to reach out.
                            </p>
                            <a
                                href="#contacts"
                                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-400 px-4 py-3 text-xs transition-colors hover:border-violet-400 hover:text-violet-200"
                            >
                                <IoMail className="shrink-0" aria-hidden />
                                Contact me
                            </a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className={devInfo}>
                                <div className="shrink-0 rounded-full bg-slate-900 p-2">
                                    <IoMail className="text-xl text-indigo-500" />
                                </div>
                                <p className="text-[12px] text-slate-200 break-all">
                                    ainainioluwa090@gmail.com
                                </p>
                            </div>
                            <div className={devInfo}>
                                <div className="shrink-0 rounded-full bg-slate-900 p-2">
                                    <IoCallOutline className="text-xl text-indigo-500" />
                                </div>
                                <p className="text-[12px] text-slate-200">347-631-0559</p>
                            </div>
                            <div className={devInfo}>
                                <div className="shrink-0 rounded-full bg-slate-900 p-2">
                                    <CiLocationOn className="text-xl text-indigo-500" />
                                </div>
                                <p className="text-[12px] text-slate-200">New York, NY</p>
                            </div>
                        </div>

                        <div className="flex gap-3 md:justify-end">
                            <a
                                href="https://www.linkedin.com/in/inioluwa-aina/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="inline-flex items-center justify-center rounded-2xl border border-slate-400 p-3.5 transition-colors hover:border-violet-400 hover:text-violet-300"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/nelsonaina"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="inline-flex items-center justify-center rounded-2xl border border-slate-400 p-3.5 transition-colors hover:border-violet-400 hover:text-violet-300"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                        © {new Date().getFullYear()} Inioluwa Nelson Aina. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
