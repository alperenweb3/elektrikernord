import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- main-footer start  --> */}
          <div className="tp-footer__main">
            <div className="container">
              <div className="tp-footer-border pt-100 pb-70">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 footer-col-2-1 pb-30">
                      <div className="footer-logo mb-30">
                        <a href="#"><img src="/assets/img/logo/logo.png" alt="" /></a>
                      </div>
                      <p>Tellus rutrum tellus pellentesque eu. Sagittis purus sit amet volutpat. Sed ullamcorper tellus rutrum tellus pellentesque eu.Purus sit amet . Sed ullamcorper retherlly. </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 footer-col-2-2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Our Location</h3>
                      <ul>
                        <li><a href="#">London</a></li>
                        <li><a href="#">America</a></li>
                        <li><a href="#">Constarica</a></li>
                        <li><a href="#">Germany</a></li>
                        <li><a href="#">India</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 footer-col-2-3 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Quick Links</h3>
                      <ul>
                        <li><a href="#">Ta-134/A, Gulshan Badda Link </a></li>
                        <li><a href="tel:+88015569569365">(+880)52462545632</a></li>
                        <li><a href="mailto:support@example.com">support@example.com</a></li>
                        <li><span> Office Hours: 9AM - 4PM</span></li>
                        <li><span> Friday - Wekend Day</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 ">
                    <div className="tp-footer__widget tp-footer__2 footer-col-2-4  pb-30">
                      <h3 className="tp-footer__widget-title text-white">Newslatter</h3>
                      <div className="footer-form-3 mb-30">
                        <form>
                          <input type="email" placeholder="Enter your mail" />
                          <button type="submit">Subscribe <i
                            className="fal fa-paper-plane"></i></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main footer end  --> */}
        </div>
      </div>

      {/* <!-- footer copy right --> */}
      <div className="top-footer-copyright pt-30 black-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="tp-copyrigh-text mb-30">
                <span>© {new Date().getFullYear()} Arvilax - Business Consulting</span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-footer-social-icon mb-30 text-md-end">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer copyright end  --> */}
    </footer>
  );
};

export default Footer;