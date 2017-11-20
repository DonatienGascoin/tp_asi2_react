import React, { Component } from 'react';
import Content from '../../common/content/containers/Content'
import './browseContentPanel.css'
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
 

  getListRender(){
    var arrayContent = []
    for(var index = 0; index < this.state.content_list.contents.length; index++) {
      arrayContent.push(
        <div className="panel-body border" key={index}>
          <Content 
            id={this.state.content_list.contents[index].id}
            onlyContent={this.state.content_list.contents[index].onlyContent}
            src={this.state.content_list.contents[index].src}
            type={this.state.content_list.contents[index].type}
            txt={this.state.content_list.contents[index].txt}
            title={this.state.content_list.contents[index].title}
          />
        </div>
      )
    }
    return arrayContent;
  }

  render() {
    const display_arrayContent= this.getListRender();
    return (
      <div>
        {display_arrayContent}
      </div>
    );
  }
}
export default BrowseContentPanel;

