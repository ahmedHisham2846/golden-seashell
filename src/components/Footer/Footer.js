import "./footer.css";
import Logo from "../../imgs/Logo.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer big-footer pt-5 pb-5 text-white-50 text-center text-md-start">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-md-6 col-lg-3">
              <img src={Logo} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-center">FOLLOW US</h5>
                <ul className="d-flex justify-content-center mt-1 list-unstyled">
                  <li>
                    <a href="https://m.facebook.com/goldenseashells/">
                      <FontAwesomeIcon
                        className="text-white i p-2 rounded-circle fa-2x"
                        icon={faFacebook}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Goldens_Tourism">
                      <FontAwesomeIcon
                        className="text-white i p-2 rounded-circle fa-2x"
                        icon={faTwitter}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/goldens_tourism/">
                      <FontAwesomeIcon
                        className="text-white i p-2 rounded-circle fa-2x"
                        icon={faInstagram}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">Links</h5>
                <ul className="site-links list-unstyled lh-lg">
                  <li>
                    <Link className="text-decoration-none" to="/">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/about">
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/destination">
                      DESTINATION
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/adventure">
                      ADVENTURE
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/feedback">
                      FEEDBACK
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/contact">
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <di v="" className="contact">
                <h5 className="text-light">CONTACT</h5>
                <ul className="list-unstyled lh-lg">
                  <li>
                    <FontAwesomeIcon
                      className="text-center i p-2 rounded-circle"
                      icon={faPhone}
                    />
                    <a
                      href="tel:+95699926676"
                      className="text-white text-decoration-none"
                    >
                    +956 99926676
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="text-center i p-2 rounded-circle"
                      icon={faEnvelope}
                    />
                    <a
                      href="mailto:info@goldenseashells.com"
                      className="text-white text-decoration-none"
                    >
                      INFO@GOLDENSEASHELLS.COM
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="text-center i p-2 rounded-circle"
                      icon={faLocationDot}
                    />
                    HAWALLY, BLOCK 1 STREET 17 OFFICE 6, (KUWAIT)
                  </li>
                </ul>
              </di>
            </div>
          </div>
        </div>
      </div>

      <div className="footer small-footer pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src={Logo} alt="" className="img-fluid" />
            </div>
            <div className="col-8" />
            <h5 className="text-light col-12 text-center">Links</h5>
            <div className="links col-12">
              <ul className="site-links list-unstyled lh-lg row">
                <li className="col-4">
                  <Link className="text-decoration-none" to="/">
                    HOME
                  </Link>
                </li>
                <li className="col-4">
                  <Link className="text-decoration-none" to="/about">
                    ABOUT US
                  </Link>
                </li>
                <li className="col-4">
                  <Link className="text-decoration-none" to="/destination">
                    DESTINATION
                  </Link>
                </li>
                <li className="col-4">
                  <Link className="text-decoration-none" to="/adventure">
                    ADVENTURE
                  </Link>
                </li>
                <li className="col-4">
                  <Link className="text-decoration-none" to="/feedback">
                    FEEDBACK
                  </Link>
                </li>
                <li className="col-4">
                  <Link className="text-decoration-none" to="/contact">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
            <div className="container">
              <hr className="mt-5 mb-5 text-center" />
            </div>
            <div className="col-8">
              <div className="contact">
                <h5 className="text-light">CONTACT</h5>
                <ul className="list-unstyled lh-lg">
                  <li>
                    <FontAwesomeIcon
                      className="text-center i p-2 rounded-circle"
                      icon={faPhone}
                    />
                    +956 99926676
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="text-center i p-2 rounded-circle"
                      icon={faEnvelope}
                    />
                    <a
                      href="mailto:info@goldenseashells.com"
                      className="text-white text-decoration-none"
                    >
                      INFO@GOLDENSEASHELLS.COM
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="text-center i p-2 rounded-circle"
                      icon={faLocationDot}
                    />
                    HAWALLY, BLOCK 1 STREET 17 OFFICE 6, (KUWAIT)
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="links">
                <h5 className="text-center">FOLLOW US</h5>
                <ul className="d-flex justify-content-center mt-1 list-unstyled">
                  <li>
                    <a href="https://m.facebook.com/goldenseashells/">
                      <FontAwesomeIcon
                        className="text-center text-white i p-2 rounded-circle"
                        icon={faFacebook}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Goldens_Tourism">
                      <FontAwesomeIcon
                        className="text-center text-white i p-2 rounded-circle"
                        icon={faTwitter}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/goldens_tourism/">
                      <FontAwesomeIcon
                        className="text-center text-white i p-2 rounded-circle"
                        icon={faInstagram}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copy-right pt-3 pb-3 text-center text-black">
        <p>
          &copy; 2023 Golden seashell <sup>TM</sup>. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
