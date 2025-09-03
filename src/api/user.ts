import { UserData } from '../types';
import { axiosInstance } from './client/instance';

const path = 'user';

export const getCurrentUser = async (data: UserData) => {
  const response = await axiosInstance.post(`${path}/me`, {
    body: data,
  });
  return response.data;
};

export const deleteUser = async (data: UserData) => {
  const response = await axiosInstance.post(path, {
    body: data,
  });
  return response.data;
};
