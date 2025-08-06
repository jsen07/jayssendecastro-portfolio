import Hero from "./Components/HeroComponent/Hero";
import AboutMe from "./Components/AboutMeComponent/AboutMe";
import Navigation from "./Components/NavigationComponent/Navigation";
import TechStack from "./Components/TechStackComponent/TechStack";
import RainParticles from "./Components/BackgroundComponent/RainParticles";
import Projects from "./Components/ProjectsComponent/Projects";
import Contact from "./Components/ContactComponent/Contact";
import Footer from "./Components/FooterComponent/Footer";
import SocialsBar from "./Components/HeroComponent/BarComponent/SocialsBar";
function App() {
  return (
    <div className="w-full bg-neutral-900 px-2 relative z-20">
      <div className="absolute top-0 left-0 h-full w-full -z-10">
        <RainParticles count={90} />
      </div>
      {/* <div className="fixed top-0 left-0 z-50 bg-black text-white text-base px-10 py-1 rounded-br">
        <div className="hidden 2xl:block">2XL</div>
        <div className="block sm:hidden">XS</div>
        <div className="hidden sm:block md:hidden">SM</div>
        <div className="hidden md:block lg:hidden">MD</div>
        <div className="hidden lg:block xl:hidden">LG</div>
        <div className="hidden xl:block 2xl:hidden">XL</div>
      </div> */}
      <div className="hidden lg:flex">
        <SocialsBar />
      </div>
      <Navigation />
      <div className="flex sm:justify-center">
        <div className="md:w-[850px] 2xl:w-[1100px]">
          <section id="hero">
            <Hero />
          </section>

          <section className="mt-10" id="aboutme">
            <AboutMe />
          </section>

          <section className="mt-10" id="techStack">
            <TechStack />
          </section>

          <section className="mt-10" id="projects">
            <Projects />
          </section>

          <section className="mt-10" id="contact">
            <Contact />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
