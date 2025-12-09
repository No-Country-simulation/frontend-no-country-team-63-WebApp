import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  postRecordatorios,
  getRecordatorios,
  deleteRecordatorios,
  putRecordatorios,
} from "../use-cases/reminder-use-case";
import { IRecordatorios } from "@/types/recordatorios";

export const RecordatoriosMutations = () => {
  // const router = useRouter();
  // const setUserData = useUserStore((state) => state.setUserData);

  const queryClient = useQueryClient();

  const GetQueryRecordatorio = useQuery({
    queryKey: ["key_recordatorio"],
    queryFn: () => {
      return getRecordatorios();
    },
  });

  const mutationPostRecordatorios = useMutation({
    mutationFn: (data: IRecordatorios) => {
      return postRecordatorios(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["key_recordatorio"],
      });
      console.log("exitoso");
      alert("registro de recordatorio exitoso");
    },
  });
  const mutationDeleteRecordatorio = useMutation({
    mutationFn: (id: string) => {
      return deleteRecordatorios(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["key_recordatorio"],
      });
      console.log("exitoso");
      alert("de eliminó el recordatorio");
    },
  });
  const mutationPutRecordatorios = useMutation({
    mutationFn: ({ id, body }: { id: string; body: IRecordatorios }) => {
      return putRecordatorios({ id, body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["key_recordatorio"],
      });
      console.log("exitoso");
      alert("se actualizó el recordatorio");
    },
  });

  return {
    mutationPostRecordatorios,
    GetQueryRecordatorio,
    mutationDeleteRecordatorio,
    mutationPutRecordatorios,
  };
};
