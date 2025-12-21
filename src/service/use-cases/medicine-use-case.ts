import { MedicineEntity } from "@/types/medicine";
import { api_mock, api_general } from "../api-general";
import { IRecordatorios, PutData } from "@/types/recordatorios";



export const postMedicine = async ( body: string, token: string) => {
	const data = await api_general.post<MedicineEntity>('/appointments', body, token);
	return data;
};

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjcmlzdGlhbjdAZ21ha…zQyfQ.1acTXAAG_s6_kk7CHtUf5ryzerqJazgHa48oiFnSZs0"

export const getMedicine = async () => {
  try {
    const res = await api_general.get<MedicineEntity>("/medicament/VACUNA?page=0&size=3&orderBy=true", {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    console.log(res)
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
