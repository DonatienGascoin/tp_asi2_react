import React, { Component } from 'react'
import Label from '../components/Label'
import Visual from '../components/Visual'
import './content.css'


class Content extends React.Component{
  constructor(props) {
    super(props);
    this.getAllContentRender=this.getAllContentRender.bind(this);
  }

  getAllContentRender(){
    let array_render=[];
    
    for(var i=0;i<this.props.contents.contents.length;i++){
      switch(this.props.contents.contents[i].onlyContent){
        case true:
          array_render.push(
            <div className="panel-body border" key={i}>
              <Visual 
                src={this.props.contents.contents[i].src} 
                type={this.props.contents.contents[i].type} 
              />
            </div>
          );
        break;
        case false:
          array_render.push(
            <div className="panel-body border" key={i}>
              <Visual 
                src={this.props.contents.contents[i].src} 
                type={this.props.contents.contents[i].type} 
              />
              <Label 
                id={this.props.contents.contents[i].id}
                title={this.props.contents.contents[i].title}
              />
            </div>
          );
        break;  
        }
    }
    return array_render;
  }
 
  render() {
    const display_list= this.getAllContentRender();
    return (
      <div>
        {display_list}
      </div>
    );
  }
}
export default Content;

