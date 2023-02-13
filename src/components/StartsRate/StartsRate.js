import "./startsRate.css";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StartsRate = ({
  ratedStart5,
  ratedStart4,
  ratedStart3,
  ratedStart2,
  ratedStart1,
}) => {
  return (
    <div className="starts text-white">
      <FontAwesomeIcon
        className={`text-center p-2 rounded-circle ${ratedStart5} ${ratedStart4} ${ratedStart3} ${ratedStart2} ${ratedStart1}`}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`text-center p-2 rounded-circle ${ratedStart5} ${ratedStart4} ${ratedStart3} ${ratedStart2}`}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`text-center p-2 rounded-circle ${ratedStart5} ${ratedStart4} ${ratedStart3}`}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`text-center p-2 rounded-circle ${ratedStart5} ${ratedStart4}`}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`text-center p-2 rounded-circle ${ratedStart5}`}
        icon={faStar}
      />
    </div>
  );
};

export default StartsRate;
