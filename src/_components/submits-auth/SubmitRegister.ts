import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerformSchema } from "@/_schemas/register";

export const useRegisterForm = () => {
    
  const form = useForm<z.infer<typeof registerformSchema>>({
    resolver: zodResolver(registerformSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      contraseña: "",
      fechaNacimiento: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerformSchema>) {
    console.log(values);
  }

  return {
    onSubmit,
    form,
  };
};
