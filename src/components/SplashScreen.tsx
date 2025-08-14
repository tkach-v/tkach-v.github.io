import { FC } from "react";

type Props = {
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SplashScreen: FC<Props> = ({ setIsReady }) => {
  return (
    <video
      src="/splash.webm"
      autoPlay
      muted
      playsInline
      onEnded={() => setIsReady(true)}
      className="w-full h-full object-cover"
    />
  );
};
