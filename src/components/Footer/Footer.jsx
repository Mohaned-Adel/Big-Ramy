import { NavLink } from "react-router-dom";
import "./Footer.scss";
import LogoWrapper from "../LogoWrapper/LogoWrapper";
import SocialIconsWrapper from "../SocialIconsWrapper/SocialIconsWrapper";

export default function Footer() {
  const mainRoutes = [
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Tournaments",
      path: "/tournaments",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "E-Books",
      path: "/ebooks",
    },
  ];

  const subRoutes = [
    {
      name: "Privacy policies",
      path: "/privacy-policies",
    },
    {
      name: "Terms & Conditions",
      path: "/terms-conditions",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <div className="footer">
      <div className="container mx-auto px-6">
        <div className="footer-head">
          <LogoWrapper />
          <div className="newsetter-label">
            <p>Join our</p>
            <h6>Newsetter</h6>
          </div>
          <div className="newsetter-input">
            <input type="text" placeholder="What your are Looking for?" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-body">
          <div className="footer-about">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesett ing
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <SocialIconsWrapper />
          </div>
          <div className="footer-links">
            {mainRoutes.map((route, index) => (
              <div key={index}>
                <NavLink to={route.name}>{route.name}</NavLink>
              </div>
            ))}
          </div>
          <div className="footer-links">
            {subRoutes.map((route, index) => (
              <div key={index}>
                <NavLink to={route.name}>{route.name}</NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p>2023 LOGO. All Rights Reserved.</p>
      </div>
    </div>
  );
}
