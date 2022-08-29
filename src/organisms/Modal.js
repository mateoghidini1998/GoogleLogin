import React from 'react'

const Modal = ({ open, handleClose, children }) => {
     
    
  if(!open) return null

  return (
    <div className='wrapper'>
        <div className="modal">
            <div className="modal-content">
                {children}
                <button onClick={handleClose} >Close</button>
            </div>
        </div>
    </div>
  )
}

export default Modal