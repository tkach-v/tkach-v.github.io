import { useNavigate } from 'react-router';
import { useUser } from '../../contexts/UserContext';
import { TabPathes } from '../../types';
import Button from '../ui/Button';
import ArrowsLine from '../../assets/icons/ArrowsLine';
import React from 'react';

export const assets = ['All', 'Music', 'NFT', 'Dataset', 'Links', 'Retweets'];

const UserTab = () => {
  const { userData } = useUser();
  const navigate = useNavigate();

  const goToData = (path: string) => navigate('/' + path);

  /*const handleGoogleAuth = () => {
    if (userData?.googleSub) {
      alert("Disconnect functionality coming soon!");
    } else {
      tgApp?.openLink(
        `${API_CONFIG.BASE_URL}/auth/google?telegram_id=${tgUser?.id}`,
      );
    }
  };

  const deleteUser = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete all your data? This action cannot be undone.",
      )
    )
      return;

    try {
      const res = await fetch(`${API_CONFIG.BASE_URL}/user`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tgUser),
      });

      if (res.status === 204) {
        tgApp?.close();
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (err) {
      //@ts-expect-error Type 'Error' includes message.
      alert(err.message);
    }
  };*/

  return (
    <div className='mt-[20px] flex h-full flex-col justify-between space-y-3'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-base font-medium text-white'>Your Assets:</h2>

        <div className='flex w-full flex-row gap-3'>
          <div
            className='flex-1 cursor-pointer rounded-[12px] bg-linear-dark p-[1px]'
            onClick={() => goToData(TabPathes.ASSETS)}
          >
            <div className='relative overflow-hidden rounded-[12px]'>
              <img
                className='h-[214px] w-full object-cover'
                src='/images/music.jpg'
                alt='music'
              />

              <div className='bg-black_gradient absolute inset-0' />

              <div className='absolute bottom-0 left-0 right-0 p-2'>
                <p className='text-sm font-medium text-white'>
                  Monetise your music & assets
                </p>
              </div>
            </div>
          </div>

          <div
            className='flex-1 cursor-pointer rounded-[12px] bg-linear-dark p-[1px]'
            onClick={() => goToData(TabPathes.ASSETS)}
          >
            <div className='relative overflow-hidden rounded-[12px]'>
              <img
                className='h-[214px] w-full object-cover'
                src='/images/social_media.png'
                alt='social media'
              />

              <div className='bg-black_gradient absolute inset-0' />

              <div className='absolute bottom-0 left-0 right-0 p-2'>
                <p className='text-sm font-medium text-white'>
                  Monetise your social media presence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-auto flex'>
        <Button
          onClick={() => goToData(TabPathes.DATA)}
          variant='solid'
          iconBack={<ArrowsLine color='currentColor'/>}
        >
          Connect your data
        </Button>
      </div>

      {/*<UserInfoCard userData={userData} />

      <div className="space-y-3">
        {!userData?.googleSub && (
          <Button
            onClick={handleGoogleAuth}
            variant="primary"
            icon="fab fa-google"
          >
            Connect Google Account
          </Button>
        )}

        <Button
          onClick={fetchUserData}
          variant="secondary"
          icon="fas fa-sync-alt"
        >
          Refresh Data
        </Button>

        <Button onClick={deleteUser} variant="danger" icon="fas fa-trash">
          Delete All Data
        </Button>
      </div>*/}
    </div>
  );
};

export default UserTab;
