import React, { Component } from 'react';

class Label extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() { 
    return (
        <div className="thumbnail" style={{border:"none"}}>
            <h3>{this.props.title} </h3>
            <h5>{this.props.txt} </h5>        
        </div>            
    );
  }
}

export default Label;