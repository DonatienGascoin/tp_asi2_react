import React, { Component } from 'react';
import EditMetaPres from '../components/EditMetaPres'
import Slid from '../../slid/containers/Slid'



class SlidList extends React.Component{

    constructor(props) {
      super(props);
      this.getListSlidePresentationRender=this.getListSlidePresentationRender.bind(this);   
    
        this.state = {
            content_pres_list:this.props.content_pres_list,
            content_list:this.props.content_list
        }
        
    }


    getListSlidePresentationRender(){
        var arrayPresContent = []
        for(var index = 0; index < this.state.content_pres_list.slidArray.length; index++) {
            let contentsSlid={
                content_list:this.state.content_list,
                id:this.state.content_pres_list.slidArray[index].id,  //id du slid
                title:this.state.content_pres_list.slidArray[index].title,      
                txt:this.state.content_pres_list.slidArray[index].txt,
                content:this.state.content_pres_list.slidArray[index].content_id,  //id du content
                displayMode:"SHORT"
            };

            arrayPresContent.push(
            <div className="panel-body border" key={index}>
                <Slid contentsSlid={contentsSlid}/>
            </div>
            )
        }
        return arrayPresContent;
    }


    render() {
        var listSlidePresentationSlid = this.getListSlidePresentationRender();
        return (
            <div>
            {listSlidePresentationSlid}
            </div>
        );
    }   
}
export default SlidList;