import React from "react";
import Image from "next/image";
const About = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="whoare_we" id="about">
        <div className="left-content">
          <span> Who are We </span>
          <strong>About</strong>
        </div>
        <div id="right-content">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error
            odit, repellat quaerat illo inventore enim accusamus, assumenda
            autem porro corporis voluptatibus unde fugit sunt magnam provident
            reprehenderit minima tempora rem. Consequatur ducimus vitae, hic
            aspernatur molestiae cupiditate accusantium doloribus dignissimos
            beatae nobis minus, ut dolor tempore minima nesciunt eos!
          </p>
        </div>
      </div>
      <hr></hr>
      <strong className="our-work">Our Work</strong>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        error quos officiis eaque ullam nesciunt deleniti atque sed earum
        voluptates, veritatis et iure, laborum numquam exercitationem. Alias
        debitis nulla aperiam ullam veritatis temporibus dolorum blanditiis
        tenetur at asperiores, eveniet dicta accusantium maiores animi nisi
        mollitia assumenda quos perferendis quo nesciunt!
      </p>
      <button id="btn-scroll" onClick={() => scrollToTop()}>
        {" "}
        ^^
      </button>
    </>
  );
};

export default About;
