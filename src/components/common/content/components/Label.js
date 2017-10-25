import React, { Component } from 'react';

class Label extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() { 
    return (
        <div className="thumbnail" style={{border:"none"}}>
            <h5>Id : {this.props.id} Title : {this.props.title}</h5>        
        </div>            
    );
  }
}

export default Label;