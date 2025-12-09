import React from "react";

interface modalType{
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}
function ModalComponent({ isOpen, onClose, children }: modalType) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
      >
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default ModalComponent;
