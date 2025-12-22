import z from "zod";

export const recordatoriosformSchema = z
  .object({
    nombreEvento: z
      .string()
      .max(30, {
        message: "Pon el nombre del recordatorio",
      }),
    tipoEvento: z
      .string()
      .max(20, {
        message: "Selecciona el tipo de recordatorio",
      }),
    fecha: z
      .string()
      .max(20, {
        message: "Elige la fecha y hora del recordatorio",
      }),
   
    hora: z
      .string()
      .max(10, {
          message: "Elige la hora del recordatorio",
      })
   
      
     
  
  })
  