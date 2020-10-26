import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAdhesives } from '../../services/adhesives';

class Hotmelt extends Component {
  state = { 
    selected: '',
    adhesives: []
  }

  componentDidMount() {
    this.setState({ adhesives: getAdhesives() })
  }
  
  handleClick = name => {
    console.log('clicked', name)
    this.setState({ selected: name })
  }

  render() { 

    const adhesive = this.state.adhesives.map(adhesive => adhesive)
    console.log(adhesive)

    return ( 
    <div className="container">
      <h3>Hot Melt Adhesives</h3>
      <table className="table">
        <thead>
          <tr>
            
            <th><Link to={"/hotmelt/:sm3150"}>SM3150</Link></th>
            <th onClick={() =>this.handleClick('SM7834')}>SM7834</th>
            <th onClick={() =>this.handleClick('SM1523')}>SM1523</th>
          </tr>
        </thead>
            <tbody>
              <tr>
              <td>Metallocene <br/>Case/Carton Seal</td>
              <td>Premium Metallocene <br/>Case/Carton Seal</td>
              <td>Metallocene Hybrid <br/>Case/Carton Seal</td>
              </tr>
            </tbody>
            <thead>
          <tr>
            <th onClick={() =>this.handleClick('SM1831')}>SM1831</th>
            <th onClick={() =>this.handleClick('HM8020')}>HM8020</th>
            <th onClick={() =>this.handleClick('MH980')}>HM980</th>
          </tr>
        </thead>
            <tbody>
              <tr>
              <td>Metallocene Hybrid<br/>Low Temp</td>
              <td>High Temp – EVA <br/>Case/Carton Seal</td>
              <td>High Temp – EVA <br/>Wax Box Case Seal</td>
              </tr>
            </tbody>
          <thead>
          <tr>
            <th onClick={() =>this.handleClick('HM4500')}>HM4500</th>
            <th onClick={() =>this.handleClick('HM2505')}>HM2505</th>
            <th onClick={() =>this.handleClick('HM3060')}>HM3060</th>
          </tr>
        </thead>
            <tbody>
              <tr>
              <td>Low-Temp – EVA <br/>High Heat Resistant</td>
              <td>Low-Temp – EVA <br/>Premium Case Seal</td>
              <td>Low-Temp – EVA <br/>Case/Carton Seal</td>
              </tr>
            </tbody>
      </table>
      <p>Seal Tite – Ethylene Vinyl Acetate – EVA based hot melts are the most widely used form of Hot Melt and are an economical option for case sealing applications. Adhesives Specialists is known for having the highest quality EVA Hot Melts – for the lowest price in the industry.</p>
      <p>Superior Melt – Metallocene based hot melts are the highest quality adhesives used in a broad range of applications. The benefits of Metallocenes are clean running and char resistant which reduces down time and eliminates replacement parts.</p>
    </div>

     );
  }
}
 
export default Hotmelt;

