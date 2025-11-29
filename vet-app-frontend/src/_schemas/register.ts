import { z } from "zod";

export const registerformSchema = z
  .object({
    nombre: z
      .string()
      .min(3, {
        message: "El nombre de usuario debe tener al menos 3 caracteres",
      }),
    apellido: z
      .string()
      .min(3, {
        message: "El apellido del usuario debe tener al menos 3 caracteres",
      }),
    fechaNacimiento: z
      .string()
      .min(3, {
        message: "La fecha de nacimiemto debe tener al menos 3 caracteres",
      }),
    email: z.string().email({
      message: "Tu correo electrónico no es válido",
    }),
    contraseña: z
      .string()
      .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
      .max(8, { message: "La contraseña no puede superar los 8 caracteres" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,8}$/, {
        message: "La contraseña debe incluir mayúsculas, minúsculas y números",
      })
  
  })
  