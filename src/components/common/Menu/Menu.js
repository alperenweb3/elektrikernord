import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSticky from "../../../hooks/use-sticky";
import Menus from "./Menus";
import OffCanvas from "./OffCanvas";

const Menu = ({ header_style_2 }) => {
  const [isOffCanvas, setOffCanvas] = useState(false);
  const { sticky } = useSticky();
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area ${
            header_style_2
              ? "header__area-2 pl-110 pr-110"
              : "header__transparent pr-90 pl-90"
          } header-sticky-active ${sticky ? "header-sticky" : ""}`}
        >
          <div className="header__main" id="header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-4 col-7">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={
                          header_style_2
                            ? "assets/img/logo/logo-black.png"
                            : "assets/img/logo/logo_new.png"
                        }
                        alt="logo" width="100"
                      />
                    </Link>
                  </div>
                </div>
                <div className=" col-lg-7 col-md-4 d-none d-md-block">
                  <div
                    className={`main-menu ${
                      header_style_2 ? "normal-menu" : ""
                    } text-center`}
                  >
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <Menus/>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-5">
                  <div className="header__main_right d-flex justify-content-end align-items-center">
                    <div
                      className={`tp-bar-icon ${
                        header_style_2 ? "tp-bar-icon-dark" : ""
                      }`}
                    >
                      <button
                        onClick={() => setOffCanvas(true)}
                        className="offcanvas-toggle-btn"
                      >
                        <i className="fal fa-bars" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas start */}
      <OffCanvas isOffCanvas={isOffCanvas} setOffCanvas={setOffCanvas} />
      {/* off canvas end */}
    </>
  );
};

export default Menu;
