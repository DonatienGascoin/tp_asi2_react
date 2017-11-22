import React, { Component } from 'react';
import './presentation.css';
import EditMetaPres from '../components/EditMetaPres'
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
    



    getListSlidePresentationRender(){

        var arrayPresContent = []
        for(var index = 0; index < this.state.content_pres_list.slidArray.length; index++) {
            arrayPresContent.push(
            <div className="panel-body border" key={index}>
            <Slid 
                id={this.state.content_pres_list[index].id}  //id du slid
                title={this.state.content_pres_list[index].title}
                txt={this.state.content_pres_list[index].txt}
                content={this.state.content_pres_list[index].content_id} //id du content
                displayMode="SHORT"
            />
            </div>
            )
        }
        return arrayPresContent;
    }


    getMetaPresentationRender(){

        let presentationResult=[
            <div className="panel-body border" key="1">
                <EditMetaPres
                    title = {this.state.title} 
                    description = {this.state.description}
                    handleChangeDescription = {this.handleChangeDescription}
                    handleChangeTitle = {this.handleChangeTitle}
                />  
            </div>
        ]
        return presentationResult;
    }



  render() {
      var metaPresentationSlid = this.getMetaPresentationRender();
      var listPresentationSlid = this.getListSlidePresentationRender();
    return (
        <div>
        {metapresentationSlid}
        {listPresentationSlid}
        </div>
    );
  }

}  
export default Presentation;

 
