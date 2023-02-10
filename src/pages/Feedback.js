import "./feedback.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// OWL Librar
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// Components
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";
import Partners from "../components/Partners/Partners";

const options = {
  loop: true,
  rtl: true,
  nav: false,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    992: {
      items: 2,
      margin: 80
    },
    1200: {
      items: 2,
      margin: 60
    },
    1400: {
      items: 2,
      margin: 240
    },
  },
};

const Feedback = () => {
  return (
    <>
    <Helmet>
      <title>Feedback</title>
    </Helmet>
    <Navigationbar/>
    <Landing landingTitle="feedback" />
      <div className="feedback mt-5">
        <div className="container">
          <div className="feedback-order mb-3 d-flex flex-column align-items-end">
            <select className="text-center" name="order" id="order">
              <option value="Newest">Newest first</option>
              <option value="Oldest">Oldest first</option>
            </select>
          </div>

          <div className="feedback-slider">
            <OwlCarousel {...options}>
              <div className="feedback-card p-4 owl-card wow fadeInRight">
                <div className="rate-section rate-stars mb-4 d-flex justify-content-between">
                  <h2>Maldives</h2>
                  <div className="starts">
                    <FontAwesomeIcon
                      className="text-center p-2 rounded-circle"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-center p-2 rounded-circle"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-center p-2 rounded-circle"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-center p-2 rounded-circle"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-center p-2 rounded-circle"
                      icon={faStar}
                    />
                  </div>
                </div>
                <div className="rate-section">
                  <p className="rate-comment pb-4 text-white">
                    أحلى ترتيب عشته من طرف الشركة وتعامل راقي من الشركة وسهولة
                    في التواصل تقييمي للشركة أكثر من خمس نجوم
                  </p>
                </div>
                <h2 className="rate-person">Khalid Alhosani</h2>
              </div>

              <div className="feedback-card p-4 owl-card wow fadeInRight">
                <div className="rate-section rate-stars mb-4 d-flex justify-content-between">
                  <h2>Maldives</h2>
                  <div className="starts">
                    <FontAwesomeIcon
                      className="text-center p-2 rounded-circle"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-center p-2 rounded-circle"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-center p-2 rounded-circle"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-center p-2 rounded-circle"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-center p-2 i rounded-circle"
                      icon={faStar}
                    />
                  </div>
                </div>
                <div className="rate-section">
                  <p className="rate-comment pb-4 text-white">
                    رحله جدا جميله و بو عوض انسان جدا محترم و اسلوبه راقي
                    بالكلام و يعطيك كل شي عن الحجز بالتفصيل و للامانه الباكيج
                    الي سواه لي جدا جبار و ما حصلت مثل هالعرض باي مكان و انصح اي
                    واحد ينوي يسافر للمالديف ان يحجز عن طريقه انسان جدا راقي
                    بالتعامل و يعطيك ابديت مستمر عن الحجوزات و الرحله
                  </p>
                </div>
                <h2 className="rate-person">khaled shamsaldeen</h2>
              </div>
            </OwlCarousel>
          </div>

          <div className="buttons d-flex flex-lg-row flex-column justify-content-between ps-5 pe-5 mt-5 mb-5">
            <Link className="button mb-5 m-lg-0 text-center" to="/contact">Contact Us</Link>
            <Link className="button text-center" to="/giveFeedback">Give Feedback</Link>
          </div>
        </div>
      </div>
      <Partners/>
      <Footer/>
    </>
  );
};

export default Feedback;
