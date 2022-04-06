import React from "react";
import Nav from "./Navbar";
import slides from "./carousel";
import Image from "next/image";
import pic from "./images-slides/logo.jpeg";
import Donate from "./Donate";
import About from "./About";
import Suppoters from "./suppoters";
import Carousel from "./carousel";
const index = () => {
  const image = [{ photo: { pic } }];

  console.log(image[0].photo);
  return (
    <div>
      <div
        style={{ width: "100%", height: "100%", position: "relative" }}
        id="home"
      >
        {/* <Image
    alt='Mountains'
    src={pic}
    layout='fill'
    objectFit='contain'
  /> */}
      </div>
      <Nav />
      <Image src={pic} width="100" height="90" />
      <Carousel />
      <Donate />
      <About />
      <Suppoters />
    </div>
  );
};

export default index;
