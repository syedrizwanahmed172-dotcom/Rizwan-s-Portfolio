import Css from "./HeroMain.module.css";
import FadeContent from "../AnimatedComponents/FadeContent";
const Skills = () => {
  return (
    <div className={`${Css.heroSkills}`}>
      {
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="image1.png" />
        </FadeContent>
      }
      {
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="image2.png" />
        </FadeContent>
      }
      {
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="image3.png" />
        </FadeContent>
      }
      {
        <FadeContent
          blur={true}
          duration={1800}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="image4.png" />
        </FadeContent>
      }
    </div>
  );
};

export default Skills;
