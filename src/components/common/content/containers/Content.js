import React, { Component } from 'react';
import Label from '../components/Label'
import Visual from '../components/Visual'
import './Content.css'


class Content extends React.Component{
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
  
    <div className='container-fluid height-100'>
      <div className="panel-body border">
        <Visual 
          src={this.props.src} 
          type={this.props.type} 
        />
        <Label 
          id={this.props.id}
          title={this.props.title}
          onlyContent={this.props.onlyContent}
        />
      </div>
    </div>
    );
  }
}
export default Content;

