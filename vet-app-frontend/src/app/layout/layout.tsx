"use client";

import { columns } from "@/_components/columns/RecordatorioColumns";
import CustomModalGeneral from "@/_components/modal/CustomModalGeneral";
import NavbarLayout from "@/_components/navbar-layout";
import ProphilesPet from "@/_components/ProphilesPet";
import { DataTableDemo } from "@/_components/tables/TablesRecordatorios";
import ButtonGreen from "@/_components/ui-reusable/ButtonGreen";
import { data, mockRecordatorios } from "@/mock/json-recordatorios";
import { RecordatoriosMutations } from "@/service/mutations/recordatorio-mutation";
import { useModalStore } from "@/store/modal-store";

//  interface ActionsColumnsProps {
//   handleEdit: ({ entityTypes, Type, data }: ModalProps) => void;
//   // handleDelete: (id: string) => void;
//   handleDetails?: ({ entityTypes, Type, data }: ModalProps) => void;
// }

const layout = () => {
  const { openModal } = useModalStore();
  const { GetQueryRecordatorio , mutationDeleteRecordatorio } = RecordatoriosMutations();
  // const { data: dataApi } = GetQueryRecordatorio;

  // console.log(dataApi);

  return (
    <div>
      <NavbarLayout />
      <div className="flex justify-between gap-[2rem] max-w-[1000px] mx-auto w-full h-[10vh] relative pt-[1rem]">
        <h2 className="text-[#1A5D63] text-[2rem]">Recordatorios</h2>
        <ButtonGreen
          type="submit"
          className="font-bold"
          onClick={() =>
            openModal({
              entityTypes: "recordatorios",
              Type: "crear",
            })
          }
        >
          Recordatorios
        </ButtonGreen>
      </div>

      <div className="pt-[2rem]">
        {GetQueryRecordatorio.isLoading && (
          <DataTableDemo
            columns={columns({
              handleEdit: openModal,
              handleDelete: mutationDeleteRecordatorio.mutate,
            })}
            // data={mockRecordatorios}
            // data={data}
            data={[
              {
                id: "esperando..",
                nombreEvento: "esperando..",
                tipoEvento: "esperando..",
                fecha: "esperando..",
                hora: "esperando..",
              },
              {
                id: "esperando..",
                nombreEvento: "esperando..",
                tipoEvento: "esperando..",
                fecha: "esperando..",
                hora: "esperando..",
              },
              {
                id: "esperando..",
                nombreEvento: "esperando..",
                tipoEvento: "esperando..",
                fecha: "esperando..",
                hora: "esperando..",
              }
            ]}
          />
        )}
        {GetQueryRecordatorio.isError && (
          <DataTableDemo
            columns={columns({
              handleEdit: openModal,
              handleDelete: mutationDeleteRecordatorio.mutate,
            })}
            // data={mockRecordatorios}
            // data={data}
            data={[
              {
                id: "esperando..",
                nombreEvento: "esperando..",
                tipoEvento: "esperando..",
                fecha: "esperando..",
                hora: "esperando..",
              },
              {
                id: "esperando..",
                nombreEvento: "esperando..",
                tipoEvento: "esperando..",
                fecha: "esperando..",
                hora: "esperando..",
              },
              {
                id: "esperando..",
                nombreEvento: "esperando..",
                tipoEvento: "esperando..",
                fecha: "esperando..",
                hora: "esperando..",
              }
            ]}
          />
        )}
        {GetQueryRecordatorio.data && (
          <DataTableDemo
            columns={columns({
              handleEdit: openModal,
              handleDelete: mutationDeleteRecordatorio.mutate,
            })}
            // data={mockRecordatorios}
            // data={data}
            data={GetQueryRecordatorio.data}
          />
        )}

        {/* <DataTableDemo
          columns={columns({
            handleEdit: openModal,
            handleDelete: openModal,
          })}
          // data={mockRecordatorios}
          // data={data}
          data={dataApi}
        /> */}
      </div>
      <div className="pt-[2rem]">{/* <ProphilesPet /> */}</div>
      <CustomModalGeneral />
    </div>
  );
};

export default layout;
