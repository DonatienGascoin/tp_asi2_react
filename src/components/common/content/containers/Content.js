import React, { Component } from 'react'
import Label from '../components/Label'
import Visual from '../components/Visual'
import './content.css'


class Content extends React.Component{
  constructor(props) {
    super(props);
    this.getContentRender=this.getContentRender.bind(this);
  }

  getContentRender(){
    var result;
      switch(this.props.onlyContent){
        case true:
        result=[
            <div className="panel-body border" key={1}>
              <Visual 
                src={this.props.src} 
                type={this.props.type} 
              />
            </div>
        ]
        break;
        case false:
        result=[
              <div className="panel-body border" key={2}>
              <Visual 
                src={this.props.src} 
                type={this.props.type} 
              />
              <Label 
                id={this.props.id}
                title={this.props.title}
              />
            </div>
        ]
        break;  
        }
        return result;
    }
  
 
  render() {
    const display_content= this.getContentRender();
    return (
      <div>
        {display_content}
      </div>
    );
  }
}
export default Content;

