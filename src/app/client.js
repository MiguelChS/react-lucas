/**
 * Created by mc185249 on 1/11/2017.
 */
import React from 'react';
import { render } from 'react-dom';

class Logo extends React.Component {
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
                <img src="img/agency/logo.svg" className="img-responsive" alt=""/>
            </a>
        </div>
        )
    }
}


class ButtonNavegador extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <li>
                <a role="button">Usuario</a>
            </li>
        )
    }
}


class Menu extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right" style = {{marginRight:"-107px"}}>
                    <li className="hidden active">
                        <a className="page-scroll" href="#page-top"/>
                    </li>
                    <ButtonNavegador/>
                </ul>
            </div>
        )
    }
}


class Navegador extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top navbar-expanded">
                <div className="container">
                    <Logo/>
                    <Menu/>
                </div>
            </nav>
        )
    }
}

var app = document.getElementById("app");

render(<Navegador/>,app);