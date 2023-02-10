import "./giveFeedback.css";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// Components
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";

const GiveFeedback = () => {
  return (
    <>
    <Navigationbar/>
    <Landing landingTitle="Give Feedback"/>
      <div className="give-feedback d-flex justify-content-center align-items-center pt-5 pb-5 w-100">
        <form className="give-card d-flex flex-column align-items-center gap-4 p-5">
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Destination"
          />
          <div className="rate-us w-100 d-flex text-white align-items-center justify-content-evenly">
            <label>Rate Us</label>
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
          <textarea name="description" id="description" placeholder="Description"/>
          <input
            type="text"
            name="client_name"
            id="client_name"
            placeholder="Client name"
          />
          <input type="submit" value="Save feedback" />
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default GiveFeedback;
