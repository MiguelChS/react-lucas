import React from 'react'
import Modal from '../../ComponentesCompartidos/Modal.jsx'

export default class ButtonNavegador extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: null
        }
    }

    click(){
        this.setState({
            modal : <Modal mostrar={true} prueba={this.onclose.bind(this)}/>
        })

    }
    onclose(){
        this.setState({
            modal: null
        })
    }

    render(){
        return (
            <li>
                <a role="button" onClick={this.click.bind(this)} >Usuario</a>
                {this.state.modal}
            </li>
        )
    }
}