import "./contact.css"
import { FaPhoneFlip } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
      <section>
      <div class="section1-header1">
      <div class="container1">
        <h2>Contact Us</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div> 
    </div>
    
    <div class="container1">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-home"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>00100 Nairobi Kenya,<br/> Tom Mboya street, <br/>00344</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="FaPhoneFlip"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>+254-457-2321</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>zaph tour@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""></input>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""></input>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""></input>
            </div>
          </form>
        </div>
        
      </div>
    </div>

    <div className="contact-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8170711365874!2d36.82251487477744!3d-1.2836340987041666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1129d3e9e4a7%3A0xd7a2234ccaf4740e!2sTom%20Mboya%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1717828864273!5m2!1sen!2ske"width="650px" height="450" style={{border:20}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            
    </div>
    
      </section>
    
    </>
  );
};

export default Contact;
