import React from 'react'

const Modal = ({ open, handleClose }) => {
  if(!open) return null

  return (
    <div className='wrapper'>
        <div className="modal">
            <div className="modal-content">
                <input disabled></input>
                <input disabled></input>
                <input disabled></input>
                <input disabled></input>
                <input disabled></input>
                <button onClick={handleClose} >Close</button>
            </div>
        </div>
    </div>
  )
}

export default Modal