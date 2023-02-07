import "./destinationCard.css";
import { Link } from "react-router-dom";

const DestinationCard = ({ image, countyName }) => {
  return (
      <div className="my-card text-center col-lg-4 col-md-6">
        <img alt="" className="img" src={image} />
        <Link to="#">
          <h5 class="text-white">{countyName}</h5>
        </Link>
      </div>
  );
};

export default DestinationCard;
