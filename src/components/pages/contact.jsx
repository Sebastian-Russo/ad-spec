import React from 'react';
import './contact.css'

const Contact = () => {
  return ( 
    <div className="container">
      <h3>Contact Adhesives Specialists</h3>
      <ul>
        <li>Any questions?</li>
        <li>Would you like to place an order?</li>
        <li>Would you like to set up a meeting for one of our sales representatives to come visit your manucaturing plant and determine to how to improve upon your adhesive use?</li>
        <li>Would you like a sales representative to provide a free sample?</li>
      </ul>
      <h4>Contact us:</h4>
      <ul>
        <li>Phone : 1-800-275-7006</li>
        <li>Fax : 610-266-8957</li>
        <li>Email: <a href="mailto:customerservice@adspecinc.com">customerservice@adspecinc.com</a></li>
        <li>Mailing Address:</li>
        <li>Adhesives Specialists Inc.</li>
        <li>739 Roble Road</li>
        <li>Allentown, PA 18109</li>
        </ul>
      <div>
        <h6>Connect with us: </h6>
        <a href="https://www.linkedin.com/company/adhesives-specialists/" target="_blank"><i class="fab fa-linkedin fa-2x m-2"></i></a>
        <a href="https://www.facebook.com/adhesivesspecialistsinc" target="_blank"><i class="fab fa-facebook-square fa-2x m-2"></i></a>
        <a href="mailto:customerservice@adspecinc.com"><i class="fas fa-envelope-square fa-2x m-2"></i></a>
      </div>
    </div>
   );
}
 
export default Contact;