import Css from "./myProjects.module.css";

const MyProjects = () => {
  return (
    <>
      <h1 className={Css.Projects}>My Projects</h1>

      <div className={Css.myProjects}>
        <div className={Css.scrollContainer}>
          <section className={Css.card}>
            <div className={`${Css.left}`}>
              <h2>Furniture E-Commerce Platform</h2>
              <h4 style={{ color: "white" }}>
                User-friendly furniture e-commerce platform with smooth
                navigation, secure payments, and admin controls.
              </h4>
              <h6>overview :</h6>
              <p style={{ color: "white" }}>
                This MERN-based e-commerce platform provides users with a smooth
                and intuitive experience to browse a wide range of products, add
                items to their cart effortlessly, and complete secure payments.
                It also includes a comprehensive admin dashboard for efficiently
                managing products, tracking orders, and ensuring seamless
                backend operations.
              </p>
              <h6>Key Features :</h6>
              <ul>
                <li>
                  Intuitive and user-friendly interface for seamless navigation
                </li>
                <li>
                  Responsive design for mobile, tablet, and desktop screens
                </li>
                <li>Interactive product browsing with smooth animations</li>
                <li>
                  Accessible and inclusive design following UX best practices
                </li>
                <li>Clean and modern visual design with consistent branding</li>
              </ul>
            </div>
            <hr className={`${Css.hr}`} />
            <div className={`${Css.right}`}>
              <div className={`${Css.cardImg}`}>
                <img src="./furniture.png" alt="" />
              </div>
            </div>
          </section>
          <section className={Css.card}>
            <div className="left">
              <h2>Digital Agency</h2>
              <h4 style={{ color: "white" }}>
                A professional agency platform built to showcase services,
                portfolio, and client solutions.
              </h4>
              <h6>overview :</h6>
              <p style={{ color: "white" }}>
                I designed and developed this digital agency website as a
                full-stack project to create a modern, user-friendly online
                presence. The platform showcases services, presents a dynamic
                portfolio, and provides clients with an intuitive way to get in
                touch. The goal was to craft a clean, responsive, and engaging
                experience that reflects the quality and professionalism of the
                agency’s digital products.
              </p>
              <h6>Key Features :</h6>
              <ul>
                <li>
                  Modern, responsive UI designed for an intuitive user
                  experience
                </li>
                <li>
                  Dynamic portfolio showcasing projects with detailed case
                  studies
                </li>
                <li>Service pages crafted to clearly highlight offerings</li>
                <li>
                  Mobile-first, fully responsive design across all devices
                </li>
                <li>Integrated contact form for smooth client communication</li>
              </ul>
            </div>
            <hr className={`${Css.hr}`} />
            <div className="right">
              <div className={`${Css.cardImg}`}>
                <img src="./DigitalAgency.png" alt="" />
              </div>
            </div>
          </section>
          <section className={Css.card}>
            <div className="left">
              <h2>Furniture E-Commerce Platform</h2>
              <h4 style={{ color: "white" }}>
                Full-stack e-commerce web app for buying and selling furniture
                with secure payments and admin controls.
              </h4>
              <h6>overview :</h6>
              <p style={{ color: "white" }}>
                This MERN-based e-commerce platform allows users to browse
                products, add them to the cart, and complete secure payments. It
                includes an admin dashboard for managing products and orders,
                ensuring smooth backend operations.
              </p>
              <h6>Key Features :</h6>
              <ul>
                <li>JWT authentication with bcrypt password hashing</li>
                <li>Stripe payment gateway integration</li>
                <li>Admin dashboard for product management</li>
                <li>Responsive UI using Tailwind CSS</li>
                <li>REST API for product & order data</li>
              </ul>
            </div>
            <hr className={`${Css.hr}`} />
            <div className="right">
              <div className={`${Css.cardImg}`}>
                <img src="./furniture.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
