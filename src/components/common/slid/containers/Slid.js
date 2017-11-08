import React, { Component } from 'react'
import Label from '../components/Label'
import Visual from '../components/Visual'
import EditMetaSlid from '../components/EditMetaSlid'
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


            ]
            break;  
        }
        return slidResult;
    }

    render() {
        const display_list= this.getSlidRender();
        return (
          <div>
            {display_list}
          </div>
        );
      }
    }
  export default Slid;