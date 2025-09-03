import { ethers } from 'ethers';
import { useEffect } from 'react';
import { API_CONFIG, SOURCES_DATA } from '../../api/client/config';
import { useTelegram } from '../../contexts/TelegramContext';
import { useUser } from '../../contexts/UserContext';
import { Source, UserData } from '../../types';
import { initWalletConnect } from '../../wallet';
import SourceCard from '../cards/SourceCard';
import Swipper from '../onbording/Swipper';

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

    // 1. Fetch nonce from backend
    const res = await fetch(`${API_CONFIG.BASE_URL}/wallets/connect-external`, {
      method: 'POST',
      body: JSON.stringify({ address, ...tgUser }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const nonce = await res.json();

    // 2. Sign nonce
    const signature = await signer.signMessage(`Sign to verify: ${nonce}`);

    // 3. Send signature to backend
    await fetch(`${API_CONFIG.BASE_URL}/wallets/verify-signature`, {
      method: 'POST',
      body: JSON.stringify({
        address: address,
        signature: signature,
        ...tgUser,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await fetchUserData();
  };

  const handleSourceToggle = async (source: Source) => {
    if (source.key === 'walletConnected') {
      return await handleWalletConnect();
    }

    const connected = userData?.[source.key as keyof UserData];

    if (connected) {
      if (!window.confirm(`Disconnect ${source.name}?`)) return;

      try {
        const res = await fetch(
          `${API_CONFIG.BASE_URL}/${source.name.toLowerCase()}/disconnect`,
          {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tgUser),
          },
        );

        if (res.status === 204) {
          await fetchUserData();
        }
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
    <div className='space-y-6'>
      <Swipper />

      <div className='flex flex-col font-medium'>
        <h2 className='text-lg text-marine'>Connect your data sources:</h2>

        <span className='text-xs text-teal-2'>
          Earn income quickly and securely by connecting your profiles from
          trusted platforms:
        </span>
      </div>

      {SOURCES_DATA.map((source) => (
        <SourceCard
          key={source.key}
          source={source}
          connected={!!userData?.[source.key as keyof UserData]}
          onToggle={() => handleSourceToggle(source)}
        />
      ))}
    </div>
  );
};

export default SourcesTab;
