import React from 'react'
import classes from './Modal.module.css'

const Modal = ({isOpen}) => {
  return (
    <div>
      <main className={classes.backdrop}>
        <div className={classes.modal}>
            <h2>Agendamento para usuario</h2>
            <input type="text" />
            <input type="radio" />
            <input type="radio" />
        </div>
      </main>
    </div>
  )
}

export default Modal
