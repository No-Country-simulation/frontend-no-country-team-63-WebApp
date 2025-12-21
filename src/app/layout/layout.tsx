"use client";

import CustomModalGeneral from "@/_components/modal/CustomModalGeneral";
import NavBar_logged from "@/_components/NavBar_logged";

const layout = ({children}: { children: React.ReactNode}) => {


  return (
    <div className="">
      <NavBar_logged />
      {children}
      <CustomModalGeneral />
    </div>
  );
};

export default layout;
