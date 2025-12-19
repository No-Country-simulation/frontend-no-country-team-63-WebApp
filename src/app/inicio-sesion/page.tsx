"use client";

import NavInicio from "@/_components/NavInicio";
import ButtonComponent from "@/_components/ui-reusable/ButtonComponent";
import InputComponent from "@/_components/ui-reusable/InputComponent";

const login = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center  bg-zinc-50 font-sans dark:bg-black">
      <section className="g-bg-boxshadow rounded-2xl ">
        <NavInicio />

        <form className="">
          <div className="flex flex-col items-center px-[2rem] py-[3rem] gap-2">
            <InputComponent placeholder="Email" type="email" />
            <InputComponent placeholder="Contraseña" type="password" />
          </div>
          <div className="flex justify-center p-[1rem] ">
            <ButtonComponent type="submit">Iniciar Sesion</ButtonComponent>
          </div>
        </form>
      </section>

    </div>
  );
};

export default login;
