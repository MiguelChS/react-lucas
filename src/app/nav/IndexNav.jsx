import React from 'react';
import Logo from './IndexLogo.jsx';
import Menu from './Menu/IndexMenu.jsx';


export default class Navegador extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top navbar-expanded">
                <div className="container-fluid navConteiner">
                    <Logo/>
                    <Menu/>
                </div>
            </nav>
        )
    }
}