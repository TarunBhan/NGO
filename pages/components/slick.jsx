import React from 'react'
import Slider from 'react-slick'
export default function reactslick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed:500,
    speed:1000,
    cssEase: "linear"
  };
  return (
    <div className='slick'>
   
        <Slider {...settings} >
          <div>
            <img width="800px" height="auto" src="https://pbs.twimg.com/media/EULifawVAAAdvzY.jpg:large" alt="12"/>
            <p>help</p>
          </div>
          <div>
          <img width="800px" height="auto" src='https://media.istockphoto.com/photos/black-woman-with-volunteers-friends-in-charity-food-bank-picture-id1202238217?k=20&m=1202238217&s=612x612&w=0&h=K4BZMfbjNXRyWJ-heT5ygt_07NwabDcKlhONO2Uy1jw=' alt="121"/>
          </div>
          <div>
          <img width="800px" height="auto" src='https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt="121"/>
          </div>
          <div>
        <img width="800px" height="auto" src='https://image.shutterstock.com/image-photo/young-man-ngo-using-phone-600w-2110371761.jpg' alt="121"/>
          </div>
          <div>
          <img width="800px" height="auto" src='https://media.istockphoto.com/photos/black-woman-with-volunteers-friends-in-charity-food-bank-picture-id1202238217?k=20&m=1202238217&s=612x612&w=0&h=K4BZMfbjNXRyWJ-heT5ygt_07NwabDcKlhONO2Uy1jw=' alt="121"/>
         </div>
          <div>
        <img width="800px" height="auto" src='https://www.khalsaaid.org/uploads/news/1505244033.jpg' alt="121"/>
          </div>
        </Slider>
    </div>
  )
}
