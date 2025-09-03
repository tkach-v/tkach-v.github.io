import { FC } from 'react';

type Props = {
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
};

const SplashScreen: FC<Props> = ({ setIsReady }) => {
  return (
    <video
      src='/splash.mp4'
      autoPlay
      muted
      playsInline
      onEnded={() => setIsReady(true)}
      className='h-full w-full object-cover'
    />
  );
};

export default SplashScreen;