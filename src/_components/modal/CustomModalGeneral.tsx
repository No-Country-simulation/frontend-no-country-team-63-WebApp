"use client"
import { useModalStore } from "@/store/modal-store";
import { lazy } from "react";
import ModalComponent from "../ui-reusable/ModalComponent";

const FormsGeneral = {
  // acá se pondrian todos los componentes de formulario existentes
  recordatorios: lazy(() => import("@/_components/forms/FormRecordatorio")),
  alert: lazy(() => import("@/_components/ui-reusable/AlertComponent")),
  details: lazy(() => import("@/_components/ui-reusable/DetailsComponent")),
};
// {children}: {children: React.ReactNode}
const CustomModalGeneral = ( ) => {
  const { closeModal, entityTypes, isOpen } = useModalStore();

  if (!entityTypes) return null;

  const FormGeneralShow = FormsGeneral[entityTypes];
  // el modal que te dio chat gpt
  return (
    <ModalComponent isOpen={isOpen} onClose={closeModal}> 
      <FormGeneralShow />
    </ModalComponent>
  );
};

export default CustomModalGeneral;
 