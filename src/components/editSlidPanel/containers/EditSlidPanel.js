import React, { Component } from 'react';
import Slid from '../../common/slid/containers/Slid'
import './editSlidPanel.css'
import * as contentMapTmp from '../../source/contentMap.json'

class EditSlidPanel extends React.Component{
  constructor(props) {
    super(props);
  
    let temp_content_list;
    
    temp_content_list=contentMapTmp;

    //creation of an initial state, a json object
    this.state = {
      content_list:temp_content_list,   
      id:0, //Id du Slid
      title:"Test :) !",
      txt:"blabla",
      displayMode:"FULL_MNG", // FULL_MNG ou SHORT
      content:3 //id du contenu du Slid
    }; 
  }
 
  render() {
    return (
        <Slid contentsSlid={this.state}/>
    );
  }
}
export default EditSlidPanel;
