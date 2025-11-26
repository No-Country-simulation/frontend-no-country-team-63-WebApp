import { Button } from '@/components/ui/button'

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <section className="g-bg-boxshadow rounded-2xl ">
        <div className="flex justify-between">
          <div className={`g-bg-innershadow-right text-center p-[1rem] w-[50%] `}>
            <b className="">Inicio Sesion</b>
          </div>
          <div className="text-center  p-[1rem] w-[50%]">
            <b>Registro</b>
          </div>
        </div>
        <form className="">
          <div className="flex flex-col items-center px-[2rem] py-[3rem] gap-2">
            <input
              className="border-2 border-black placeholder:text-center p-2 hover:bg-[#287f87b7] focus:border-[#287F87]"
              type="text"
              placeholder="Email"
            />
            <input
              className="border-2 border-black placeholder:text-center p-2 hover:bg-[#287f87af] focus:border-[#287F87]"
              type="text"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex justify-center p-[1rem] ">
            <Button className="bg-[#E8E8E8] text-[#000] w-full border-black border-2" type="submit">
              Iniciar Sesion
            </Button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login
