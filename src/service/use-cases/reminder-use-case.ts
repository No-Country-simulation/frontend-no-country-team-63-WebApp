import { api_mock } from "../api-general";
import { IRecordatorios } from "@/types/recordatorios";

export const postRecordatorios = async (data: IRecordatorios) => {
  try {
    const res = await api_mock.post("/recordatorio", data);
    console.log("Se creó el recordatorio");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getRecordatorios = async () => {
  try {
    const res = await api_mock.get("/recordatorio");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
interface PutData {
  id: string;
  body: IRecordatorios;
}

export const putRecordatorios = async ({ id, body }: PutData) => {
  try {
    const res = await api_mock.put(`/recordatorio/${id}`, body);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const deleteRecordatorios = async (id: string) => {
  try {
    const res = await api_mock.delete(`/recordatorio/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
