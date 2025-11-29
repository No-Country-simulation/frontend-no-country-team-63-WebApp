import { RegisterPerson } from "@/_types/register";
import { api_general } from "../api-general";



export const postRegisterPerson = async (data: RegisterPerson) => {
  try {
    const res = await api_general.post("/auth/register", data);
    console.log("Se creó el usuario");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};