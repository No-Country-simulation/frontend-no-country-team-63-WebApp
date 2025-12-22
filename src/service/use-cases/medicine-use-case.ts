import { MedicineEntity } from "@/types/medicine";
import {  api_general } from "../api-general";
import {  PutData } from "@/types/recordatorios";



export const postMedicine = async ( body: MedicineEntity, token: string) => {
  try {
    const data = await api_general.post<MedicineEntity>('/medicament', body, {
       headers: {
          Authorization: "Bearer "+ token
        }
    });
    return data;
  } catch (error) {
    console.log(error)
  }
};


export const getMedicine = async (token: string) => {
  try {
    const res = await api_general.get<MedicineEntity>("/medicament", {
      headers: {
        Authorization: "Bearer "+ token
      }
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const putMedicine = async ({ id, body }: PutData) => {
  try {
    const res = await api_general.put(`/medicament/${id}`, body);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const deleteMedicine = async (id: string) => {
  try {
    const res = await api_general.delete(`/medicament/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
