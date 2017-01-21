import React from 'react';
import ItemMenu from './ItemMenu.jsx';

export  default class BodyMenu extends React.Component{
    constructor(){
        super();
        this.Menu = [{
            label:"Subir Informe",
            detalle:"xxxx",
            foto:"image/Explorar.png"
        },{
            label:"Ver y explorar",
            detalle:"xxxx",
            foto:"image/Explorar.png"
        },{
            label:"Busqueda",
            detalle:"xxxxx",
            foto:"image/Explorar.png"
        }];
    }

    render(){
        return(
            <div className="container">
                <div className="row content-row">
                    {
                        this.Menu.map((valor,index)=>{
                            return <ItemMenu key={index} label={valor.label} detalle={valor.detalle} foto={valor.foto} />
                        })
                    }
                </div>
            </div>
        )
    }
}