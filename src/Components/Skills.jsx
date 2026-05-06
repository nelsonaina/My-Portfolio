import SKILLS from "../Information";

const skillCard =
    "font-mono flex flex-col justify-center items-center gap-2 p-2 py-3 text-[10px] ";

function SkillsCard({ skill }) {
    return (
        <>
            <div className={skillCard}>
                {skill.kind === "img" ? (
                    <img width={40} height={40} src={skill.src} alt="Tool Icon" />
                ) : (
                    <i className={skill.iconClass}></i>
                )}
                <p>{skill.name}</p>
            </div>
        </>
    );
}

function Skills() {
    const loop = [...SKILLS, ...SKILLS];

    return (
        <>
            <section
                id="skills"
                className="timeline-view animate-zoom-in animate-range-[entry_5%_contain_60%] flex flex-col justify-center items-center scroll-mt-24 border-t border-slate-800 py-10 text-white md:flex md:flex-col md:justify-center md:items-center"
            >
                <h2 className="text-2xl font-mono text-slate-300">Skills</h2>
                <p className="text-lg md:text-xl font-mono text-slate-500">
                    Technologies I Work With
                </p>

                <div className="marquee-viewport mt-8 max-w-full">
                    <div className="marquee-track">
                        {loop.map((skill, i) => (
                            <SkillsCard
                                key={`${skill.name}-${i}`}
                                skill={skill}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
