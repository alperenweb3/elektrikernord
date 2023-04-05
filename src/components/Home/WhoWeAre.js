import React from "react";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <>
      {/* <!-- tp-about-3 start  --> */}
      <div className="tp-ab-section pt-160 pb-160">
        <div className="container">
          <div className="row align-items-center tp-flex-reverse">
            <div className="col-lg-4">
              <div className="tp-ab-info pr-40">
                <div className="tp-ab-subtitle mb-10">
                  <span>Solar Power Generation Set</span>
                </div>
                <h3 className="tp-ab-title mb-35">The Unlimited innovation</h3>
                <p>
                  Tellus rutrum tellus pellentesque eu. Sagittis purus sit amet
                  volutpat. Sed ullamcorper tellus rutrum tellus pellentesque
                  eu. Sagittis purus sit amet volutpat. Sed ullamcorper
                  retherlly.Tellus rutrum tellus pellentesque eu. Sagittis purus
                  sit amet volutpat. retherlly.Tellus rutrum tellus pellentesque
                  eu.
                </p>
                <div>
                  <Link to="#" className="tp-btn">
                    All Service
                    <span>
                      <svg
                        width="22"
                        height="8"
                        viewBox="0 0 22 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <svg
                        width="22"
                        height="8"
                        viewBox="0 0 22 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-ab-img text-md-end w-img">
                <img src="/assets/img/service/hh-ARCI-home-1030x727.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- tp-about-3 end  --> */}
    </>
  );
};

export default WhoWeAre;
