import z from "zod";

export const MedicineformSchema = z
  .object({
    nombre: z
      .string()
      .max(50, {
        message: "Pon el nombre del medicamento",
      }),
    tipo: z
      .string()
      .max(50, {
        message: "Selecciona el tipo de medicamento",
      }),
    fabricante: z
      .string()
      .max(100, {
        message: "Pon el fabricante del medicamento",
      }),
      
      intervaloDosis: z
      .number()
      .max(50, {
        message: "Elige el intervalo de las dosis",
      }),
      
      descripcion: z
        .string()
        .max(200, {
          message: "Pon una descripcion del medicamento",
        }),
      
     
  
  })
  