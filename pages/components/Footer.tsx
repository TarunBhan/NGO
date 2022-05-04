import React from 'react'
import Flexbox from './Flexbox'
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <footer>
      <div className="f-content">
<Flexbox name='Home'/>
      </div>
      <div>
      <Flexbox name='About' path='#about'/>
      </div>
      <div>
      <Flexbox name='Social' path='https://github.com/TarunBhan'/>
      </div>
      <div>
      <Flexbox name='Donate' amount='12' path='#donate-s'/>
      </div>
      
    </footer><button id="btn-scroll" onClick={() => scrollToTop()}>
        <span>Swipe </span>
        
      </button></>
  )
}

export default Footer;