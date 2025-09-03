import { Swiper as ReactSwipper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import './styles.css';
import Slide from '../Slide';
import Plus from '../../../assets/icons/Plus';
import React, { useMemo } from 'react';
import Connect from '../../../assets/icons/Connect';
import Window from '../../../assets/icons/Window';
import Asset from '../../../assets/icons/Asset';
import { OnboardingSlide, UserData } from '../../../types';
import Flag from '../../../assets/icons/Flag';
import Progress from '../Progress';
import { useUser } from '../../../contexts/UserContext';
import { SOURCES_DATA } from '../../../api/client/config';
import Check from '../../../assets/icons/Check';

const TOTAL_STEPS = 4;

const Swipper = () => {
  const { userData } = useUser();

  const stepsProgress = useMemo(() => {
    const connectedSources = SOURCES_DATA.filter(
      (source) => !!userData?.[source.key as keyof UserData],
    );

    const hasSourceConnected = connectedSources.length > 0;
    const hasWalletConnected = !!userData?.walletConnected;
    const hasAsset = false; // TODO: update when assets are ready
    const hasTwoAssets = false; // TODO: update when assets are ready

    const stepsCompleted = [
      hasSourceConnected,
      hasWalletConnected,
      hasAsset,
      hasTwoAssets,
    ].filter(Boolean).length;

    return {
      hasSourceConnected,
      hasWalletConnected,
      hasAsset,
      hasTwoAssets,
      stepsCompleted,
    };
  }, [userData]);

  const mainSlide: OnboardingSlide = useMemo(
    () => ({
      id: 0,
      title: 'Onboarding Progress',
      description: `${stepsProgress.stepsCompleted}/${TOTAL_STEPS} completed`,
      Icon: Flag,
    }),
    [stepsProgress],
  );

  const onboardingSlides: OnboardingSlide[] = useMemo(
    () => [
      {
        id: 1,
        title: stepsProgress.hasSourceConnected
          ? 'Completed!'
          : '1. Connect first data source',
        description: 'Connect your data resource to complete',
        Icon: stepsProgress.hasSourceConnected ? Check : Plus,
      },
      {
        id: 2,
        title: stepsProgress.hasWalletConnected
          ? 'Completed!'
          : '2. Connect your wallet',
        description: 'Connect your crypto wallet to complete',
        Icon: stepsProgress.hasWalletConnected ? Check : Connect,
      },
      {
        id: 3,
        title: stepsProgress.hasAsset
          ? 'Completed!'
          : '3. Create your first asset',
        description: 'Upload your first asset to complete',
        Icon: stepsProgress.hasAsset ? Check : Window,
      },
      {
        id: 4,
        title: stepsProgress.hasTwoAssets
          ? 'Completed!'
          : '4. Create 2 media asset',
        description: 'Upload media or art asset to complete',
        Icon: stepsProgress.hasTwoAssets ? Check : Asset,
      },
    ],
    [stepsProgress],
  );

  return (
    <ReactSwipper
      direction={'vertical'}
      effect='cards'
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination, EffectCards]}
      cardsEffect={{
        rotate: false,
        perSlideOffset: 10,
      }}
    >
      <SwiperSlide>
        <Slide slide={mainSlide}>
          <div className='flex w-full flex-col gap-1'>
            <div className='flex gap-0.5 text-xs text-black'>
              <span className='font-medium'>Complete all steps to receive</span>

              <span className='font-bold'>10 DAAC</span>
            </div>

            <Progress
              total={TOTAL_STEPS}
              ready={stepsProgress.stepsCompleted}
              text={`${stepsProgress.stepsCompleted}/${TOTAL_STEPS}`}
            />
          </div>
        </Slide>
      </SwiperSlide>

      {onboardingSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
    </ReactSwipper>
  );
};

export default Swipper;
