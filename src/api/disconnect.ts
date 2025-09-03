import { axiosInstance } from './client/instance';

export const disconnect = async (sourceName: string, id: number) => {
  const response = await axiosInstance.delete(
    `/${sourceName.toLowerCase()}/disconnect`,
    {
      data: { id },
    },
  );
  return response.data;
};
