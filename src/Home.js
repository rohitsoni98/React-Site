import React from "react";
import Web from "../src/Images/img.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Programming Skills with"
        imgSrc={Web}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
