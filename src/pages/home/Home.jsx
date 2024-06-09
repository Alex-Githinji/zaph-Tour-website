import { Link } from "react-router-dom";
import safari from "./images/safari.jpg";
import menu from "./images/menu.jpg";
import elephant from "./images/elephant.jpg";
import "../home/home.css";
import tsavo from "./images/tsavo.jpg";
import coast from "./images/coast.jpg";
import nakuru from "./images/nakuru.jpg";
import kenya1 from "./images/kenya1.jpg";
import testimony from "./images/testimony.jpg";
import testimony1 from "./images/testimony1.jpg";
import back from "./images/back.jpg";

const Home = () => {
  return (
    <section>
      <div className="body">
        <h1>Your Journey Your Story ,Zaph tours offers the best Adventures</h1>
        <p>choose your favourite destination</p>
        <button>Explore More</button>
      </div>
      <div className="menu-title">
        <h1 className="stroke-text">Featured Destinations</h1>
        {/* <p>Explore with us anytime you want</p> */}
      </div>

      <div className="menu">
        <div className="container">
          <img className="image" src={kenya1} alt="" />
          <div className="menu-con">
            <h1>Mt Kenya</h1>
            <h3>UNFORGETTABLE ADVENTURE</h3>

            <p>
              Explore Kenyas diverse cities, from bustling metropolitan business
              hubs to cities by the lake shore. Journey through each unique
              cityscape to experience the vibrant urban life of Kenya. Plus,
              don’t miss Nairobi City’s remarkable feature—a park nestled within
              the heart of the city.
            </p>
          </div>
        </div>

        <div className="container alternate">
          <img className="image" src={nakuru} alt="" />
          <div className="menu-con">
            <h1>Lake Nakuru</h1>
            <h3>Your Journey your Happiness</h3>

            <p>
              Explore Kenyas diverse cities, from bustling metropolitan business
              hubs to cities by the lake shore. Journey through each unique
              cityscape to experience the vibrant urban life of Kenya. Plus,
              don’t miss Nairobi City’s remarkable feature—a park nestled within
              the heart of the city.
            </p>
          </div>
        </div>
        <div className="container">
          <img className="image" src={tsavo} alt="" />
          <div className="menu-con">
            <h1>Tsavo National Park</h1>
            <h3>Your Journey our Happiness</h3>

            <p>
              Explore Kenyas diverse cities, from bustling metropolitan business
              hubs to cities by the lake shore. Journey through each unique
              cityscape to experience the vibrant urban life of Kenya. Plus,
              don’t miss Nairobi City’s remarkable feature—a park nestled within
              the heart of the city.
            </p>
          </div>
        </div>
        <div className="container alternate">
          <img className="image" src={coast} alt="" />
          <div className="menu-con">
            <h1>Costal Kenya</h1>
            <h3>Have Fun with Zaph Tours</h3>

            <p>
              Explore Kenyas diverse cities, from bustling metropolitan business
              hubs to cities by the lake shore. Journey through each unique
              cityscape to experience the vibrant urban life of Kenya. Plus,
              don’t miss Nairobi City’s remarkable feature—a park nestled within
              the heart of the city.
            </p>
          </div>
        </div>
        <div className="container">
          <img className="image" src={kenya1} alt="" />
          <div className="menu-con">
            <h1>Nairobi National park</h1>
            <h3>Have Fun with Zaph Tours</h3>

            <p>
              Explore Kenyas diverse cities, from bustling metropolitan business
              hubs to cities by the lake shore. Journey through each unique
              cityscape to experience the vibrant urban life of Kenya. Plus,
              don’t miss Nairobi City’s remarkable feature—a park nestled within
              the heart of the city.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="About-us">
          <div className="programs">
            <span class="stroke-text">About Us</span>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about-items">
          <img src={coast} alt="" />
          <h1>Explore more</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            pariatur quasi laudantium delectus commodi praesentium, ducimus
            impedit ad nemo maiores facere doloremque eligendi non. Suscipit
            velit voluptate corrupti deserunt officia.
          </p>
          <button>learn more</button>
        </div>
        <div className="about-items">
          <img src={kenya1} alt="" />
          <h1>Provide adventure Tours</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            pariatur quasi laudantium delectus commodi praesentium, ducimus
            impedit ad nemo maiores facere doloremque eligendi non. Suscipit
            velit voluptate corrupti deserunt officia.
          </p>
          <button>Learn more</button>
        </div>
        <div className="about-items">
          <img src={nakuru} alt="" />
          <h1>Best Safaris</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            pariatur quasi laudantium delectus commodi praesentium, ducimus
            impedit ad nemo maiores facere doloremque eligendi non. Suscipit
            velit voluptate corrupti deserunt officia.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <div>
        <div className="About-us">
          <div className="programs">
            <span class="stroke-text">Testimonial</span>
          </div>
        </div>
      </div>
      <div className="testimony">
        <div className="about-item">
          <img src={testimony} alt="" />
          <h1>Denzel lawrence</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            pariatur quasi laudantium delectus commodi praesentium, ducimus
            impedit ad nemo maiores facere doloremque eligendi non. Suscipit
            velit voluptate corrupti deserunt officia.
          </p>
        </div>

        <div className="about-item">
          <img src={testimony1} alt="" />
          <h1>Webster Ifedha</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            pariatur quasi laudantium delectus commodi praesentium, ducimus
            impedit ad nemo maiores facere doloremque eligendi non. Suscipit
            velit voluptate corrupti deserunt officia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
