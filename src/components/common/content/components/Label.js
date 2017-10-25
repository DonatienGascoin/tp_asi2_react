import React, { Component } from 'react';

class Label extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
    let render_visual;
    switch(this.props.onlyContent){
        case true:
        render_visual=(
            <div>
                <h5>Id : {this.props.id} Title : {this.props.title}</h5>        
            </div>
            );
    break;
    case false:
          render_visual=(<div></div>);
    break;
          
    }   

    return (
        <div className="thumbnail" style={{border:"none"}}>
            {render_visual}
        </div>            
    );
  }
}

export default Label;