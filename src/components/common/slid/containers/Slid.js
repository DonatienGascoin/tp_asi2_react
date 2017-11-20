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
    }

    
    getSlidRender(){
        let slidResult;
        
          switch(this.props.contentsSlid.displayMode){
            case "SHORT":
              slidResult=[
                <div className="panel-body border" key={1}>
                  <Label 
                    title={this.props.contentsSlid.title} 
                    txt={this.props.contentsSlid.txt}
                  />
                  <Visual
                    type={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].type}
                    src={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].src}                    
                  />
                </div>
            ]
            break;


            case "FULL_MNG":
            slidResult=[
              <div className="panel-body border" key={2}>
                <EditMetaSlid
                  title = {this.props.contentsSlid.title} 
                  txt = {this.props.contentsSlid.txt}
                />     
                <Content 
                  id={this.props.contentsSlid.content}
                  onlyContent={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].onlyContent}
                  type={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].type}
                  src={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].src}                    
                  title={this.props.contentsSlid.content_list.contents[this.props.contentsSlid.content].title}
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