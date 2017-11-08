import React, { Component } from 'react';
import './main.css';
import BrowseContentPanel from  '../browseContentPanel/containers/BrowseContentPanel'
import EditSlidPanel from  '../editSlidPanel/containers/EditSlidPanel'
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'

class Main extends React.Component{
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
  
    <div className='container-fluid height-100'>
      <div className="row height-100">
        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
        </div>
        <div className='col-md-6 col-lg-6 height-100'>
          <EditSlidPanel/>
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

