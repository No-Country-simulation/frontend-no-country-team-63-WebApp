import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
import {
  postRecordatorios,
  getRecordatorios,
  deleteRecordatorios,
  putRecordatorios,
} from "../use-cases/reminder-use-case";
import { IRecordatorios } from "@/types/recordatorios";
import {
  getMedicine,
  deleteMedicine,
  postMedicine,
  putMedicine,
} from "../use-cases/medicine-use-case";
import { authStore } from "@/store/token-store";
import { MedicineEntity } from "@/types/medicine";
import { api_general } from "../api-general";

export const MedicineMutations = () => {
  const { token } = authStore();


  const queryClient = useQueryClient();
  
  // const mutationPostMedicine = useMutation({
  //   mutationFn: (body: MedicineEntity, token: string) => {
  //     return postMedicine(body, token);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["key_recordatorio", token],
  //     });
  //     console.log("exitoso");
  //     alert("registro de recordatorio exitoso");
  //   },
  // });

  const mutationDeleteMedicine = useMutation({
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
  const mutationPutMedicine = useMutation({
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
    // mutationPostMedicine,
    mutationDeleteMedicine,
    mutationPutMedicine,
    token
  };
};
