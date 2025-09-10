const WalletOverlay = () => {
  return (
    <div className={`
      absolute inset-0 z-50 flex flex-1 items-center justify-center bg-black/40 backdrop-blur-sm
    `}>
      <div className='rounded-lg bg-black/60 px-6 py-3 text-white shadow-lg'>
        Connect a wallet
      </div>
    </div>
  );
};

export default WalletOverlay;

