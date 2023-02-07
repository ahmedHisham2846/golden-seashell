import "./about.css";
import { Link } from "react-router-dom";
// Images
import about2 from "../../imgs/abut2.png";
import about1 from "../../imgs/about1.png";

const About = () => {
  return (
    <div className="about pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="left-side col-lg-6 col-md-12  col-sm-12 pb-5">
            <h1>
              ABOUT <span> US</span>{" "}
            </h1>
            <p>
              Golden Seashell is also specialized in arranging a variety of
              services such as tickets, hotels, and tourism services around the
              world. We trusted in customer satisfaction, with keep this in our
              mind today we can come in front of our customers with in hand a
              compact tour service. Our distinguished service made us always be
              admired and appreciated by you, in addition to the favorite
              companies, where we served more than 100,000 customers from the
              GCC.
            </p>
            <Link to="/about" className="main-btn more text-decoration-none">
              READ MORE
            </Link>
          </div>
          <div className="right-side col-lg-6 col-md-12 col-sm-12">
            <img alt="" src={about2} />
            <img alt="" src={about1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
