import { Link } from "react-router-dom";
import "./trips.css"
import kenya1 from "./images/kenya1.jpg"

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
            <img src={kenya1} alt="" />
            
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
            <img src={kenya1} alt="" />
        
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
            <img src={kenya1} alt="" />
           
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
            <img src={kenya1} alt="" />
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
            <img src={kenya1} alt="" />
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
    </div>
   
 
  </section>
    
  )
}


export default Trips;