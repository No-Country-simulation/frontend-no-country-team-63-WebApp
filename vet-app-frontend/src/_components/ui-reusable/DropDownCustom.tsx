"use client"
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { FaPencilAlt } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { CustomOptionsTypes } from "@/types/TypesActions";



const DropDownCustom = ({ handleDelete, handleEdit, children }: CustomOptionsTypes) => {
// const DropDownCustom = ({children}: {children: React.ReactNode} ) => {
  return (
    // absolute top-[3rem] right-[1rem]
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="cursor-pointer  hover:bg-[#f1f1f1] rounded-full "
          >
            {children}
            
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-[#fff] border border-black p-[.6rem] rounded-[5px]"
        >
          <DropdownMenuItem
            className="py-1 cursor-pointer cursor-pointer"
            onClick={handleEdit}
          >
            <div className="flex justify-between items-center gap-2">
              <p>Editar</p>
              <FaPencilAlt />
            </div>
          </DropdownMenuItem>
          <hr className="text-[#8a8888]" />
          <DropdownMenuItem
            className="py-1 cursor-pointer"
            onClick={handleDelete}
          >
            <div className="flex justify-between items-center gap-2">
              <p>Eliminar</p>
              <BsTrash />
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownCustom;
