import { useModalStore } from "@/store/modal-store";
import React from "react";

interface modalType {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
function ModalComponent({ isOpen, onClose, children }: modalType) {
  if (!isOpen) return null;
  const { Type, entityTypes } = useModalStore();

  let condicional;

  if (entityTypes === "recordatorios") {
    condicional = (
      <div className="flex justify-evenly text-2xl py-[1rem]">
        {" "}
        <img src="/logo-huella.svg" alt="logo huella" /> Crear recordatorio
      </div>
    );
  } else if (entityTypes === "details") {
    condicional = (
      <div className="flex justify-evenly text-2xl  py-[1rem]">
        {" "}
        <img src="/logo-huella.svg" alt="logo huella" /> Detalle del
        recordatorio
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
      >
        {condicional}
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalComponent;
