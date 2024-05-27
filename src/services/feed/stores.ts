import { Store } from "@/types/domain";
import { api } from "../httpClient";


const getStores = async (page: number = 1): Promise<Store[]> => {
  const {data} = await api.get(`/stores?page=${page}`);
  return data;
};

export {getStores};
