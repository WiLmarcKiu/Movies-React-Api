import React from "react";
import { Link } from "react-scroll";
import "../assets/css/navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            aron<span>movie</span>.
          </Link>
        </h1>
      </div>
      <ul className="navbar-nav">
        <li>
          <Link
            activeClass="active"
            to="trending"
            spy={true}
            smooth={true}
            offset={-50}
            duration={600}
          >
            Trending
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="popular"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            Popular
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
