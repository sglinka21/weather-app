import React from 'react'
import './Backdrop.css'

const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.clicked.bind(this, props.index)}></div> : null
);

export default Backdrop
