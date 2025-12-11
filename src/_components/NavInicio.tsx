import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavInicio = () => {
const path = usePathname()

  return (
    <div className="flex justify-between">
      <Link href={`/inicio-sesion`} className={` ${path === "/inicio-sesion" && "g-bg-innershadow-right" } text-center p-[1rem] w-[50%] `}>
        <b className="">Inicio Sesion</b>
      </Link>
      <Link href={`/registro`} className={`${path === "/registro" && "g-bg-innershadow-left"} text-center p-[1rem] w-[50%] `}>
        <b>Registro</b>
      </Link>
    </div>
  );
};

export default NavInicio;
