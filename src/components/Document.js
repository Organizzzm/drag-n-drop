import React from 'react'
import DuckImg from '../stylesheets/Duck.jpg'

export default Document = (props) => (
    <div className="document text-center">
        <img src={DuckImg} alt="" className="document__img"/>
        <div className="document__title">{props.title}</div>
        <div className="document__desc">{props.desc}</div>
    </div>
)

