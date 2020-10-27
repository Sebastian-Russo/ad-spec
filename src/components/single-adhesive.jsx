import React, { Component } from 'react';
import { getAdhesives } from '../services/adhesives';

class SingleAdhesives extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      adhesives: [],
      selected: ""
    }
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.setState({
      adhesives: getAdhesives(),
      selected: params
    })
  }
  
  render() { 
    const { adhesives, selected } = this.state;
    const glue = adhesives.filter(adhesive => adhesive.name === selected.id)

    console.log('glue', glue)

    return ( 
      <div className="container">
        {glue.map(item => 
        <div key={item.name}>
          <h3>{item.name}</h3>
          <img src={item.image} alt="adhesive"/>
          <div>Type: {item.type}</div>
          <div>Color: {item.color}</div>
          <div>Packaging: {item.packaging}</div>
          <div>Shelf life: {item['shelf life']}</div>
          <div>Advantages: {item.advantages}</div>
        </div>
        )}
      </div>  
    );
  }
}
 
export default SingleAdhesives;

// input/props - the id/name of adhesives
// output/event - any?