import React from 'react';
export default class editMetaPres extends React.Component{

    constructor(props){
        super(props);   
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor="currentSlideTitle">Title </label>
                <input 
                    type="text"
                    className="form-control"
                    id="currentSlideTitle"
                    onChange={this.props.handleChangeTitle}
                    value={this.props.title}
                />
                <label htmlFor="currentSlideText">Description</label>
                <textarea
                    rows="5"
                    type="text"
                    className="form-control"
                    id="currentSlideText"
                    onChange={this.props.handleChangeDescription}
                    value={this.props.description}>
                </textarea>
            </div>
        );
    }
}