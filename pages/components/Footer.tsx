import React from 'react'
import Flexbox from './Flexbox'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const str:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perspiciatis voluptatibus labore amet sequi voluptatum omnis explicabo aliquid laudantium libero.';
  return (
    < footer>
    <div className='footer-1'>
      <div className="f-content">
<Flexbox name='Home' content={str}/>
      </div>
      <div>
      <Flexbox name='About' path='#about' content={str} />
      </div>
      <div>
      <Flexbox name='Social' content={str}/>
      </div>
      
    </div>
  
    <br></br> <hr></hr>


    <div className='content-f'> 
    <div id='heading-footer'> <span>NGO FOUNDATION</span></div>
    <div className="links">
      <div>
        <a href="#">About </a>
      </div>
      <div>
        <a href="#">Help </a>
      </div>
      <div>
        <a href="#">Legal </a>
      </div>
    </div>
    <div>
    <button id="btn-scroll" onClick={() => scrollToTop()}>
        <span>Swipe </span>
      </button>
      </div>
      </div>
      </footer>
  )
}

export default Footer;