import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p> &copy; {new Date().getFullYear()} E-MART. All Rights Reserved</p>
      <p className="icons">
        <a href="https://www.instagram.com/jaivik.k.patel/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/JaivikPatel2001/" target="_blank">
          <AiOutlineTwitter />
        </a>
        <a href="https://github.com/Jaivik01092001/" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/jaivik-patel-4a316722a/" target="_blank">
          <AiFillLinkedin />
        </a>
      </p>
    </div>
  );
};

export default Footer;