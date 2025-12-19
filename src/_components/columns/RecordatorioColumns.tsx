"use client";

import { Button } from "@/components/ui/button";

import { ColumnDef } from "@tanstack/react-table";
import DropDownCustom from "../ui-reusable/DropDownCustom";
import { IRecordatorios, Payment } from "@/types/recordatorios";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown } from "lucide-react";
import { PiBoneDuotone } from "react-icons/pi";
import { ActionsColumnsProps } from "@/types/TypesActions";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const columns = ({
  handleEdit: handEdit,
  handleDelete: handDel,
  handleDetails: handDet
}: ActionsColumnsProps): ColumnDef<IRecordatorios>[] => [

  {
    accessorKey: "nombreEvento",
    header: "Nombre animal",
    cell: ({ row }) => {
      const { nombreEvento } = row.original;
      return <div className="capitalize">{nombreEvento}</div>;
    },
  },
  {
    accessorKey: "tipoEvento",
    header: "Tipo de Evento",
    cell: ({ row }) => {
      const { tipoEvento } = row.original;
      return <div className="capitalize">{tipoEvento}</div>;
    },
  },
  {
    accessorKey: "fecha",
    header: "Fecha de evento",
    cell: ({ row }) => {
      const { fecha } = row.original;
      return <div className="capitalize">{fecha}</div>;
    },
  },
  {
    accessorKey: "hora",
    header: "Hora de evento",
    cell: ({ row }) => {
      const { hora } = row.original;
      return <div className="capitalize">{hora}</div>;
    },
  },

  {
    id: "actions",
    header: "Acciones",
    enableHiding: false,
    cell: ({ row }) => {
      const router = useRouter();
      const { id } = row.original;
      return (
        <DropDownCustom
        handleDetails={ () =>   
          //router.push(`/layout/dashboard/${id}`)
          handDet({
            entityTypes: "details",
            Type: "ver"
          })
        }
          handleEdit={() =>
            handEdit({
              entityTypes: "recordatorios",
              Type: "crear",
              data: row.original,
            })
          }
          handleDelete={() => handDel(id )}
        >
          <PiBoneDuotone />
        </DropDownCustom>
      );
    },
  },
];
