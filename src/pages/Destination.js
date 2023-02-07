import "./destination.css";
import { Helmet } from "react-helmet-async";
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

const Destination = () => {
  return (
    <>
    <Helmet>
      <title>Destinations</title>
    </Helmet>
      <Navigationbar />
      <Landing landingTitle="Destinations" />
      <div className="destinationP pt-5">
        <div className="container">
          <h1 className="text-black main-btn text-center">START PLANNING YOUR ADVENTURE</h1>

          <div className="small-destination mb-5 mt-5">
            <div className="row justify-content-start justify-content-lg-between">
              <DestinationCard countyName="Maldives" image={maldives} />
              <DestinationCard countyName="Mauritius" image={mauritius} />
              <DestinationCard countyName="Santorini" image={santorini} />
              <DestinationCard countyName="Thailand" image={thailand} />
              <DestinationCard countyName="Mykonos" image={mykonos} />
              <DestinationCard countyName="Seychelles" image={seychelles} />
              <DestinationCard countyName="Abu Dhabi" image={abu_Dhabi} />
              <DestinationCard countyName="Amsterdam" image={amsterdam} />
              <DestinationCard countyName="Bahamas" image={bahamas} />
            </div>
          </div>

          <h2 className="text-black main-btn">VIEW MORE DISTENATIONS</h2>

          <div className="small-destination mb-5 mt-5">
            <div className="row justify-content-start justify-content-lg-between">
              <DestinationCard countyName="Maldives" image={maldives} />
              <DestinationCard countyName="Mauritius" image={mauritius} />
              <DestinationCard countyName="Santorini" image={santorini} />
              <DestinationCard countyName="Thailand" image={thailand} />
              <DestinationCard countyName="Mykonos" image={mykonos} />
              <DestinationCard countyName="Seychelles" image={seychelles} />
              <DestinationCard countyName="Abu Dhabi" image={abu_Dhabi} />
              <DestinationCard countyName="Amsterdam" image={amsterdam} />
              <DestinationCard countyName="Bahamas" image={bahamas} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Destination;
