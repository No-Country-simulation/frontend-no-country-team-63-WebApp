import { api_general } from "../api-general";
import { IRecordatorios, PutData } from "@/types/recordatorios";

export const postRecordatorios = async (data: IRecordatorios) => {
  try {
    const res = await api_general.post("/recordatorio", data);
    console.log("Se creó el recordatorio");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getRecordatorios = async () => {
  try {
    const res = await api_general.get("/recordatorio");
    
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const putRecordatorios = async ({ id, body }: PutData) => {
  try {
    const res = await api_general.put(`/recordatorio/${id}`, body);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const deleteRecordatorios = async (id: string) => {
  try {
    const res = await api_general.delete(`/recordatorio/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
