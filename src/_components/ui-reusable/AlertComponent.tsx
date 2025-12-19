"use client"

import { Button } from "@/components/ui/button";
import { RecordatoriosMutations } from "@/service/mutations/recordatorio-mutation";
import { useModalStore } from "@/store/modal-store";
import { TbAlertTriangle } from "react-icons/tb";

const AlertComponent = () => {
  // const { deletePostRecordatorios } = RecordatoriosMutations();
  const { data } = useModalStore();

  // const DeleteRecordatorio = async (data: string) => {
  //   await deletePostRecordatorios.mutate(data);
  //   console.log(data)
  //   alert("se eliminó el recordatorio");
  // };

  // console.log("Id de elemento  " +  data)
  return (
    <div className="flex flex-col justify-center gap-1 ">
      <div className="flex justify-center">
        <TbAlertTriangle className="text-red-600 bg-[#eccaca]  rounded-full text-[2rem] p-[5px]" />
      </div>
      <h2 className="text-center">¿Estas seguro de eliminarlo?</h2>
      <b className="text-center">Esto no se va a poder deshacer</b>
      <b className="text-center">id: {data}</b>

      <Button
        className="text-[#fff] bg-[#db3a3a] hover:bg-[#e65656] rounded-3xl p-1 text-center cursor-pointer"
        // onClick={() => deletePostRecordatorios.mutate(data)}
      >
        Eliminar
      </Button>
      <Button className=" rounded-3xl p-1 text-center cursor-pointer hover:bg-[#e0e0e0]">
        Cancelar
      </Button>
    </div>
  );
};

export default AlertComponent;
