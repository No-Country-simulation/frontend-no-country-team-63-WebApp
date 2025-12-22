"use client";

import { columns } from "@/_components/columns/RecordatorioColumns";
import CustomModalGeneral from "@/_components/modal/CustomModalGeneral";
import NavBar_logged from "@/_components/NavBar_logged";
import { DataTableDemo } from "@/_components/tables/TablesRecordatorios";
import { DataTableSalud } from "@/_components/tables/TablesSalud";
import ButtonGreen from "@/_components/ui-reusable/ButtonGreen";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
  const { token } = authStore();
  const {
    // GetQueryMedicine,
    // mutationPostMedicine,
    mutationDeleteMedicine,
    mutationPutMedicine,
  } = MedicineMutations();

  const { data: dataMedApi } = useQuery({
    queryKey: ["key_medicine", token.accessToken],
    queryFn: () =>
      api_general.get<MedicineEntity>(
        "/medicament/VACUNA?page=0&size=3&orderBy=true",
        {
          headers: {
            Authorization: "Bearer " + token.accessToken,
          },
        }
      ),
  });
  console.log("respuesta de la api");
  console.log(dataMedApi?.data?.content);

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
        {!dataMedApi?.data && (
          <DataTableSalud
            columns={columns({
              handleEdit: openModal,
              handleDelete: mutationDeleteMedicine.mutate,
              handleDetails: openModal,
            })}
            // data={data}
            data={datamock}
          />
        )}
        {dataMedApi?.data.content.length === 0 && (
          <DataTableSalud
            columns={columns({
              handleEdit: openModal,
              handleDelete: mutationDeleteMedicine.mutate,
              handleDetails: openModal,
            })}
            // data={data}
            data={datamock}
          />
        )}
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
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      <CustomModalGeneral />
    </motion.div>
  );
};

export default page;
