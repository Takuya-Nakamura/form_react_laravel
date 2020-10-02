
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    fade: true,
};

var settings_left = {
    ...settings,
    autoplaySpeed: 5000,
}

var settings_right = {
    ...settings,
    autoplaySpeed: 6000,
}

export default class KeyVisual extends React.Component {

    render = () => {
        return (
            <div className="key-visual">
                <div className="key-visual-item">
                    <Slider {...settings_left}>
                        <img src="./images/image1.jpg" alt="" />
                        <img src="./images/image2.jpg" alt="" />
                    </Slider>
                </div>

                <div className="key-visual-item">
                    <Slider {...settings_left}>
                        <img src="./images/image6.jpg" alt="" />
                        <img src="./images/image7.jpg" alt="" />
                    </Slider>
                </div>

                <div className="key-visual-item">
                    <Slider {...settings_right}>
                        <img src="./images/image4.jpg" alt="" />
                        <img src="./images/image5.jpg" alt="" />
                    </Slider>
                </div>
            </div>

        )
    }

}