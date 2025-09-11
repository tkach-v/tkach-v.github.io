import { ethers } from 'ethers';
import { initWalletConnect } from '../wallet';
import { connectWallet, verifySignature } from '../api/wallets';
import { useUser } from '../contexts/UserContext';
import { useTelegram } from '../contexts/TelegramContext';

export const useWalletConnect = () => {
  const { fetchUserData } = useUser();
  const { tgUser } = useTelegram();

  const handleWalletConnect = async () => {
    console.log('Connecting to Wallet...');

    const provider = await initWalletConnect();
    const ethersProvider = new ethers.BrowserProvider(provider);
    const signer = await ethersProvider.getSigner();
    const address = await signer.getAddress();

    console.log('Connected address:', address);

    try {
      // 1. Fetch nonce from backend
      const nonce = await connectWallet(tgUser?.id!, address);

      // 2. Sign nonce
      const signature = await signer.signMessage(`Sign to verify: ${nonce}`);

      // 3. Send signature to backend
      await verifySignature(tgUser?.id!, address, signature);

      await fetchUserData();
    } catch (error) {
      //@ts-expect-error Type 'Error' includes message.
      setError(err.message);
    }
  };

  return { handleWalletConnect };
};
