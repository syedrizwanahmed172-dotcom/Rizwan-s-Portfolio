import Css from "./HeroMain.module.css";
import SplitText from "../AnimatedComponents/TextAnimation";

const Introduction = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${Css.introContainer}`}>
      <h1>
        Hey, I am{" "}
        <b className="Same">
          <SplitText
            text="Syed Rizwan."
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </b>
      </h1>
      <p>
        I create seamless user experiences that connect people and technology.
        My work lies at the intersection of design, usability, and purpose.
        Whether it's an app or a website, I turn ideas into elegant design
        solutions.
      </p>

      <div className={`${Css.heroButtons}`}>
        <button
          className={`${Css.ProjectsBtn}`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className={`${Css.ContactMeBtn}`}
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Introduction;
