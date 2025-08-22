import HeroSection from "../Components/Herosection";
import HeroMain from "../Components/HeroContent/HeroMain";
import AboutMeContainer from "../Components/Pages/AboutMe/AboutMeContainer";
import MyProjects from "../Components/Pages/MyProjects/myProjects";
import ContactContainer from "../Components/Pages/ContactMe/ContactContainer";
import Footer from "../Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
          }}
        >
          <HeroSection
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={300}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
        <HeroMain />
      </div>

      {/* Sections */}
      <section id="about-me">
        <AboutMeContainer />
      </section>

      <section id="projects">
        <MyProjects />
      </section>

      <section id="contact">
        <ContactContainer />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
