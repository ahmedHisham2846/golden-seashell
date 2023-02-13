import "./aboutUs.css";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../components/ScrollToTop";
// Components
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";
// Images
import whatWe from "../imgs/what-we.png";
import goal from "../imgs/goal.png";
import mission from "../imgs/mission.png";
import vision from "../imgs/vision.png";

const AboutUs = () => {
  return (
    <>
    <Helmet>
      <title>About</title>
    </Helmet>
      <ScrollToTop />
    <Navigationbar />
    <Landing landingTitle="ABOUT us" />
      <div className="about-us pt-5 pb-5">
        <div className="container">
          <div className="what-we-do row justify-content-lg-start justify-content-center align-items-center">
            <div className="left-side col-12 col-lg">
              <h1>
                WHAT WE
                <span> DO?</span>
              </h1>
              <p className="pt-4">
                Our aim is to be an unparalleled tourism service provider by
                helping people to be smart and safe travel within their budget and
                satisfaction. We know that time is extremely valuable and our
                travel experts combine their travel knowledge with the expertise
                of our tour guides, by enabling these we give a plan to our
                customers while maintaining the importance of time and then enjoy
                an amazing travel experience by providing them with fair value
                against requested tourism services and full commitments of our
                promises. Our objective is to help the traveler to arrange their
                programs according to their budget and provide them with the best
                services while fully unwavering by our promises.
              </p>
            </div>
            <div className="right-side col-12 col-lg pt-3 mt-lg-5">
              <img alt="" src={whatWe} />
            </div>
            <div className="what-do-desc col-12">
              <p className="mt-2">
                Golden Seashell is also specialized in arranging a variety of
                services such as tickets, hotels, and tourism services around the
                world. We trusted in customer satisfaction, with keep this in our
                mind today we can come in front of our customers with in hand a
                compact tour service. Our distinguished service made us always be
                admired and appreciated by you, in addition to the favorite
                companies, where we served more than 100,000 customers from the
                GCC.
              </p>
              <p className="mt-2">
                We are committed to providing successful customer service. Our
                Mission is to be always at the forefront of our customers'
                favourite companies.
              </p>
            </div>
          </div>
          <hr />
          <div className="who-are-we">
            <h1 className="text-center mt-5">
              WHO ARE
              <span> WE?</span>
            </h1>
            <div className="row gap-5 justify-content-between align-items-start mt-5">
              <div className="my-card col-12 col-lg mb-2">
                <div className="parent text-center">
                  <img alt="" src={goal} />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mt-4">
                    Our
                    <span> Goal</span>
                  </h2>
                </div>
                <p className="mt-3 mb-5">
                  We are committed to providing successful customer service. Our
                  objective is to help the traveler to arrange their programs
                  according to their budget and provide them with the best
                  services while fully unwavering in our promises.
                </p>
              </div>
              <div className="my-card col-12 col-lg mb-2">
                <div className="parent text-center">
                  <img alt="" src={mission} />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mt-4">
                    Our
                    <span> Mission</span>
                  </h2>
                </div>
                <p className="mt-3 mb-5">
                  We know that time is extremely valuable and our travel experts
                  combine their travel knowledge with the expertise of our tour
                  guides, by enabling these we give a plan to our customers while
                  maintaining the importance of time and then enjoy an amazing
                  travel experience by providing them with fair value against
                  requested tourism services and full commitments of our promises.
                </p>
              </div>
              <div className="my-card col-12 col-lg mb-2">
                <div className="parent text-center">
                  <img alt="" src={vision} />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 className="mt-4">
                    Our
                    <span> Vision</span>
                  </h2>
                </div>
                <p className="mt-3 mb-5">
                  Our Mission is to be always at the forefront of our customers'
                  favourite companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
