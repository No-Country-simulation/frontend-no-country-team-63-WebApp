import { Modalstate } from "@/types/TypesActions"
import { create} from "zustand"


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