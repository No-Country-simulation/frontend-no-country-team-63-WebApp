import { RegisterType } from "@/_types/register";
import { api_general } from "../api-general";



export const postRegister = async (data: RegisterType) => {
  try {
    const res = await api_general.post("/", data);
    console.log("Se creó el usuario");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};