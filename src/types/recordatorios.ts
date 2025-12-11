export type IRecordatorios = {
  id: string
  nombreEvento: string
  tipoEvento: string
  fecha: string
  hora: string

}

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
