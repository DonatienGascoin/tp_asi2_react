import React, { Component } from 'react';
import Content from '../../common/content/containers/Content'
import './BrowseContentPanel.css'
import * as contentMapTmp from '../../source/contentMap.json'

class BrowseContentPanel extends React.Component{
  constructor(props) {
    super(props);
  
    let temp_content_list;
    
    temp_content_list=contentMapTmp;

    //creation of an initial state, a json object
    this.state = {
      content_list:temp_content_list,            
    }; 
  }
 
  render() {
    return (
        <Content contents={this.state.content_list}/>
    );
  }
}
export default BrowseContentPanel;

