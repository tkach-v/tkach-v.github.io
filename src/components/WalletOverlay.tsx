import { useUser } from '../contexts/UserContext';
import { useWalletConnect } from '../hooks/useWalletConnetc';
import Button from './ui/Button';

const WalletOverlay = () => {
  const { userData } = useUser();
  const { handleWalletConnect } = useWalletConnect();

  return !userData?.walletConnected ? null : (
    <div
      className={`
        absolute inset-0 z-50 flex flex-1 items-center justify-center bg-black/40 backdrop-blur-sm
      `}
    >
      <Button
        variant='outlined'
        type='button'
        className='w-5/6'
        onClick={handleWalletConnect}
      >
        Connect a wallet
      </Button>
    </div>
  );
};

export default WalletOverlay;
