import "./destinationSlider.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Images
import Abu_Dhabi from "../../imgs/destination-Abu_Dhabi.png";
import mykonos from "../../imgs/destination-mykonos.png";
import seychelles from "../../imgs/destination-seychelles.png";
import santorini from "../../imgs/destination-santorini.png";
import mauritius from "../../imgs/destination-mauritius.png";
import maldives from "../../imgs/destination-maldives.png";

const options = {
  loop: true,
  rtl: true,
  margin: 10,
  nav: true,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    776: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

export class DestinationSlider extends Component {
  render() {
    return (
      <div class="destinations pt-5 pb-5">
        <h1 class="text-white text-center">
          EXPLORE <span>DESTINATION</span>
        </h1>
        <div class="container  pt-5">
          <OwlCarousel {...options}>
            <div
              className="owl-card text-center wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <img alt="" className="img" src={maldives} />
              <Link to="#">
                <h5 class="text-white">maldives</h5>
              </Link>
            </div>
            <div
              className="owl-card text-center wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <img alt="" className="img" src={mauritius} />
              <Link to="#">
                <h5 class="text-white">mauritius</h5>
              </Link>
            </div>
            <div
              className="owl-card text-center wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <img alt="" className="img" src={santorini} />
              <Link to="#">
                <h5 class="text-white">santorini</h5>
              </Link>
            </div>
            <div
              className="owl-card text-center wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <img alt="" className="img" src={seychelles} />
              <Link to="/details">
                <h5 class="text-white">seychelles</h5>
              </Link>
            </div>
            <div
              className="owl-card text-center wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <img alt="" className="img" src={mykonos} />
              <Link to="#">
                <h5 class="text-white">mykonos</h5>
              </Link>
            </div>
            <div
              className="owl-card text-center wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <img alt="" className="img" src={Abu_Dhabi} />
              <Link to="#">
                <h5 class="text-white">Abu Dhabi</h5>
              </Link>
            </div>
          </OwlCarousel>
        </div>

        <Link
          class="more main-btn text-decoration-none mt-5 mb-3 text-black"
          to="/destination"
        >
          VIEW MORE DISTENATIONS
        </Link>
      </div>
    );
  }
}

export default DestinationSlider;
