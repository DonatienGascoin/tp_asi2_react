import React, { Component } from 'react';
import './presentation.css';
import EditMetaPres from '../components/EditMetaPres'
import SlidList from '../components/SlidList'
import * as contentMapTmp from '../../../source/contentMap.json'
import * as contentPresTmp from '../../../source/pres.json'



class Presentation extends React.Component{
    constructor(props) {
      super(props);
    
      let temp_content_list;    
      temp_content_list=contentMapTmp;
      let temp_content_pres_list;    
      temp_content_pres_list=contentPresTmp;

        this.state = {
            content_pres_list:temp_content_pres_list,
            content_list:temp_content_list,   
            id:this.props.id,
            title:this.props.title,
            description:this.props.description,
            slidArray:this.props.slidArray
        }; 
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeDescription=this.handleChangeDescription.bind(this);
    }


    handleChangeTitle(e){
        this.setState({title:e.target.value});
    }

    handleChangeDescription(e){
        this.setState({description:e.target.value});
    }
    

    getPresentationRender(){

        let presentationResult=[
            <div className="panel-body border" key="1">
                <EditMetaPres
                    title = {this.state.title} 
                    description = {this.state.description}
                    handleChangeDescription = {this.handleChangeDescription}
                    handleChangeTitle = {this.handleChangeTitle}
                />  
                <SlidList 
                    content_pres_list={this.state.content_pres_list}
                    content_list={this.state.content_list}

                />
            </div>
        ]
        return presentationResult;
    }



  render() {
      var PresentationSlid = this.getPresentationRender();
    return (
        <div>
        {PresentationSlid}
        </div>
    );
  }

}  
export default Presentation;

 
