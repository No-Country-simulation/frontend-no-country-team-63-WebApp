"use client"
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { recordatoriosformSchema } from "@/schemas/recordatorios";
import { RecordatoriosMutations } from "@/service/mutations/recordatorio-mutation";

export const useRecordatorioForm = () => {
  const { mutationPostRecordatorios } = RecordatoriosMutations();

  const form = useForm<z.infer<typeof recordatoriosformSchema>>({
    resolver: zodResolver(recordatoriosformSchema),
    defaultValues: {
      nombre: "",
      especie: "",
      raza: "",
      edadAnimal: "",
      peso: 0,
    },
  });

  function onSubmit(values: z.infer<typeof recordatoriosformSchema>) {
    mutationPostRecordatorios.mutate(values);
    console.log(values);
  }

  return {
    onSubmit,
    form,
  };
};
