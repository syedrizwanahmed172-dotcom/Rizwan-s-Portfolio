import Css from "./AboutMeContainer.module.css";

const Intro = () => {
  return (
    <div className={Css.IntroContainer}>
      <h1 className={Css.heading}>
        👋 Hi, I'm Rizwan – a UI/UX designer who transforms ideas into sleek,
        user-focused designs.
      </h1>

      <p>
        I believe great design is simple, thoughtful, and user-first. With a
        keen eye for detail and a strong grasp of design tools like Figma and
        Adobe XD, I build intuitive interfaces that people love to use. I've
        worked on multiple design projects ranging from mobile apps to
        e-commerce platforms. Each project helped me grow as a creative problem
        solver.
      </p>

      <section>
        <h2>🛠️ What I’m good at:</h2>
        <ul>
          <li>Focused on creating clean, intuitive, and engaging interfaces</li>
          <li>
            Dedicated to solving real user problems through thoughtful design
          </li>
          <li>Strong in user research, wireframing, and prototyping</li>
        </ul>
      </section>

      <section>
        <h2>⚙️ My everyday tools:</h2>
        <ul>
          <li>
            Figma – Most popular for UI design, real-time collaboration,
            prototyping
          </li>
          <li>Adobe XD – Vector-based UI design and prototyping tool</li>
          <li>
            Sketch – Mac-only UI design tool, strong in plugins and symbols
          </li>
        </ul>
      </section>

      <section>
        <h2>🚀 What I bring to the table:</h2>
        <ul>
          <li>
            A user-centered mindset focused on solving real problems through
            design
          </li>
          <li>
            Strong wireframing, prototyping, and interaction design skills
          </li>
          <li>
            Clean, modern, and accessible UI design across web and mobile
            platforms
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Intro;
