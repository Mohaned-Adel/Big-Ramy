import React from "react";
import "./SocialIconsWrapper.scss";
import { BiLogoTwitter } from "react-icons/bi";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function SocialIconsWrapper() {
  const socialsIcons = [
    {
      name: "Twitter",
      icon: <BiLogoTwitter />,
    },
    {
      name: "LinkedIn",
      icon: <AiFillLinkedin />,
    },
    {
      name: "Instagram",
      icon: <AiOutlineInstagram />,
    },
  ];
  return (
    <>
      <h6>Follow us on</h6>

      <ul className="social-icons-wrapper">
        {socialsIcons.map((social, index) => (
          <li className="social-icon" key={index}>
            {social.icon}
          </li>
        ))}
      </ul>
    </>
  );
}
