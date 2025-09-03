import { UserData } from '../types';
import { axiosInstance } from './client/instance';

type ConnectWalletRequestData = {
  sourceName: string;
  userData: UserData;
};

export const disconnect = async (data: ConnectWalletRequestData) => {
  const response = await axiosInstance.post(
    `/${data.sourceName.toLowerCase()}/disconnect`,
    {
      body: data.userData,
    },
  );
  return response.data;
};
