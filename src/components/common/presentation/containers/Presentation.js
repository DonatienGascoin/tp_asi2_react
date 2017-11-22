import React, { Component } from 'react';
import './presentation.css';
import EditMetaPres from '../components/EditMetaPres'
import * as contentMapTmp from '../../../source/contentMap.json'



class Presentation extends React.Component{
    constructor(props) {
      super(props);
    
      let temp_content_list;    
      temp_content_list=contentMapTmp;

        this.state = {
            content_list:temp_content_list,   
            id:this.props.id,
            title:this.props.title,
            description:this.props.description,
            slidArray:this.props.slidArray
        }; 
    }


    getPresentationRender(){

        let presentationResult=[
            <div className="panel-body border" key={2}>
                <EditMetaPres
                title = {this.state.title} 
                description = {this.state.description}
                />  
            </div>

        ]
        return presentationResult;
    }



  render() {
      var presentationSlid = this.getPresentationRender();
    return (
        <Presentation presentationSlid={this.state}/>
    );
  }

}  
export default Presentation;

  /*   <Content 
              id={this.props.contentsSlid.content}
              onlyContent={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].onlyContent}
              type={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].type}
              src={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].src}                    
              title={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].title}
            /> */
