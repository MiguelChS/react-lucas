import React from 'react';

export default class ItemMenu extends React.Component{
    render(){
        return(
            <div className="col-md-4">
                <div className="preview-pane">
                    <a href="agency.html">
                        <img src={this.props.foto} className="img-responsive img-centered" alt=""/>
                        <h3>{this.props.label}</h3>
                        <hr className="colored"/>
                        <p className="text-muted">Detalle</p>
                        <ul className="list-unstyled text-muted">
                            <li>
                                <em>{this.props.detalle}</em>
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
        )
    }
}