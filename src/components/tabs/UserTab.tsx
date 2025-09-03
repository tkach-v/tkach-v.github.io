import { useNavigate } from 'react-router';
import { SOURCES_DATA } from '../../api/client/config';
import { useUser } from '../../contexts/UserContext';
import { TabPathes, UserData } from '../../types';
import SourceCard from '../cards/SourceCard';
import Swipper from '../onbording/Swipper';
import Button from '../ui/Button';
import Tag from '../ui/Tag';

export const assets = ['All', 'Music', 'NFT', 'Dataset', 'Links', 'Retweets'];

const UserTab = () => {
  const { userData } = useUser();
  const navigate = useNavigate();

  const goToData = (path: string) => navigate('/' + path);

  console.log('---userData---', userData);

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
    <div className='space-y-6'>
      <Swipper />

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col font-medium'>
          <h2 className='text-lg text-marine'>Your Data:</h2>

          <span className='text-xs text-teal-2'>
            Earn income quickly and securely by connecting your profiles from
            trusted platforms:
          </span>
        </div>

        {SOURCES_DATA.filter(
          (source) => !!userData?.[source.key as keyof UserData],
        ).map((source) => (
          <SourceCard
            key={source.key}
            source={source}
            connected={!!userData?.[source.key as keyof UserData]}
          />
        ))}

        <Button
          onClick={() => goToData(TabPathes.DATA)}
          variant='solid'
          iconBack={<i className='fa-solid fa-arrow-right' />}
        >
          Connect data
        </Button>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col font-medium'>
          <h2 className='text-lg text-marine'>Your Assets:</h2>

          <span className='text-xs text-teal-2'>
            You haven't any assets yet
          </span>

          <div className='scrollbar-hide mt-2 flex w-full flex-row gap-2 overflow-x-auto p-1'>
            {assets &&
              assets.map((asset, index) => (
                <Tag key={index} text={asset} active />
              ))}
          </div>
        </div>

        <Button
          onClick={() => goToData(TabPathes.ASSETS)}
          variant='solid'
          iconBack={<i className='fa-solid fa-plus' />}
        >
          Add asset
        </Button>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col font-medium'>
          <h2 className='text-lg text-marine'>Wallet:</h2>

          <span className='text-xs text-teal-2'>Here will be your balance</span>
        </div>

        <Button
          onClick={() => goToData(TabPathes.WALLET)}
          variant='solid'
          iconBack={<i className='fa-solid fa-arrow-right' />}
        >
          Connect wallet
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
