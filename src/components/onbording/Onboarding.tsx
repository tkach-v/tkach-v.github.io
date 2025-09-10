import { useMemo } from 'react';
import { SOURCES_DATA } from '../../api/client/config';
import Asset from '../../assets/icons/Asset';
import Connect from '../../assets/icons/Connect';
import Plus from '../../assets/icons/Plus';
import Window from '../../assets/icons/Window';
import { useUser } from '../../contexts/UserContext';
import { OnboardingStep, UserData } from '../../types';
import Step from './Step';
import Progress from './Progress';

const TOTAL_STEPS = 4;

const Onboarding = () => {
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

  const onboardingSteps: OnboardingStep[] = useMemo(
    () => [
      {
        id: 1,
        title: 'Connect first data source',
        completed: stepsProgress.hasSourceConnected,
        description: 'Connect your data resource to complete',
        Icon: Plus,
      },
      {
        id: 2,
        title: 'Connect your wallet',
        completed: stepsProgress.hasWalletConnected,
        description: 'Connect your crypto wallet to complete',
        Icon: Connect,
      },
      {
        id: 3,
        title: 'Create your first asset',
        completed: stepsProgress.hasAsset,
        description: 'Upload your first asset to complete',
        Icon: Window,
      },
      {
        id: 4,
        title: 'Create 2 media asset',
        completed: stepsProgress.hasTwoAssets,
        description: 'Upload media or art asset to complete',
        Icon: Asset,
      },
    ],
    [stepsProgress],
  );

  return (
    <div className='flex flex-col gap-4'>
      <Progress
        total={TOTAL_STEPS}
        ready={stepsProgress.stepsCompleted}
        text={`${stepsProgress.stepsCompleted}/${TOTAL_STEPS}`}
      />

      <div className='flex flex-col gap-3'>
        {onboardingSteps.map((step) => (
          <Step step={step} key={step.id} />
        ))}
      </div>
    </div>
  );
};

export default Onboarding;
