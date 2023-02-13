import "./destination.css";
import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
// Components
import DestinationCard from "../components/DestinationCard/DestinationCard";
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";
// Images
import maldives from "../imgs/destination-maldives.png";
import mauritius from "../imgs/destination-mauritius.png";
import santorini from "../imgs/destination-santorini.png";
import seychelles from "../imgs/destination-seychelles.png";
import mykonos from "../imgs/destination-mykonos.png";
import thailand from "../imgs/destination-thailand.png";
import abu_Dhabi from "../imgs/destination-Abu_Dhabi.png";
import amsterdam from "../imgs/destination-amsterdam.png";
import bahamas from "../imgs/destination-bahamas.png";
import cairo from "../imgs/destination-cairo.png";
import bodrum from "../imgs/destination-bodrum.png";
import bali from "../imgs/destination-bali.png";
import dubai from "../imgs/destination-dubai.png";
import georgia from "../imgs/destination-georgia.png";
import kandy from "../imgs/destination-kandy.png";
import lake_como from "../imgs/destination-lake_como.png";
import london from "../imgs/destination-london.png";
import marbella from "../imgs/destination-marbella.png";
import melbourne from "../imgs/destination-melbourne.png";
import miami from "../imgs/destination-miami.png";
import moscow from "../imgs/destination-moscow.png";
import mumbai2 from "../imgs/destination-mumbai2.png";
import oslo from "../imgs/destination-oslo.png";
import paris from "../imgs/destination-paris.png";
import rome from "../imgs/destination-rome.png";
import san_francisco from "../imgs/destination-san_francisco.png";
import singapore from "../imgs/destination-singapore.png";

const Destination = () => {
  const [openMoreDestinations, setMoreDestinations] = useState("");
  const [viewWord, setviewWord] = useState("VIEW");
  return (
    <>
      <Helmet>
        <title>Destinations</title>
      </Helmet>
      <ScrollToTop />
      <Navigationbar />
      <Landing landingTitle="Destinations" />
      <div className="destinationP pt-5">
        <div className="container">
          <h1 className="text-black main-btn text-center">
            START PLANNING YOUR ADVENTURE
          </h1>

          <div className="small-destination mb-5 mt-5">
            <div className="row justify-content-start">
              <DestinationCard countyName="Maldives" image={maldives} />
              <DestinationCard countyName="Seychelles" image={seychelles} />
              <DestinationCard countyName="Mauritius" image={mauritius} />
              <DestinationCard countyName="Santorini" image={santorini} />
              <DestinationCard countyName="Mykonos" image={mykonos} />
              <DestinationCard countyName="Thailand" image={thailand} />
              <DestinationCard countyName="Abu Dhabi" image={abu_Dhabi} />
              <DestinationCard countyName="Amsterdam" image={amsterdam} />
              <DestinationCard countyName="Bahamas" image={bahamas} />
              <DestinationCard countyName="Bali" image={bali} />
              <DestinationCard countyName="Bodrum" image={bodrum} />
              <DestinationCard countyName="Cairo" image={cairo} />
            </div>
          </div>

          <h2
            className="text-black main-btn view-more"
            onClick={() => {
              if (openMoreDestinations === "") {
                setMoreDestinations("open");
                setviewWord("HIDE");
              } else {
                setMoreDestinations("");
                setviewWord("VIEW");
              }
            }}
          >
            {viewWord} MORE DISTENATIONS
          </h2>

          <div
            className={`small-destination more-destinations ${openMoreDestinations} mb-5 mt-5`}
          >
            <div className="row justify-content-start">
              <DestinationCard countyName="Dubai" image={dubai} />
              <DestinationCard countyName="Georgia" image={georgia} />
              <DestinationCard countyName="Kandy" image={kandy} />
              <DestinationCard countyName="Lake Como" image={lake_como} />
              <DestinationCard countyName="london" image={london} />
              <DestinationCard countyName="Marbella" image={marbella} />
              <DestinationCard countyName="Melbourne" image={melbourne} />
              <DestinationCard countyName="Miami" image={miami} />
              <DestinationCard countyName="Moscow" image={moscow} />
              <DestinationCard countyName="Mumbai" image={mumbai2} />
              <DestinationCard countyName="Oslo" image={oslo} />
              <DestinationCard countyName="Paris" image={paris} />
              <DestinationCard countyName="Rome" image={rome} />
              <DestinationCard
                countyName="San Francisco"
                image={san_francisco}
              />
              <DestinationCard countyName="Singapore" image={singapore} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Destination;
