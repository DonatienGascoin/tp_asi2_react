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
      selected_slid:this.props.selected_slid
    }; 
  }
 
  render() {
    return (
        <Slid contentsSlid={this.state}/>
    );
  }

}
export default EditSlidPanel;
