import React from 'react';
import './about.css';

const About = () => {
  return ( 
    <div className="container">
      <h2>Adhesives Specialists, Inc.</h2>
      <div className="col about">
        <p>Adhesives Specialists was created in 1983 as one of many adhesive companies. As the company has grown, the family has grown too. Direct family, as well as employees treated like family, alike. Over time and the last 30 plus years "AdSpec" has thrived and continued to push forward with it's ingenuity and progressive desire to jump on new technology before it's common place. Several years back, we were one of the first to switch from conveyor belt to underwater extrusion for hot melt. Less than a quarter of the adhesives companies still exist when AdSpec started in 1983. The bigger competitors buy up the small ones over the years for a client list, but forget to give the personal attention an individual customer needs. That's our niche. Our sales team answers and takes care of you when there is an emergency, and you need more glue.</p>
      </div>
      <h3>Meet the family...</h3>

      <div className="col about">
        <h4>Steve Russo, Sr. - The Owner</h4>
        <img src="images/stevesr.jpeg" alt="person" width="35%" />
        <p>The founder and builder of the over 30 year old business.</p>
        <p>Born in Brookyn, first to go to college in the family. Majored in chemistry. Learned the adhesive business from the ground up. Went back for a masters in busienss. Then with his combine knowledge and determination, created Adhesives Specialists in 1983.</p>
      </div>

      <div className="col about">
        <h4>Steve Russo, Jr. - National Sales Manager</h4>
        <img src="images/stevejr.jpeg" alt="person" width="35%" />
        <p>National sales executive for almost 20 years. Tours the east coast from Maine to the Florida, as well as East coast to West coast. ALways speaking with purchasing and production managers on how to improve their adhesive uses.</p>
        <p>Groomed to be the sucecssor, in almost twenty years, has absored everythin his father has learned and taught him, and with a younger perspective, is taking the busienss into the future.</p>
        <p>Steven has a team of sales associates and manager's that report directly to him across the country.</p>
      </div>

      <div className="col about">
        <h4>Laurett Elfand - The Controller</h4>
        <img src="images/laurett.jpeg" alt="person" width="35%" />
        <p>From accounts payable, receiveable, and everything in between for almost 20 years, Laurett runs the team taking care of the interal business.</p>
        <p>From international purchasing decisions for raw materials and suppliers, to local suppliers and employement</p>
        <p>Laurett handles the internal team, drives purchasing decision, and her motivates and trains her team to be independent self starters in a growing business. </p>
      </div>

      <div className="col about">
        <h4>Jim - The Chemist</h4>
        <img src="images/chemist.png" alt="person" width="35%" />
        <p>He's been here from the start, and the owner's right hand man. Reverse engineers adhesive products, then builds them back up with improved efficiency and quality standards.</p>
        <p>Commands the labatory and oversees production in the plant.</p>
      </div>

      <div className="col about"></div>
    </div>
   );
}
 
export default About;