import "./details.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// Components
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";
import SmallDestination from "../components/SmallDestination/SmallDestination";
// Images
import seychelles5 from "../imgs/seychelles5.png";
import seychelles4 from "../imgs/seychelles4.png";
import seychelles3 from "../imgs/seychelles3.png";
import seychelles2 from "../imgs/seychelles2.png";
import seychelles1 from "../imgs/seychelles1.png";

const Details = () => {
  return (
    <>
      <Helmet>
        <title>Destination Details</title>
      </Helmet>
      <Navigationbar />
      <Landing landingTitle={"DETAILS"} />
      <div className="country">
        <div className="container">
          <div className="country-content mt-5 mb-5 row justify-content-center justify-content-lg-start align-items-start">
            <div className="left-side col-12 col-lg">
              <h1>Seychelles</h1>
              <p>
                The Seychelles Island is in the western Indian Ocean with lush
                tropical vegetation, beautiful beaches, and a wide variety of
                marine life. Most popular places for visiting that are providing
                an impression of completeness that makes travelers more
                interested. Enjoy all the range of accommodations that
                Seychelles has to offer, from charming Creole guesthouses, and
                private hotels both large and small, to the magical experience
                of splendid five-star resorts and exquisite island hideaways. In
                Seychelles, the Pink Sand Beach in La Digue is the most
                beautiful beach. Two UNESCO Sites are for attracting people’s
                attention.
              </p>
            </div>
            <div className="right-side col-12 col-lg parent">
              <img alt="" src={seychelles1} className="mb-3" />
              <ul className="list-unstyled d-flex">
                <li>
                  <img alt="" src={seychelles1} />
                </li>
                <li>
                  <img alt="" src={seychelles2} />
                </li>
                <li>
                  <img alt="" src={seychelles3} />
                </li>
                <li>
                  <img alt="" src={seychelles4} />
                </li>
                <li>
                  <img alt="" src={seychelles5} />
                </li>
              </ul>
            </div>
            <div className="more-description col-12 mt-2">
              <p>
                The Rare Black Parrot is another important reason that
                photographers must visit this place. Seychelles is an exciting
                adventurous place. There are many compliments about the
                delicious traditional Seychelles food and the famous octopus
                curry and fresh seafood. A small area that offers you an
                exciting range of adventures. Diving is possible all year round
                but is governed by an island's position and the prevailing
                winds. The best time to take enjoyment of the inner and outer
                islands is in the calm period, that time the water temperature
                is good and offers excellent visibility. The Inner Islands’
                marine life has dazzling scenery no one can stop himself from
                seeing this scene. Everybody wants to be a part of this dazzling
                scenery.
              </p>
              <p>
                Seychelles has some of the richest fishing grounds in the world.
                Side by side one of the Best Scuba Diving Destinations is here.
                In Seychelles island, people come to celebrate their wedding and
                spend their honeymoon, and a perfect place for this purpose.
                Romance is as natural as the waves caressing the shores of a
                secret cove at midnight, love is in nature. Many more islands
                are there with their own specialties. People are going and
                enjoying an unseen part of nature. This place should in on every
                traveler’s list.
              </p>
              <Link
                className="main-btn more text-black text-decoration-none"
                to="#"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
          <h1 className="text-center pt-5">SIMILAR DESTINATION</h1>
          <SmallDestination />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
