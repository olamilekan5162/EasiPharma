import React from "react";
import "./Modal.css"; 
import Button from "../button/Button";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
