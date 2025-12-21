"use client";
import React from "react";

import { columns } from "@/_components/columns/RecordatorioColumns";
import CustomModalGeneral from "@/_components/modal/CustomModalGeneral";
import NavbarLayout from "@/_components/navbar-layout";
import NavBar_logged from "@/_components/NavBar_logged";
import ProphilesPet from "@/_components/ProphilesPet";
import { DataTableDemo } from "@/_components/tables/TablesRecordatorios";
import ButtonGreen from "@/_components/ui-reusable/ButtonGreen";
import { data, mockRecordatorios } from "@/mock/json-recordatorios";
import { datamock } from "@/mock/mock";
import { RecordatoriosMutations } from "@/service/mutations/recordatorio-mutation";
import { useModalStore } from "@/store/modal-store";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const page = () => {
  const { openModal } = useModalStore();
  
  const { GetQueryRecordatorio, mutationDeleteRecordatorio } =
    RecordatoriosMutations();
  const { data: dataApi } = GetQueryRecordatorio;
  
  console.log(dataApi);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div
          className=" flex flex-col md:flex-row justify-between gap-[2rem] items-center max-w-[1000px]
        mx-auto w-full h-[20vh] md:h-fit   relative pt-[1rem] px-[2rem]  "
        >
          <h2 className="text-[#1A5D63] text-[2rem]">Recordatorios</h2>
          <ButtonGreen
            type="submit"
            className="font-bold flex "
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

        <div className="pt-[2rem] px-[2rem]">
          {GetQueryRecordatorio.isLoading && (
            <DataTableDemo
              columns={columns({
                handleEdit: openModal,
                handleDelete: mutationDeleteRecordatorio.mutate,
                handleDetails: openModal,
              })}
              // data={mockRecordatorios}
              // data={data}
              data={datamock}
            />
          )}
          {GetQueryRecordatorio.isError && (
            <DataTableDemo
              columns={columns({
                handleEdit: openModal,
                handleDelete: mutationDeleteRecordatorio.mutate,
                handleDetails: openModal,
              })}
              // data={data}
              data={datamock}
            />
          )}
          {GetQueryRecordatorio.data && (
            <DataTableDemo
              columns={columns({
                handleEdit: openModal,
                handleDelete: mutationDeleteRecordatorio.mutate,
                handleDetails: openModal,
              })}
              // data={mockRecordatorios}
              // data={data}
              data={GetQueryRecordatorio.data}
            />
          )}
        </div>
        <div className="pt-[2rem]">
          <ProphilesPet />
          <div className="flex justify-evenly w-[10rem] mx-auto pt-[2rem] h-[10vh]">
            <FaArrowLeft className="cursor-pointer" />
            <FaArrowRight className="cursor-pointer" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default page