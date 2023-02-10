import "./giveFeedback.css";
import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
// Font Awesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// Components
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";

const GiveFeedback = () => {
  const [ratedStart1, setRatedStart1] = useState("");
  const [ratedStart2, setRatedStart2] = useState("");
  const [ratedStart3, setRatedStart3] = useState("");
  const [ratedStart4, setRatedStart4] = useState("");
  const [ratedStart5, setRatedStart5] = useState("");
  return (
    <>
      <Navigationbar />
      <Landing landingTitle="Give Feedback" />
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
                onClick={() => {
                  ratedStart1 === ""
                    ? setRatedStart1("yellow-star")
                    : setRatedStart1("");
                  setRatedStart2("");
                  setRatedStart3("");
                  setRatedStart4("");
                  setRatedStart5("");
                }}
                className={`text-center p-2 rounded-circle ${ratedStart1} ${ratedStart2} ${ratedStart3} ${ratedStart4} ${ratedStart5}`}
                icon={faStar}
              />
              <FontAwesomeIcon
                onClick={() => {
                  ratedStart2 === ""
                    ? setRatedStart2("yellow-star")
                    : setRatedStart2("");
                  setRatedStart1("");
                  setRatedStart3("");
                  setRatedStart4("");
                  setRatedStart5("");
                }}
                className={`text-center p-2 rounded-circle ${ratedStart2} ${ratedStart3} ${ratedStart4} ${ratedStart5}`}
                icon={faStar}
              />
              <FontAwesomeIcon
                onClick={() => {
                  ratedStart3 === ""
                    ? setRatedStart3("yellow-star")
                    : setRatedStart3("");
                  setRatedStart1("");
                  setRatedStart2("");
                  setRatedStart4("");
                  setRatedStart5("");
                }}
                className={`text-center p-2 rounded-circle  ${ratedStart3} ${ratedStart4} ${ratedStart5}`}
                icon={faStar}
              />
              <FontAwesomeIcon
                onClick={() => {
                  ratedStart4 === ""
                    ? setRatedStart4("yellow-star")
                    : setRatedStart4("");
                  setRatedStart1("");
                  setRatedStart2("");
                  setRatedStart3("");
                  setRatedStart5("");
                }}
                className={`text-center p-2 rounded-circle ${ratedStart4} ${ratedStart5}`}
                icon={faStar}
              />
              <FontAwesomeIcon
                onClick={() => {
                  ratedStart5 === ""
                    ? setRatedStart5("yellow-star")
                    : setRatedStart5("");
                  setRatedStart1("");
                  setRatedStart2("");
                  setRatedStart3("");
                  setRatedStart4("");
                }}
                className={`text-center p-2 rounded-circle ${ratedStart5}`}
                icon={faStar}
              />
            </div>
          </div>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          />
          <input
            type="text"
            name="client_name"
            id="client_name"
            placeholder="Client name"
          />
          <input type="submit" value="Save feedback" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default GiveFeedback;
