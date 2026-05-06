import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";

function Home() {
    return (
        <>
            <NavBar />
            <div className="bg-slate-950 px-4 md:px-20 sm:px-5 max-w-6xl mx-auto">
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
            </div>
            <div id="contacts" className="scroll-mt-24">
                <Footer />
            </div>
        </>
    );
}

export default Home;
