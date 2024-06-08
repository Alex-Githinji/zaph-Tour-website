import react from "react";
import { Link } from "react-router-dom";

const Destination = ({
  image,
  Destinations,
  Description,
  pricePerGroup,
  pricePerperson,
}) => {
  return (
    <div className="destination-wrapper">
      <div className="wrapper-body">
        <img src={image} alt="" />

        <h2>{Destinations}</h2>
        <p>{Description}</p>
        <span>{pricePerperson}</span>
        <p>{pricePerGroup}</p>
        <button>Book Tour</button>
      </div>
    </div>
  );
};

export default Destination;
