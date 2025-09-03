import { UserData } from '../types';
import { axiosInstance } from './client/instance';

const path = 'user';

export const getCurrentUser = async (id: number) => {
  const response = await axiosInstance.post<UserData>(`${path}/me`, { id });
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await axiosInstance.post(path, { id });
  return response.data;
};
