import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>zaph Tours</h1>
      <div className="navbar">
        <li className="navbar-item">
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li className="navbar-item">
          {" "}
          <Link to="Destinations">Destinations</Link>{" "}
        </li>
        <li className="navbar-item">
          {" "}
          <Link to="Trips">Trips</Link>{" "}
        </li>
        <li className="navbar-item">
          {" "}
          <Link to="Contact Us">Contact</Link>{" "}
        </li>
      </div>
    </div>
  );
};

export default Header;
