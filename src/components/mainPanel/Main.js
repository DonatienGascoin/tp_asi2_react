import React, { Component } from 'react';
import './Main.css';
import Content from '../common/content/containers/Content'
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import * as contentMapTmp from '../../source/contentMap.json'

class Main extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      contentMap:contentMapTmp,
    }
  }
 
  render() {
    return (
  
    <div className='container-fluid height-100'>
      <div className="row height-100">
        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
        </div>
        <div className='col-md-6 col-lg-6 height-100'>
        </div>
        <div className='col-md-3 col-lg-3 height-100'>
          <Content
            id="ID1"
            src="http://www.troispointzero.fr/wp-content/uploads/2016/03/reactjs.png"
            type="img"
            title="test"
            onlyContent={true}
          />
          <Content
            id="ID2"
            src="http://www.troispointzero.fr/wp-content/uploads/2016/03/reactjs.png"
            type="img"
            title="test"
            onlyContent={false}
          />
        </div>
      </div>
    </div>
    );
  }
}
export default Main;

