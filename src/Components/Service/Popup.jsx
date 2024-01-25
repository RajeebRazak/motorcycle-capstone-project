import React from 'react';
import Cusform from './Form'


const Popup = ({  isOpen, onClose , onSubmit }) => {
    return (
     <div className={`popup ${isOpen ? 'open' : 'closed'}`}>
        <div className="popup-content">
            <button className="close-button" onClick={onClose}>
            <i className="fas fa-times"></i>
            </button>
            <Cusform onSubmit={onSubmit} onCancel={onClose} />
        </div>
     </div>
    )
};

export default Popup;