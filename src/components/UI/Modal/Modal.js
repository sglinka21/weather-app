import React from 'react'
import '../Modal/Modal.css'

const Modal = (props) => {
  return (
    <div className="Modal blue lighten-4">
      {props.children}
    </div>
  )
}

export default Modal
