import "./contact.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
//Images
import saudiArabia from "../imgs/contact-saudiArabia.png";
import kuwait from "../imgs/contact-kuwait.png";
// Components
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Partners from "../components/Partners/Partners";
import Footer from "../components/Footer/Footer";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Navigationbar />
      <Landing landingTitle="CONTACT GOLDEN SEASHELL" />
      <div className="contactp mt-5">
        <div className="container">
          <div className="contact-content d-flex gap-3  justify-content-lg-between mb-5">
            <div className="contact-card">
              <h4 className="text-white text-center mb-4">send us a message</h4>
              <form className="d-flex flex-column gap-4" action="">
                <input type="text" placeholder="NAME" />
                <input type="email" placeholder="EMAIL" />
                <input type="text" placeholder="PHONE NUMBER" />
                <textarea placeholder="MESSAGE" />
                <input
                  className="main-btn text-black"
                  type="submit"
                  value="SUBMIT"
                />
              </form>
            </div>

            <div className="contact-all-data d-flex flex-column gap-4 text-white">
              <h4 className="text-center">contact us</h4>

              <div className="contact-data">
                <div className="data-title">Call Us</div>
                <div className="metadata">
                  <FontAwesomeIcon
                    className="text-center i p-2 rounded-circle"
                    icon={faPhone}
                  />
                  <span>+965 99926676</span>
                </div>
              </div>

              <div className="contact-data">
                <div className="data-title">Mail Us</div>
                <div className="metadata">
                  <FontAwesomeIcon
                    className="text-center i p-2 rounded-circle"
                    icon={faEnvelope}
                  />
                  <Link
                    className="text-decoration-none text-white"
                    to="mailto:info@goldenseashells.com"
                  >
                    INFO@GOLDENSEASHELLS.COM
                  </Link>
                </div>
              </div>

              <div className="contact-data">
                <div className="data-title">Locate Us</div>
                <div className="metadata">
                  <FontAwesomeIcon
                    className="text-center i p-2 rounded-circle"
                    icon={faLocationDot}
                  />
                  <span>HAWALLY, BLOCK 1 STREET 17 OFFICE 6, (KUWAIT)</span>
                </div>
              </div>

              <div className="contact-data">
                <div className="data-title">Follow Us</div>
                <div className="brands">
                  <FontAwesomeIcon
                    className="text-center i p-2 rounded-circle"
                    icon={faFacebook}
                  />
                  <FontAwesomeIcon
                    className="text-center i p-2 rounded-circle"
                    icon={faTwitter}
                  />
                  <FontAwesomeIcon
                    className="text-center i p-2 rounded-circle"
                    icon={faInstagram}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-content d-flex gap-5 justify-content-lg-between pt-5 mb-5">
            <div className="person-card text-center text-white mt-5">
              <h3>Mohammad Awadh</h3>
              <div className="person-position">
                Chief Executive Officer (CEO)
              </div>
              <img src={kuwait} alt="" />
            </div>

            <div className="person-card text-center text-white mt-5">
              <h3>Mohammed Derbas</h3>
              <div className="person-position">General Manager</div>
              <img src={kuwait} alt="" />
            </div>

            <div className="person-card text-center text-white mt-5">
              <h3>Ali Albattah</h3>
              <div className="person-position">Co-Founder</div>
              <img src={saudiArabia} alt="" />
            </div>
          </div>

          <div className="main-btn text-center end-text mb-5">
            <h4 className="text-white">
              Feel free to contact us about any inquiry
            </h4>
            <h4>You can find us on the web and social media</h4>
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
    </>
  );
};

export default Contact;
