import "./partners.css";
import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Images Of Upper Row
import up1 from "../../imgs/partners-up-1.png";
import up18 from "../../imgs/partners-up-18.png";
import up2 from "../../imgs/partners-up-2.png";
import up21 from "../../imgs/partners-up-21.png";
import up22 from "../../imgs/partners-up-22.png";
import up23 from "../../imgs/partners-up-23.png";
import up3 from "../../imgs/partners-up-3.png";
import up4 from "../../imgs/partners-up-4.png";
import up5 from "../../imgs/partners-up-5.png";
import up6 from "../../imgs/partners-up-6.png";
import up7 from "../../imgs/partners-up-7.png";

// Images Of Lower Row
import dow10 from "../../imgs/partners-down-10.png";
import down11 from "../../imgs/partners-down-11.png";
import down12 from "../../imgs/partners-down-12.png";
import down13 from "../../imgs/partners-down-13.png";
import down14 from "../../imgs/partners-down-14.png";
import dow15 from "../../imgs/partners-down-15.png";
import down16 from "../../imgs/partners-down-16.png";
import down17 from "../../imgs/partners-down-17.png";
import down19 from "../../imgs/partners-down-19.png";
import dow20 from "../../imgs/partners-down-20.png";
import down8 from "../../imgs/partners-down-8.png";
import down9 from "../../imgs/partners-down-9.png";

const options = {
  loop: true,
  rtl: true,
  margin: 10,
  nav: false,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    320: {
      items: 2,
    },
    460: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 8,
    },
  },
};

export class DestinationSlider extends Component {
  render() {
    return (
      <div className="partners pt-5 pb-5">
        <h1 className="title mb-4 main-btn text-black">PARTNERS</h1>
        <div className="container">
          <div className="up">
            <OwlCarousel {...options}>
              <div
                className="owl-card text-center wow fadeInRight"
                data-wow-delay="0.5s"
              >
                <img src={up1} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInDown"
                data-wow-delay="0.5s"
              >
                <img src={up18} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={up2} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={up21} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={up22} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={up23} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={up3} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={up4} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={up5} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={up6} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={up7} alt="" />
              </div>
            </OwlCarousel>
          </div>

          <div className="down">
            <OwlCarousel {...options}>
              <div
                className="owl-card text-center wow fadeInRight"
                data-wow-delay="0.5s"
              >
                <img src={dow10} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInDown"
                data-wow-delay="0.5s"
              >
                <img src={down11} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img alt="" src={down12} />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={down13} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={down14} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={dow15} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={down16} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={down17} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={down19} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={dow20} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={down8} alt="" />
              </div>
              <div
                className="owl-card text-center wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <img src={down9} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationSlider;
