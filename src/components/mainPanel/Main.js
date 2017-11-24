import React, { Component } from 'react';
import './main.css';
import BrowseContentPanel from  '../browseContentPanel/containers/BrowseContentPanel'
import EditSlidPanel from  '../editSlidPanel/containers/EditSlidPanel'
import Presentation from '../common/presentation/containers/Presentation'
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import { createStore } from 'redux';

class Main extends React.Component{
  constructor(props) {
    super(props);
  }

 
  render() {
    var selected_slid={
      id:"0", //Id du Slid
      title:"Test :) !",
      txt:"blabla",
      displayMode:"FULL_MNG", // FULL_MNG ou SHORT
      content:"3" //id du contenu du Slid/>
    };

    return (
    <div className='container-fluid height-100'>
      <div className="row height-100">
        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
          <Presentation 
              title="Présentation :) !"
              description="description"
          />
        </div>

        <div className='col-md-6 col-lg-6 height-100'>
          <EditSlidPanel  selected_slid={selected_slid}            
          />
        </div>

        <div className='col-md-3 col-lg-3 height-100'>
          <BrowseContentPanel/>
        </div>
      </div>
    </div>
    );
  }
}
export default Main;


/* 
  id="0" //Id du Slid
            title="Test :) !"
            txt="blabla"
            displayMode="FULL_MNG" // FULL_MNG ou SHORT
            content="3" //id du contenu du Slid/>
            */