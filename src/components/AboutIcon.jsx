import React from "react";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

function AboutIcon() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FcAbout />
      </Link>
    </div>
  );
}

export default AboutIcon;
