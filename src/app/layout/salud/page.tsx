"use client";

import { columnsMedicine } from "@/_components/columns/MedicineColumns";
import CustomModalGeneral from "@/_components/modal/CustomModalGeneral";
import { DataTableSalud } from "@/_components/tables/TablesSalud";
import ButtonGreen from "@/_components/ui-reusable/ButtonGreen";
import { PaginationComponent } from "@/_components/ui-reusable/PaginationComponent";

import {
  datamockErrorMedicine,
  datamockLoadMedicine,
} from "@/mock/mock.medicine";
import { api_general } from "@/service/api-general";
import { MedicineMutations } from "@/service/mutations/medicine-mutation";
import { useModalStore } from "@/store/modal-store";
import { authStore } from "@/store/token-store";
import { MedicineEntity } from "@/types/medicine";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const page = () => {
  const { openModal } = useModalStore();
  const { token } = authStore();
  const { mutationDeleteMedicine, mutationPutMedicine } = MedicineMutations();

  const [page, setpage] = useState(0);
  // const [size, setsizeDatapage] = useState(5);

  const ClickNextPage = () => {
    setpage(page + 1);
  };
  const ClickBackPage = () => {
    if (page > 0) {
      setpage(page - 1);
    }
    return null;
  };
  // const ClickMoreSizeDataPage = () => {
  //   setsizeDatapage(size + 1);
  // };
  // const ClickLessSizeDataPage = () => {
  //   if (size >= 2) {
  //     setsizeDatapage(size - 1);
  //   }
  //   return null;
  // };
  const {
    data: dataMedApi,
    isError,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["key_medicine", token.accessToken],
    queryFn: () =>
      api_general.get<MedicineEntity>(
        `/medicament/VACUNA?page=${page}&size=4&orderBy=true`,
        {
          headers: {
            Authorization: "Bearer " + token.accessToken,
          },
        }
      ),
  });
  console.log("respuesta de la api");
  console.log(dataMedApi);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div
        className=" flex flex-col md:flex-row justify-between gap-[2rem] items-center max-w-[1000px]
        mx-auto w-full h-[20vh] md:h-fit   relative pt-[1rem] px-[2rem]  "
      >
        <h2 className="text-[#1A5D63] text-[2rem]">Registro salud</h2>
        <ButtonGreen
          type="submit"
          className="font-bold flex "
          onClick={() =>
            openModal({
              entityTypes: "medicine",
              Type: "crear",
            })
          }
        >
          Registrar medicinas
        </ButtonGreen>
      </div>

      <div className="pt-[2rem] px-[2rem]">
        {dataMedApi?.data?.content.length > 0 && (
          <DataTableSalud
            columns={columnsMedicine({
              handleEdit: openModal,
              handleDelete: mutationDeleteMedicine.mutate,
              handleDetails: openModal,
            })}
            // data={data}
            data={dataMedApi?.data.content}
          />
        )}
        {dataMedApi?.data.content.length === 0 && (
          <DataTableSalud
            columns={columnsMedicine({
              handleEdit: openModal,
              handleDelete: mutationDeleteMedicine.mutate,
              handleDetails: openModal,
            })}
            // data={data}
            data={{
              id: 0,
              nombre: "vacio",
              tipo: "vacio",
              fabricante: "vacio",
              intervaloDosis: 0,
              descripcion: "vacio",
            }}
          />
        )}
        {isError && (
          <DataTableSalud
            columns={columnsMedicine({
              handleEdit: openModal,
              handleDelete: mutationDeleteMedicine.mutate,
              handleDetails: openModal,
            })}
            // data={data}
            data={datamockErrorMedicine}
          />
        )}
        {isLoading && (
          <DataTableSalud
            columns={columnsMedicine({
              handleEdit: openModal,
              handleDelete: mutationDeleteMedicine.mutate,
              handleDetails: openModal,
            })}
            // data={mockRecordatorios}
            // data={data}
            data={datamockLoadMedicine}
          />
        )}
      </div>
      <div className="pt-[2rem]">
        <PaginationComponent
          ClickBackPage={ClickBackPage}
          ClickNextPage={ClickNextPage}
          page={page}
          // size={size}
          // ClickMoreSizeDataPage={ClickMoreSizeDataPage}
          // ClickLessSizeDataPage={ClickLessSizeDataPage}
        />
        {/* <div className="flex justify-evenly w-[10rem] mx-auto pt-[2rem] h-[10vh]">
        </div> */}
      </div>

      <CustomModalGeneral />
    </motion.div>
  );
};

export default page;
