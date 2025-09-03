import { axiosInstance } from './client/instance';

const path = 'wallets';

export const connectWallet = async (id: number, address: string) => {
  const response = await axiosInstance.post(`${path}/connect-external`, {
    id,
    address,
  });
  return response.data;
};

export const verifySignature = async (
  id: number,
  address: string,
  signature: string,
) => {
  const response = await axiosInstance.post(`${path}/verify-signature`, {
    id,
    address,
    signature,
  });
  return response.data;
};
