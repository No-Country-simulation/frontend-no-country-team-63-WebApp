"use client";
import DetailsComponent from "@/_components/ui-reusable/DetailsComponent";
import { api_general_root } from "@/service/api-general";
import { RecordatoriosMutations } from "@/service/mutations/recordatorio-mutation";
import { useModalStore } from "@/store/modal-store";
import { IRecordatorios } from "@/types/recordatorios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";

interface Detalles {
  params: {
    details: IRecordatorios;
  };
}
const GetData = async (id: string) => {
  // const { GetQueryRecordatorio} = RecordatoriosMutations()
  const { data } = useQuery({
    queryKey: ["key-recordatorio"],
    queryFn: async () => {
      const { data } = await axios.get<IRecordatorios>(
        `${api_general_root}/recordatorio/${id}`
      );
      return data;
    },
  });

  return data;
};

const page = async ({ params }: Detalles) => {
  const { data: dataModal } = useModalStore();
  console.log(dataModal);

  const data = await GetData(params.details.id);
  console.log(data);
  const { details } = params;
  return <DetailsComponent />;
};

export default page;
