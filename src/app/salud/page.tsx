"use client";
import CustomModalGeneral from "@/_components/modal/CustomModalGeneral";
import NavBar_logged from "@/_components/NavBar_logged";
import { DataTableDemo } from "@/_components/tables/TablesRecordatorios";
import { DataTableSalud } from "@/_components/tables/TablesSalud";
import ButtonGreen from "@/_components/ui-reusable/ButtonGreen";
import { datamock } from "@/mock/mock";
import { api_general } from "@/service/api-general";
import { MedicineMutations } from "@/service/mutations/medicine-mutation";
import { useModalStore } from "@/store/modal-store";
import { authStore } from "@/store/token-store";
import { MedicineEntity } from "@/types/medicine";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const page = () => {
  const { openModal } = useModalStore();

  const {
    GetQueryMedicine,
    mutationPostMedicine,
    mutationDeleteMedicine,
    mutationPutMedicine,
  } = MedicineMutations();

  const { data } = GetQueryMedicine;

  // const accessToken = authStore((s) => s.tokens?.accessToken);


  // const {data} = useQuery({
  //   queryKey: ["key_recordatorio"],
  //   queryFn: () =>  api_general.get<MedicineEntity>(
  //     "/medicament/VACUNA?page=0&size=3&orderBy=true"
  //   ),
  //   enabled: true,
  // });
  console.log(data)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <NavBar_logged />
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
        {/* {GetQueryMedicine.isLoading && (
          <DataTableSalud
            columns={columns({
              handleEdit: openModal,
              handleDelete: mutationDeleteMedicine.mutate,
              handleDetails: openModal,
            })}
            // data={mockRecordatorios}
            // data={data}
            data={datamock}
          />
        )} */}
        {/* {GetQueryMedicine.isError && (
          <DataTableSalud
            columns={columns({
              handleEdit: openModal,
              handleDelete: mutationDeleteMedicine.mutate,
              handleDetails: openModal,
            })}
            // data={data}
            data={datamock}
          />
        )} */}
        {/* {GetQueryMedicine.data && (
          <DataTableSalud
            columns={columns({
              handleEdit: openModal,
              handleDelete: mutationDeleteMedicine.mutate,
              handleDetails: openModal,
            })}
            // data={mockRecordatorios}
            // data={data}
            data={dataMed}
          />
        )} */}
      </div>
      <div className="pt-[2rem]">
        <div className="flex justify-evenly w-[10rem] mx-auto pt-[2rem] h-[10vh]">
          <FaArrowLeft className="cursor-pointer" />
          <FaArrowRight className="cursor-pointer" />
        </div>
      </div>

      <CustomModalGeneral />
    </motion.div>
  );
};

export default page;
