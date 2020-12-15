import React from 'react';

const Equipment = () => {
  return ( 
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>How we make our hot melts...</h4>
          <h5>Hot melt extrusion using an underwater pelletizing system for pellet production</h5>
          <p>"Gala Underwater Pelletizing Systems for HMA production are designed to be cost-effective at pellet rates up to 4,550 kg/h (10,031 lb/hr). The typical Gala HMA production System, downstream of the customer’s  vessel or extruder, includes an optional booster pump, melt pump, screen changer, melt cooler/hot oil system, polymer diverter valve with side discharge, water box by-pass system, underwater pelletizer, tempered water system, centrifugal dryer, and process control system for hot melt extrusion." As said from Gala's site.</p>
          <img src="images/hotmelt-pellets.png" alt="hotmelt pellets" width="40%" />
          <img src="images/underwaterpelletizer1.jpg" alt="pelletizer" width="50%"/>
          <img src="images/underwaterpelletizer2.jpg" alt="pelletizer" width="50%"/>
          <p></p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Our salesmen are trained in the adhesives we use, as well as the equipment you use. If you need a unit or a spare part to keep quality running smoothly, we can assist.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Hot Melt Units</th>
                <th>Filters / Pumps</th>
                <th>Cleaning Kits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="images/hotmeltunit.jpg" alt="unit" width="100%"/></td>
                <td><img src="images/filterpumps.jpg" alt="filter" width="100%"/></td>
                <td><img src="images/cleaningkits.jpg" alt="cleaning kit" width="100%"/></td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Hoses</th>
                <th>Nozzles</th>
                <th>RTD Sensors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="images/hoses.jpg" alt="hose" width="100%"/></td>
                <td><img src="images/nozzels.jpg" alt="nozzles" width="100%"/></td>
                <td><img src="images/rtdsensors.jpg" alt="sensors" width="100%"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   );
}
 
export default Equipment;