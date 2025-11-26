"use client";

import NavInicio from "@/_components/NavInicio";
import ButtonComponent from "@/_components/ui/ButtonComponent";
import InputComponent from "@/_components/ui/InputComponent";
import { Button } from "@/components/ui/button";

const login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <section className="g-bg-boxshadow rounded-2xl ">
        <NavInicio />

        <form className="">
          <div className="flex flex-col items-center px-[2rem] py-[3rem] gap-2">
           <InputComponent placeholder="Email" type="email"/>
           <InputComponent placeholder="Nombre" type="text"/>
           <InputComponent placeholder="Apellido" type="text"/>
           <InputComponent placeholder="Fecha de nacimiento" type="text"/>
           <InputComponent placeholder="Contraseña" type="password"/>
          </div>
          <div className="flex justify-center p-[1rem] ">
            <ButtonComponent  type="submit" >
              Registrarme
            </ButtonComponent>
          </div>
        </form>
        
      </section>
    </div>
  );
};

export default login;
