import {Store} from '@/types/domain';
import {api} from '../httpClient';

const getStores = async (
  page: number = 1,
  keyword: string = '',
): Promise<Store[]> => {
  const {data} = await api.get(`/stores?page=${page}&keyword=${keyword}`);
  return data;
};

export {getStores};
