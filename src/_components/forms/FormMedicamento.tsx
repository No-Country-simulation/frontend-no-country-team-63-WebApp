"use client";
import z from "zod";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalStore } from "@/store/modal-store";
import { useEffect } from "react";
import { MedicineformSchema } from "@/schemas/medicine.schema";
import { IMedicine } from "@/types/medicine";
import { authStore } from "@/store/token-store";

const FormRecordatorio = () => {
  const { closeModal, data, openModal, Type } = useModalStore();
  const {mutationPostMedicine, mutationPutMedicine} = MedicineMutations();
const {token} = authStore()

  const form = useForm<z.infer<typeof MedicineformSchema>>({
    resolver: zodResolver(MedicineformSchema),
    defaultValues: {
      descripcion: "",
      fabricante: "",
      intervaloDosis: 0,
      nombre: "",
      tipo: "",
    },
  });
  function onSubmit(values: z.infer<typeof MedicineformSchema>) {
    if (Type === "edit" && (data as IMedicine).id) {
      const put_object = {
        id: (data as IMedicine).id,
        body: values,
      };
      // mutationPostMedicine.mutate(put_object);
      console.log("accion editar");
    }
    const post_med = {
      body: values,
      token: token.accessToken
    }
    mutationPostMedicine.mutate(post_med);
    console.log(post_med)
    console.log("accion crear");
  }

  useEffect(() => {
    if (data) {
      form.reset(data);
    }
  }, [data, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del medicamento</FormLabel>
              <FormControl>
                <InputComponent placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          name="fabricante"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Escribe el nombre del fabricante</FormLabel>
              <FormControl>
                <InputComponent placeholder="fabricante" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tipo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Escribe el tipo del medicamento</FormLabel>
              <FormControl>
                <InputComponent placeholder="tipo" type="string" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="intervaloDosis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Escribe el intervalo de las dosis</FormLabel>
              <FormControl>
                <InputComponent
                  placeholder="intervalo"
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
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
