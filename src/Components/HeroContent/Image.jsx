import Css from "./HeroMain.module.css";
import FadeContent from "../AnimatedComponents/FadeContent";

const Image = () => {
  return (
    <div className={`${Css.HeroImage}`}>
      {
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <img src="./rizwanimg.png" />
        </FadeContent>
      }
    </div>
  );
};

export default Image;
