// Images
import santorini from "../../imgs/destination-santorini.png";
import mauritius from "../../imgs/destination-mauritius.png";
import maldives from "../../imgs/destination-maldives.png";
// Components
import DestinationCard from "../DestinationCard/DestinationCard";

const SmallDestination = () => {
  return (
    <div className="small-destination mb-5 mt-5">
      <div className="container">
        <div className="row justify-content-start justify-content-lg-between">
          <DestinationCard className="col-4" countyName="Maldives" image={maldives} />
          <DestinationCard className="col-4" countyName="Mauritius" image={mauritius} />
          <DestinationCard className="col-4" countyName="Santorini" image={santorini} />
        </div>
      </div>
    </div>
  );
};

export default SmallDestination;
