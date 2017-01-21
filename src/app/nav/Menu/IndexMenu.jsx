import React from 'react'
import ItemMenu from './ItemMenu.jsx'

export default class Menu extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden active">
                        <a className="page-scroll" href="#page-top"/>
                    </li>
                    <ItemMenu/>
                </ul>
            </div>
        )
    }
}