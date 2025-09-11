import { FC } from 'react';
import Button from '../components/ui/Button';
import ArrowsLine from '../assets/icons/ArrowsLine';
import { useUser } from '../contexts/UserContext';
import { setFirstLogin } from '../api/user';
import { useTelegram } from '../contexts/TelegramContext';

const SplashPage: FC = () => {
  const { setUserData } = useUser();
  const { tgUser } = useTelegram();

  const handleStart = async () => {
    setUserData((prev) => {
      if (!prev) return prev;
      return { ...prev, firstLogin: false };
    });

    try {
      tgUser && await setFirstLogin(tgUser.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex h-full w-full flex-col justify-between bg-[#000000]'>
      <img
        src='/images/splash.png'
        alt='splash'
        className='w-full object-contain'
      />

      <div className='flex flex-col gap-3 px-11 text-4xl font-extralight text-white'>
        <div>monetise your</div>

        <div className='font-extrabold'>digital behaviour,</div>

        <div className='flex items-center gap-2'>
          <div>enjoy your</div>

          <div className='font-extrabold'>life</div>
        </div>

        <Button
          onClick={handleStart}
          variant='solid'
          iconBack={<ArrowsLine color='currentColor' />}
          className='mb-20 mt-7 w-3/5'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default SplashPage;
