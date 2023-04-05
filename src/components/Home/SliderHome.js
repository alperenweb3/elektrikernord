import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import slider from "../../data/SliderHomePageOne.json";

const HomeSlider = () => {
  const sliderRef = useRef(null);
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* <!-- hero slider start --> */}
      <div className="slider-home">
        <div className="tp-slider-area p-relative ">
          <div className="tp-hero_slider slider-active p-relative">
            <Slider ref={sliderRef} {...settings}>
              {slider?.slider.map((item) => (
                <div key={item.id}>
                  <div
                    className="tp-single-slider tp-slider-height p-relative"
                    style={{ backgroundImage: `url(${item.bgImg})` }}
                  >
                    <div className="tp-slider-text black-bg d-inline-block">
                      <span className="mb-15 d-inline-block">{item.title}</span>
                      <h3 className="tp-slider-title">
                        {item.subTitle1} <br />
                        {item.subTitle2}
                      </h3>

                      <Link
                        to="/"
                        className="tp-slider-btn mt-40 d-inline-block"
                      >
                        <span>
                          <svg
                            width="53"
                            height="8"
                            viewBox="0 0 53 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                              fill="currentColor"
                            />
                          </svg>
                          <svg
                            width="53"
                            height="8"
                            viewBox="0 0 53 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        {item?.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="slider-arrow">
            <button
              onClick={() => sliderRef.current?.slickNext()}
              type="button"
              className="slick-prev slick-arrow"
            >
              <span>Next</span>
            </button>
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              type="button"
              className="slick-next slick-arrow"
            >
              <span>Prev</span>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- hero slider end  --> */}
    </>
  );
};

export default HomeSlider;
