import "./destination.css";
import { Link } from "react-router-dom";
import kenya from "./images/kenya.jpg";
import Destination from "./Destination";

const Destinations = () => {
  return (
    <section>
      <div className="destination-banner">
        <h1>Destinations available for our customers</h1>
        <p>Explore the world with us</p>
      </div>
      <div className="destination">
        <div className="destination-body">
          <Destination
            image={kenya}
            Destinations="Mt Kenya"
            Description="Mt kenya is a beartiful place where you can get better experience The unique shape of the Safari Tents stung along a ridge above the river and designed to make the most of the panoramic views with each tent sitting on a raised platform "
            pricePerperson="single person:Ksh 17,000"
            pricePerGroup=" A group of people ksh 36,000"
          />
        </div>
        <div className="destination-body">
          <Destination
            image={kenya}
            Destinations="Mt Ruwenzori"
            Description="The unique shape of the Safari Tents stung along a ridge above the river and designed to make the most of the panoramic views with each tent sitting on a raised platform. Mahali Mzuri the Maasai community experiences offer guests the chance to visit one of the local villages "
            pricePerperson="single person ksh 17,000"
            pricePerGroup=" A group of people ksh 36,000"
          />
        </div>
        <div className="destination-body">
          <Destination
            image={kenya}
            Destinations="lake Nakuru"
            Description="The unique shape of the Safari Tents stung along a ridge above the river and designed to make the most of the panoramic views with each tent sitting on a raised platform. Mahali Mzuri the Maasai community experiences offer guests the chance to visit one of the local villages "
            pricePerperson="single person kSH 17,000"
            pricePerGroup=" A group of people Ksh 36,000"
          />
        </div>
        <div className="destination-body">
          <Destination
            image={kenya}
            Destinations="Tsavo National park"
            Description="The unique shape of the Safari Tents stung along a ridge above the river and designed to make the most of the panoramic views with each tent sitting on a raised platform. Mahali Mzuri the Maasai community experiences offer guests the chance to visit one of the local villages e"
            pricePerperson="single person ksh 17,000"
            pricePerGroup=" A group of people Ksh 36,000"
          />
        </div>
        <div className="destination-body">
          <Destination
            image={kenya}
            Destinations="Nairobi national park"
            Description="The unique shape of the Safari Tents stung along a ridge above the river and designed to make the most of the panoramic views with each tent sitting on a raised platform. Mahali Mzuri the Maasai community experiences offer guests the chance to visit one of the local villages "
            pricePerperson="single person 17,000"
            pricePerGroup=" A group of people ksh 36,000"
          />
        </div>
        <div className="destination-body">
          <Destination
            image={kenya}
            Destinations="Coastal region Kenya"
            Description="Mt kenya is a beartiful place where you can get better experience"
            pricePerperson="single person ksh 17,000"
            pricePerGroup=" A group of people ksh 36,000"
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
