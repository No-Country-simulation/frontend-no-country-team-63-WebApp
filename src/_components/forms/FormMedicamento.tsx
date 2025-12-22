"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import InputComponent from "../ui-reusable/InputComponent";
import ButtonComponent from "../ui-reusable/ButtonComponent";
import { MedicineMutations } from "@/service/mutations/medicine-mutation";
import { recordatoriosformSchema } from "@/schemas/recordatorios";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalStore } from "@/store/modal-store";
import { useEffect } from "react";
import { IRecordatorios } from "@/types/recordatorios";

const FormRecordatorio = () => {
  const { closeModal, data, openModal, Type } = useModalStore();
  const { GetQueryMedicine, mutationPostMedicine } =  MedicineMutations();

  const form = useForm<z.infer<typeof recordatoriosformSchema>>({
    resolver: zodResolver(recordatoriosformSchema),
    defaultValues: {
      nombreEvento: "",
      tipoEvento: "",
      fecha: "",
      hora: "",
    },
  });
  function onSubmit(values: z.infer<typeof recordatoriosformSchema>) {
    if ( Type === "edit" && (data as IRecordatorios).id) {
      const put_object = {
        id: (data as IRecordatorios).id,
        body: values,
      };
      // mutationPostMedicine.mutate(put_object);
      console.log("accion editar");
    }
    // mutationPostMedicine.mutate(values);
    console.log("accion crear");
  }

  useEffect(() => {
    if (data) {
      // console.log(data);
      form.reset(data);
    }
  }, [data, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nombreEvento"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del animal</FormLabel>
              <FormControl>
                <InputComponent placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          name="tipoEvento"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Elige el tipo de evento</FormLabel>
              <FormControl>
                <InputComponent placeholder="Evento" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fecha"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha del recordatorio</FormLabel>
              <FormControl>
                <InputComponent placeholder="Fecha" type="date" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hora"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hora del recordatorio</FormLabel>
              <FormControl>
                <InputComponent placeholder="Hora" type="time" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <ButtonComponent type="submit">Enviar</ButtonComponent>
      </form>
    </Form>
  );
};

export default FormRecordatorio;
