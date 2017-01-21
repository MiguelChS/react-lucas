import React from 'react';

export default class Logo extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <i className="fa fa-bars"/> Menu
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="image/logo9.png" className="img-responsive" alt=""/>
                </a>
            </div>
        )
    }
}