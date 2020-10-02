
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
};

export default class SlideShow extends React.Component {

    render = () => {
        return (

            <div className="slideshow-item">
                <Slider {...settings}>
                    <img src="./images/brandimage_1.jpg" alt="" />
                    <img src="./images/brandimage_2.jpg" alt="" />
                    <img src="./images/brandimage_3.jpg" alt="" />
                    <img src="./images/brandimage_4.jpg" alt="" />
                </Slider>
            </div>


        )
    }

}