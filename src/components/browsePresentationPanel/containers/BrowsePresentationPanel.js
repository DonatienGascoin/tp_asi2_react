import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid'
import './browsePresentationPanel.css'
import * as contentMapTmp from '../../source/contentMap.json'

class BrowsePresentationPanel extends React.Component{
  constructor(props) {
    super(props);
  
    let temp_content_list;
    
    temp_content_list=contentMapTmp;

    //creation of an initial state, a json object
    this.state = {
      content_list:temp_content_list,   
      id:0,
      title:"Test :) !",
      txt:"blabla",
      displayMode:"SHORT",
      content:3
    }; 
  }
 
  render() {
    return (
        <Slid contentsSlid={this.state}/>
    );
  }
}
export default BrowsePresentationPanel;
