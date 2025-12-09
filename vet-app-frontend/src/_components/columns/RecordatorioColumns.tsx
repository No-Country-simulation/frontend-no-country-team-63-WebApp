"use client";

import { Button } from "@/components/ui/button";

import { ColumnDef } from "@tanstack/react-table";
import DropDownCustom from "../ui-reusable/DropDownCustom";
import { IRecordatorios, Payment } from "@/types/recordatorios";
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown } from "lucide-react";
import { PiBoneDuotone } from "react-icons/pi";
import { ActionsColumnsProps } from "@/types/TypesActions";

export const columns = ({
  handleEdit: handEdit,
  handleDelete: handDel,
}: ActionsColumnsProps): ColumnDef<IRecordatorios>[] => [
  // handleDelete: () => void,
  // export const columns: ColumnDef<Payment>[] = [
  // {
  //   accessorKey: "id",
  //   header: "id",
  //   cell: ({ row }) => {
  //     const { id } = row.original;
  //     return <div className="capitalize">#{id}</div>;
  //   },
  // },
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
  // {
  //   accessorKey: "email",

  //   header: "Tipo evento",
  //     // <div className="capitalize">{nombre}</div>

  //   cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  // },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"));
  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount);
  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },
  {
    id: "actions",
    header: "Acciones",
    enableHiding: false,
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <DropDownCustom
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
