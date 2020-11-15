import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getAdhesives } from '../services/adhesives';

class SingleAdhesives extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      adhesives: [],
      selected: "",
      redirect: false
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

    return ( 
      <div className="container m-4 p-2">
        {glue.map(item => 
        <div key={item.name}>
          <h3>{item.name}</h3>
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
