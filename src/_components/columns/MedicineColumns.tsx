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
import { IMedicine } from "@/types/medicine";

export const columnsMedicine = ({
  handleEdit: handEdit,
  handleDelete: handDel,
  handleDetails: handDet
}: ActionsColumnsProps): ColumnDef<IMedicine>[] => [
  {
    accessorKey: "nombre",
    header: "Nombre medicamento",
    cell: ({ row }) => {
      const { nombre } = row.original;
      return <div className="capitalize">{nombre}</div>;
    },
  },
  {
    accessorKey: "fabricante",
    header: "Nombre de fabricante",
    cell: ({ row }) => {
      const { fabricante } = row.original;
      return <div className="capitalize">{fabricante}</div>;
    },
  },
  {
    accessorKey: "tipo",
    header: "Tipo del medicamento",
    cell: ({ row }) => {
      const { tipo } = row.original;
      return <div className="capitalize">{tipo}</div>;
    },
  },
  {
    accessorKey: "intervaloDosis",
    header: "Intervalo de Dosis",
    cell: ({ row }) => {
      const { intervaloDosis } = row.original;
      return <div className="capitalize">{intervaloDosis}</div>;
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
