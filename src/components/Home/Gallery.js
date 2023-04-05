import React from "react";
import Slider from "react-slick";
import { useContext } from "react";
import GalleryImg from "../../data/GalleryHomePageOne.json";
import { AppContext } from "../context/ContextProvider";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Gallery = () => {
  const {handleMouseEnter,handleMouseLeave} = useContext(AppContext);

  return (
    <>
      <div className="tp-cursor-point-area ddd tp-gallery-area position-relative pr-15 pl-15 fix">
      <div className="container">
        <h3 className="tp-sv__title">Fairs</h3>
        <div className="box">
          <div className="tp-gallery-slider tp-gallery-slider-active tp-gallery-space">
            <Slider {...settings}>
              {GalleryImg?.gallery.map((item) => (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={item.id}
                  className="tp-gallery-item mb-2"
                >
                  <img src={item.img} alt="img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      </div>
    </>
  );

};

export default Gallery;
