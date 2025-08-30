import Css from "./myProjects.module.css";
import ScrollSection from "./ScrolSections";

const MyProjects = () => {
  return (
    <>
      <h1 className={Css.Projects}>My Projects</h1>

      <div className={Css.myProjects}>
        <div className={Css.scrollContainer}>
          <ScrollSection />
        </div>
      </div>
    </>
  );
};

export default MyProjects;
