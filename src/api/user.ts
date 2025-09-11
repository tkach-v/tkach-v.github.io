import { UserData } from '../types';
import { axiosInstance } from './client/instance';

const path = 'user';

export const getCurrentUser = async (id: number) => {
  const response = await axiosInstance.post<UserData>(`${path}/me`, { id });
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axiosInstance.delete(path, { data: { id } });
  return response.data;
};

export const setFirstLogin = async (id: number) => {
  await axiosInstance.post(`${path}/set_first_login`, { id });
};
