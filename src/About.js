import React from "react";
import Web from "../src/Images/img2.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page of my App with"
        imgSrc={Web}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
