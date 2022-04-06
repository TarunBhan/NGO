import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { navLinks } from "./data.js";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className="navbar">
        <ul className={styles.ul}>
          {navLinks.map((link, i) => {
            return (
              <Link href={link.path}>
                <a key={i} style={{ scrollBehavior: "smooth" }}>
                  {link.name}
                </a>
              </Link>
            );
          })}
        </ul>

        {/* {navLinks .map((link)=>{
             return   <a href={link.url} key={link.id}> <h1>{link.text}</h1></a> })}  */}
        {/* <Link href="./">
        <a> Home</a>
    </Link>
    <Link href="./Donate"  >
        <a>Donate</a>
    </Link>
    {/* <Link activeClass="about" to="about" smooth={true} offset={50} duration={500} className="cursor-pointer">
      
    </Link> 
     <Link href="./">
        <a>About</a>
    </Link> 
    <Link href="./">
        <a>Awards</a>
    </Link>  */}
      </nav>
    </div>
  );
};

export default Navbar;
