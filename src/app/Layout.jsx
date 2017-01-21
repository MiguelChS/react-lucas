import React from 'react'
import IndexNav from './nav/IndexNav.jsx'
import IndexHeader from './header/IndexHeader.jsx'
import IndexBodyMenu from './BodyMenu/IndexBodyMenu.jsx'

export default class  Layout extends React.Component{
    render (){
        return (
            <div>
                <IndexNav/>
                <IndexHeader/>
                <IndexBodyMenu/>
            </div>)
    }
}