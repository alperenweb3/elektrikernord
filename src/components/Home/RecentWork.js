import React, { useState } from "react";
import VideoPopup from "../common/Modals/VideoPopup";

const RecentWork = () => {
  const [isVideoOpen,setIsVideoOpen] = useState(false);
  return (
    <>
      <div id="recent-work" className="tp-service-page pt-140 pb-70">
        <div className="container">
        <h3 className="tp-sv__title">Recent Work</h3>
          <div className="row pb-30">
            <div className="col-lg-4 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/recent-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/recent-2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/recent-3.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row pb-30">
            <div className="col-lg-12">
              <div className="tp-sv__content">
                <div className="tp-sv__video">
                  <div
                    className="tp_sv__video-bg"
                    // data-background="/assets/img/service/service-blog-bg.jpg"
                    style={{
                      backgroundImage: `url("/assets/img/bg/solar-energy-1.jpeg")`,
                    }}
                  >
                    <div className="pt-180 pb-180 text-center p-relative">
                      <span>
                        <button
                          onClick={()=> setIsVideoOpen(true)}
                          className="sv-video sv-popup-video"
                        >
                          <i className="fas fa-play"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-30 pt-30">
            <div className="col-lg-4 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/recent-4.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/recent-5.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/recent-6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row pb-30">
            <div className="col-lg-4 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/recent-7.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/recent-8.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/recent-9.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"RCDgouOHKBs"}
      />
      {/* video modal end */}
    </>
  );
};

export default RecentWork;
