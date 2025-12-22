export interface MedicineEntity {
  content: IMedicine[]
  pageable: Pageable
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  sort: Sort2
  numberOfElements: number
  first: boolean
  empty: boolean
}

export interface IMedicine {
  id: number
  nombre: string
  tipo: string
  fabricante: string
  intervaloDosis: number
  descripcion: string
}

export interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  sorted: boolean
  empty: boolean
  unsorted: boolean
}

export interface Sort2 {
  sorted: boolean
  empty: boolean
  unsorted: boolean
}
