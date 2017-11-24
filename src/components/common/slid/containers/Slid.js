import React, { Component } from 'react'
import Label from '../components/Label'
import Visual from '../components/Visual'
import EditMetaSlid from '../components/EditMetaSlid'
import Content from '../../content/containers/Content'
import './slid.css'



class Slid extends React.Component{
    constructor(props) {
      super(props);
      this.getSlidRender=this.getSlidRender.bind(this);    
      this.state= {
        title:this.props.contentsSlid.selected_slid.title, 
        txt:this.props.contentsSlid.selected_slid.txt
      };
      this.handleChangeTitle=this.handleChangeTitle.bind(this);
      this.handleChangeTxt=this.handleChangeTxt.bind(this);
    }


    handleChangeTitle(e){
    console.log("Dans handleChangeTitle")
    this.setState({title:e.target.value});
    }

    handleChangeTxt(e){
      this.setState({txt:e.target.value});
    }
  

    getSlidRender(){
        let slidResult;
        
          switch(this.props.contentsSlid.selected_slid.displayMode){
            case "SHORT":
              slidResult=[
                <div className="panel-body border" key={1}>
                  <Label 
                    title={this.props.contentsSlid.selected_slid.title} 
                    txt={this.props.contentsSlid.selected_slid.txt}
                  />
                  <Visual
                    type={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.selected_slid.content].type}
                    src={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.selected_slid.content].src}                    
                  />
                </div>
            ]
            break;


            case "FULL_MNG":
            slidResult=[
              <div className="panel-body border" key={2}>
                <EditMetaSlid
                  title = {this.props.title} 
                  txt = {this.props.txt}
                  handleChangeTitle={this.handleChangeTitle}
                  handleChangeTxt={this.handleChangeTxt}
                />     
                <Content 
                  id={this.props.contentsSlid.selected_slid.content}
                  onlyContent={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.selected_slid.content].onlyContent}
                  type={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.selected_slid.content].type}
                  src={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.selected_slid.content].src}                    
                  title={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.selected_slid.content].title}
                /> 

                <Label 
                  title={this.state.title} 
                  txt={this.state.txt} 
                />
              </div>

            ]
            break;  
    }
        return slidResult;
    }

    render() {
        const display_slid= this.getSlidRender();
        return (
          <div>
            {display_slid}              
          </div>
        );
      }
    }
  export default Slid;