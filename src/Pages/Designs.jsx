import NavBar from "../Components/NavBar";
import Projects from "../Components/Projects";

function Designs() {
    return (
        <>
            <NavBar />
            <div className="bg-slate-950 px-4 md:px-20 sm:px-5 max-w-6xl mx-auto">
                <Projects />
            </div>
        </>
    );
}

export default Designs;
