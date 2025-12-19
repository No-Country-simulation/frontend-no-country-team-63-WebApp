
export type Modaltypes = "ver" | "edit" | "crear" | "eliminar" 
export type EntityTypes = "recordatorios" | "alert" | "details"

export interface ActionsColumnsProps {
  handleEdit: ({ entityTypes, Type, data }: ModalProps) => void;
  handleDelete: (id: string) => void ;
  handleDetails: ({ entityTypes, Type, data }: ModalProps) => void;
}

export interface CustomOptionsTypes {
  handleDelete: () => void;
  handleEdit: () => void
  handleDetails: () => void
  children: React.ReactNode

}
export  interface Modalstate {
    isOpen: boolean
    Type: Modaltypes | null
    entityTypes: EntityTypes | null
    data: string | unknown 
    openModal: ({entityTypes, Type, data}: ModalProps) => void
    closeModal: () => void
}
export interface ModalProps {
    Type: Modaltypes
    entityTypes: EntityTypes
    data?: unknown
}