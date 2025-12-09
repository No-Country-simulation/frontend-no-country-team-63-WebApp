import {  IRecordatorios, Payment } from "@/types/recordatorios";

export const mockRecordatorios: IRecordatorios[] = [
  {
    id: "0",
    nombreEvento: "Pancho",
    tipoEvento: "vacunacion",
    fecha: "10-5-2004",
    hora: "18:00",
  },
  {
    id: "1",
    nombreEvento: "Pelusa",
    tipoEvento: "desparacitante",
    fecha: "10-5-2004",
    hora: "18:00",
  },
  {
    id: "2",
    nombreEvento: "Jorge",
    tipoEvento: "vacunacion",
    fecha: "10-5-2004",
    hora: "18:00",
  },
  
];

export const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
]