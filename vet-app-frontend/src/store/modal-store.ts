import { Modalstate } from "@/types/TypesActions"
import { create} from "zustand"

export type Modaltypes = "ver" | "edit" | "crear" | "eliminar"
export type EntityTypes = "recordatorios" | "alert"


export const useModalStore = create<Modalstate>((set) => ({
    isOpen: false,
    Type: null,
    entityTypes: null,
    data: null,
    openModal({ entityTypes, Type, data }) {
        set({isOpen: true, Type, entityTypes, data})
    },
    closeModal() {
        set({isOpen: false, Type: null, entityTypes: null, data: null})
    },
}))