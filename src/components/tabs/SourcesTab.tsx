import { ethers } from 'ethers';
import { useEffect } from 'react';
import { API_CONFIG, SOURCES_DATA } from '../../api/client/config';
import { useTelegram } from '../../contexts/TelegramContext';
import { useUser } from '../../contexts/UserContext';
import { Source, UserData } from '../../types';
import { initWalletConnect } from '../../wallet';
import SourceCard from '../cards/SourceCard';
import { disconnect } from '../../api/disconnect';
import { connectWallet, verifySignature } from '../../api/wallets';

const SourcesTab = () => {
  const { userData, loading, fetchUserData } = useUser();
  const { tgUser, tgApp } = useTelegram();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log('Page became visible, refreshing data...');
        void fetchUserData();
      }
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'AUTH_SUCCESS') {
        console.log('Auth success message received, refreshing data...');
        void fetchUserData();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('message', handleMessage);

    return () => {
      console.log('SourcesTab unmounting, cleaning up...');
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  if (loading && !userData) {
    return (
      <div className='flex h-64 items-center justify-center'>
        <div className='text-white'>Loading...</div>
      </div>
    );
  }

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

  const handleSourceToggle = async (source: Source) => {
    if (source.key === 'walletConnected') {
      return await handleWalletConnect();
    }

    const connected = userData?.[source.key as keyof UserData];

    if (connected) {
      if (!window.confirm(`Disconnect ${source.name}?`)) return;

      try {
        await disconnect(source.name, tgUser?.id!);
        await fetchUserData();
      } catch (err) {
        //@ts-expect-error Type 'Error' includes message.
        alert(`Error: ${err.message}`);
      }
    } else {
      tgApp?.openLink(
        `${API_CONFIG.BASE_URL}/auth/${source.name.toLowerCase()}?telegram_id=${
          tgUser?.id
        }`,
      );
    }
  };

  return (
    <div className='mt-[20px] space-y-6'>
      <div className='flex flex-col font-medium'>
        <h2 className='text-lg text-white'>Connect your data sources:</h2>
        
        <span className='text-xs text-coral-2'>
          Earn income quickly and securely by connecting your profiles from
          trusted platforms:
        </span>
      </div>

      <div className='flex flex-col gap-3'>
        {SOURCES_DATA.map((source) => (
          <SourceCard
            key={source.key}
            source={source}
            connected={!!userData?.[source.key as keyof UserData]}
            onToggle={() => handleSourceToggle(source)}
          />
        ))}
      </div>
    </div>
  );
};

export default SourcesTab;
