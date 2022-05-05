import React from "react";
import Nav from "./Navbar";
import slides from "./carousel";
import Image from "next/image";
import pic from "./images-slides/logo.jpeg";
import Donate from "./Donate";
import About from "./About";
import Suppoters from "./suppoters";
import Slick from './components/slick'
import Carousel from "./carousel";
import Footer from "./components/Footer";
const index = () => {
  const image = [{ photo: { pic } }];

  return (
    <div>
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
        id="home"
      >
      </div>
      <Nav />
      <Image src={pic} width="100" height="90" />
      <Carousel />
      <Donate />
      <About />
      
      <Slick />
      <Footer />
    </div>
  );
};

export default index;
