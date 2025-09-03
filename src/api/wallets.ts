import { UserData } from '../types';
import { axiosInstance } from './client/instance';

const path = 'wallets';

type ConnectWalletRequestData = {
  address: string;
  tgUser: UserData;
};

type VerifySignatureRequestData = {
  address: string;
  signature: string;
  tgUser: UserData;
};

export const connectWallet = async (data: ConnectWalletRequestData) => {
  const response = await axiosInstance.post(`${path}/connect-external`, {
    body: data,
  });
  return response.data;
};

export const verifySignature = async (data: VerifySignatureRequestData) => {
  const response = await axiosInstance.post(`${path}/verify-signature`, {
    body: data,
  });
  return response.data;
};
