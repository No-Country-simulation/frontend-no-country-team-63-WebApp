"use client";

import { useState, useEffect } from "react";
import { Form } from "react-hook-form";

import ButtonComponent from "./ui/ButtonComponent";
import InputComponent from "./ui/InputComponent";
import LabelComponent from "./ui/LabelComponent";
import { RegisterPerson } from "@/types/register";
import { form_state_register } from "@/mock/mock";
import { api_general_root } from "@/service/api-general";
import { useRouter } from "next/navigation";

export default function LoginBox() {
  const [tab, setTab] = useState<"login" | "register">("login");
  
  const [form, setform] = useState<RegisterPerson>(form_state_register);
  const router = useRouter();
  
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
      ...form,
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
      .then((req) => req.json())
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
        const data = await req.json();

        if (req.status === 200) {
          router.push("/layout/inicio");

        }
        console.log(data)
        return data;
      })
      .then((res) => console.log(res));
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
          value={form.email}
          type="email"
          placeholder="Email"
        />
        <InputComponent
          onChange={HandleChange}
          name="password"
          value={form.password}
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
          value={form.nombre}
          type="text"
          placeholder="Nombre"
        />
        <LabelComponent htmlFor="apellido">Pon tu apellido</LabelComponent>
        <InputComponent
          id="apellido"
          onChange={HandleChange}
          name="apellido"
          value={form.apellido}
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
          value={form.fechaNacimiento}
          type="date"
          placeholder="fecha de nacimiento"
        />
        <LabelComponent htmlFor="correo">Pon tu mail</LabelComponent>
        <InputComponent
          id="correo"
          onChange={HandleChange}
          name="email"
          value={form.email}
          type="email"
          placeholder="Email"
        />
        <LabelComponent htmlFor="contraseña">Pon tu contraseña</LabelComponent>
        <InputComponent
          id="contraseña"
          onChange={HandleChange}
          name="password"
          value={form.password}
          type="password"
          placeholder="Contraseña"
        />

        <ButtonComponent type="submit">Registrarse</ButtonComponent>
      </form>
    </div>
  );
}
