import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/shaikhanas02/">
          <LinkedInIcon />
        </a>
        <a
          onClick={() => (window.location.href = "mailto:shaikhanas7745@gmail.com")}
        >
          <EmailIcon />
        </a>
        <a href="https://github.com/shaikhanas02">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2023 Anas Shaikh</p>
    </div>
  );
}

export default Footer;
