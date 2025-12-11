import { useState, useEffect } from "react";
import { Form } from "react-hook-form";

import ButtonComponent from "./ui-reusable/ButtonComponent";
import InputComponent from "./ui-reusable/InputComponent";
import { RegisterPerson } from "@/types/register";
import { form_state_register } from "@/mock/mock";
import { api_general_root } from "@/service/api-general";
import LabelComponent from "./ui-reusable/LabelComponent";
// import { useRegisterForm } from "./submits-auth/SubmitRecordatorio";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function LoginBox() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const router = useRouter();

  const [forM, setform] = useState<RegisterPerson>(form_state_register);
  // const { form, onSubmit } = useRegisterForm();
  // real vh fix
  useEffect(() => {
    function updateVH() {
      document.documentElement.style.setProperty(
        "--real-vh",
        `${window.innerHeight}px`
      );
    }
    updateVH();
    window.addEventListener("resize", updateVH);
    return () => window.removeEventListener("resize", updateVH);
  }, []);

  useEffect(() => {
    // sube la página al top cuando cambias de tab
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab]);

  const HandleChange = (e: any) => {
    setform({
      ...forM,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitRegister = async (e: any) => {
    e.preventDefault();
    const FormInfo = new FormData(e.target);

    const dataInputsRegister = {
      nombre: FormInfo.get("nombre"),
      apellido: FormInfo.get("apellido"),
      fechaNacimiento: FormInfo.get("fechaNacimiento"),
      email: FormInfo.get("email"),
      password: FormInfo.get("password"),
    };
    console.log(dataInputsRegister);

    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(dataInputsRegister),
    };

    fetch(`${api_general_root}/auth/register`, options)
      .then( async (req) => {
        const res_status = req.status
        const data = await req.json()
        console.log(data)
        if (res_status === 201) {
          console.log(res_status)
          alert("se registró el usuario correctamente ✔")
          router.push("/");
        } 
        return data
      })
      .then((res) => console.log(res));
  };

  const onSubmitLogin = (e: any) => {
    e.preventDefault();
    const FormInfo = new FormData(e.target);
    const dataInputsLogin = {
      email: FormInfo.get("email"),
      password: FormInfo.get("password"),
    };
    console.log(dataInputsLogin);

    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(dataInputsLogin),
    };

    fetch(`${api_general_root}/auth/login`, options)
      .then(async (req) => {
        const status_res = req.status;
        const data = await req.json();
        
        if (status_res === 200) {
          console.log(status_res)
          alert("se inició sesion")
          router.push("/layout");
        } else if (status_res === 403) {
          alert("Pusiste mal un dato, revisarlo");
        }
        return data;
      })
      .then((res) => console.log(res))
      .catch(err => console.error(err))
  };

  return (
    <div className="login-box">
      <div className="login-tabs">
        <button
          className={`tab ${tab === "login" ? "active" : ""}`}
          onClick={() => setTab("login")}
        >
          Iniciar Sesión
        </button>
        <button
          className={`tab ${tab === "register" ? "active" : ""}`}
          onClick={() => setTab("register")}
        >
          Registro
        </button>
      </div>

      <form
        onSubmit={onSubmitLogin}
        className={`form-area ${tab === "login" ? "active" : ""}`}
        id="login"
      >
        <InputComponent
          onChange={HandleChange}
          name="email"
          value={forM.email}
          type="email"
          placeholder="Email"
        />
        <InputComponent
          onChange={HandleChange}
          name="password"
          value={forM.password}
          type="password"
          placeholder="Contraseña"
        />

        <a className="forgot">¿Quieres resetear tu contraseña?</a>
        <ButtonComponent type="submit" className="btn-login">
          Iniciar Sesión
        </ButtonComponent>
      </form>

      <form
        onSubmit={onSubmitRegister}
        className={`form-area ${tab === "register" ? "active" : ""}`}
        id="register"
      >
        <LabelComponent htmlFor="nombre">Pon tu nombre</LabelComponent>
        <InputComponent
          id="nombre"
          onChange={HandleChange}
          name="nombre"
          value={forM.nombre}
          type="text"
          placeholder="Nombre"
        />
        <LabelComponent htmlFor="apellido">Pon tu apellido</LabelComponent>
        <InputComponent
          id="apellido"
          onChange={HandleChange}
          name="apellido"
          value={forM.apellido}
          type="text"
          placeholder="Apellido"
        />
        <LabelComponent htmlFor="fechaNacimiento">
          Pon tu fecha de nacimiento
        </LabelComponent>
        <InputComponent
          id="fechaNacimiento"
          onChange={HandleChange}
          name="fechaNacimiento"
          value={forM.fechaNacimiento}
          type="date"
          placeholder="fecha de nacimiento"
        />
        <LabelComponent htmlFor="correo">Pon tu mail</LabelComponent>
        <InputComponent
          id="correo"
          onChange={HandleChange}
          name="email"
          value={forM.email}
          type="email"
          placeholder="Email"
        />
        <LabelComponent htmlFor="contraseña">Pon tu contraseña</LabelComponent>
        <InputComponent
          id="contraseña"
          onChange={HandleChange}
          name="password"
          value={forM.password}
          type="password"
          placeholder="Contraseña"
        />

        <ButtonComponent type="submit">Registrarse</ButtonComponent>
      </form>
    </div>
  );
}
