import { Link } from "react-router-dom";
import "./trips.css"
import kenya1 from "./images/kenya1.jpg"
import eco from "./images/eco.jpg"
import family from "./images/family.jpg"
import coast from "./images/coast.jpg"
import honeymoon from "./images/honeymoon.jpg"
import Vacations from "./images/vacations.jpg"
import beach from "./images/beach.jpg"

const Trips = () => {
  return( 
  <section>
      <div className="trips-section">
        <h1>Explore Our Trips</h1>
        <h3>Discover the world with us</h3>
        <p>We provide various services to our customers scroll down to select any service you want to enjoy with out team</p>
      </div> 


<div className="trip">
      <div class="trips"> 
        <div class="trips-img">
            <img src={honeymoon} alt="" />
            
        </div>
        <div class="trips-listing">
            <div class="content">
                <h1 class="name">Honey Moon <s></s></h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                <p class="price">ksh 35,000</p>
                <p>Offer -10%</p>
                <div class="btn-and-rating-box">
                    
                    <button class="btn">Book Here</button>
                </div>
            </div>
        </div>
        </div>

        <div class="trips"> 
        <div class="trips-img">
            <img src={coast} alt="" />
            
        </div>
        <div class="trips-listing">
            <div class="content">
                <h1 class="name">Costal Travels<s></s></h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                <p class="price">ksh 35,000</p>
                <p><b>Offer -35%</b></p>
                <div class="btn-and-rating-box">
                    
                    <button class="btn">Book Here</button>
                </div>
            </div>
        </div>
        </div>

        <div class="trips"> 
        <div class="trips-img">
            <img src={eco} alt="" />
            
        </div>
        <div class="trips-listing">
            <div class="content">
                <h1 class="name">Eco Tours<s></s></h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                <p class="price">ksh 35,000</p>
                <div class="btn-and-rating-box">
                    
                    <button class="btn">Book Here</button>
                </div>
            </div>
        </div>
        </div>
        <div class="trips"> 
        <div class="trips-img">
            <img src={coast} alt="" />
            
        </div>
        <div class="trips-listing">
            <div class="content">
                <h1 class="name">Costal Travels<s></s></h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                <p class="price">ksh 35,000</p>
                <div class="btn-and-rating-box">
                    
                    <button class="btn">Book Here</button>
                </div>
            </div>
        </div>
        </div>

        <div class="trips"> 
        <div class="trips-img">
            <img src={family} alt="" />
            
        </div>
        <div class="trips-listing">
            <div class="content">
                <h1 class="name">FamilyTour<s></s></h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                <p class="price">ksh 35,000</p>
                <p><b>Offer -32%</b></p>
                <div class="btn-and-rating-box">
                    
                    <button class="btn">Book Here</button>
                </div>
            </div>
        </div>
        </div>

        <div class="trips"> 
        <div class="trips-img">
            <img src={Vacations} alt="" />
            
        </div>
        <div class="trips-listing">
            <div class="content">
                <h1 class="name">Luxury Vacations<s></s></h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                <p class="price">ksh 35,000</p>
                <p><b>Offer -30%</b></p>
                <div class="btn-and-rating-box">
                    
                    <button class="btn">Book Here</button>
                </div>
            </div>
        </div>
        </div>

        <div class="trips"> 
        <div class="trips-img">
            <img src={beach} alt="" />
            
        </div>
        <div class="trips-listing">
            <div class="content">
                <h1 class="name">Beach Holidays<s></s></h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                <p class="price">ksh 35,000</p>
                <p><b>Offer -15%</b></p>
                <div class="btn-and-rating-box">
                    
                    <button class="btn">Book Here</button>
                </div>
            </div>
        </div>
        </div>

        <div class="trips"> 
        <div class="trips-img">
            <img src={kenya1} alt="" />
            
        </div>
        <div class="trips-listing">
            <div class="content">
                <h1 class="name">Culinary Tours<s></s></h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                <p class="price">ksh 35,000</p>
                <div class="btn-and-rating-box">
                    
                    <button class="btn">Book Here</button>
                </div>
            </div>
        </div>
        </div>

    </div>


    
    

                 

    
    
  
 
  </section>
    
  )
}


export default Trips;