import Css from "./Footer.module.css";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={`${Css.footer}`}>
      <p className={`${Css.footertext}`}>
        © 2025 Syed Rizwan Ahmed. All Rights Reserved.
      </p>
      <div className={`${Css.socialicons}`}>
        <a
          href="https://www.linkedin.com/in/syed-rizwanahmed-83335b340/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/rizwan_ahmed_173/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
