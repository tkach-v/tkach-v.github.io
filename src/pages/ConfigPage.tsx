import React, { useState } from 'react';
import BackButton from '../components/ui/BackButton';
import Accordion from '../components/ui/Accordion';
import Radio from '../components/ui/Radio';
import Checkbox from '../components/ui/Checkbox';
import Button from '../components/ui/Button';
import { useTelegram } from '../contexts/TelegramContext';
import { deleteUser } from '../api/user';

const ConfigPage = () => {
  const [selected, setSelected] = useState('access');
  const [isPaid, setIsPaid] = useState(false);
  const [isPaid2, setIsPaid2] = useState(false);
  const [isPaid3, setIsPaid3] = useState(false);
  const { tgUser, tgApp } = useTelegram();

  const logout = async () => {
    if (
      !window.confirm(
        'Are you sure you want to delete all your data? This action cannot be undone.',
      )
    )
      return;

    try {
      if (tgApp && tgUser) {
        await deleteUser(tgUser.id);
        tgApp.close();
      }
    } catch (err) {
      //@ts-expect-error Type 'Error' includes message.
      alert(err.message);
    }
  };

  return (
    <div
      className={`
        flex min-h-screen flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950
      `}
    >
      <div className='mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 p-4'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-row gap-2'>
            <BackButton />

            <div className='text-sm font-semibold text-green-blue-0'>
              <h2 className='text-marine'>Controls</h2>

              <div className='text-green-blue-2'>
                Here you can configure your preferences
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <Accordion title='Who can access my data?'>
              <div className='flex flex-col pt-4'>
                <Radio
                  label='Paid access only'
                  name='paid'
                  value='access'
                  checked={selected === 'access'}
                  onChange={setSelected}
                />

                <Radio
                  label='Subscription only'
                  name='subscription'
                  value='subscription'
                  checked={selected === 'subscription'}
                  onChange={setSelected}
                />

                <Radio
                  label='Free access (open data)'
                  name='free'
                  value='free'
                  checked={selected === 'free'}
                  onChange={setSelected}
                />
              </div>
            </Accordion>

            <Accordion title='Industries allowed:'>
              <div className='flex flex-col pt-4'>
                <Radio
                  label='Paid access only'
                  name='paid'
                  value='access'
                  checked={selected === 'access'}
                  onChange={setSelected}
                />

                <Radio
                  label='Subscription only'
                  name='subscription'
                  value='subscription'
                  checked={selected === 'subscription'}
                  onChange={setSelected}
                />

                <Radio
                  label='Free access (open data)'
                  name='free'
                  value='free'
                  checked={selected === 'free'}
                  onChange={setSelected}
                />
              </div>
            </Accordion>

            <Accordion title='Geographic restrictions'>
              <div className='flex flex-col pt-4'>
                <Radio
                  label='Paid access only'
                  name='paid'
                  value='access'
                  checked={selected === 'access'}
                  onChange={setSelected}
                />

                <Radio
                  label='Subscription only'
                  name='subscription'
                  value='subscription'
                  checked={selected === 'subscription'}
                  onChange={setSelected}
                />

                <Radio
                  label='Free access (open data)'
                  name='free'
                  value='free'
                  checked={selected === 'free'}
                  onChange={setSelected}
                />
              </div>
            </Accordion>

            <Accordion title='Data Deletion'>
              <div className='flex flex-col gap-4 pt-4'>
                <Button
                  onClick={() => console.log('Delete my data')}
                  variant='outlined'
                >
                  Delete my data
                </Button>

                <Button
                  onClick={() => console.log('Delete my account')}
                  variant='outlined'
                >
                  Delete my account
                </Button>
              </div>
            </Accordion>

            <Accordion title='Revenue preferences'>
              <div className='flex flex-col pt-4'>
                <Radio
                  label='Paid access only'
                  name='paid'
                  value='access'
                  checked={selected === 'access'}
                  onChange={setSelected}
                />

                <Radio
                  label='Subscription only'
                  name='subscription'
                  value='subscription'
                  checked={selected === 'subscription'}
                  onChange={setSelected}
                />

                <Radio
                  label='Free access (open data)'
                  name='free'
                  value='free'
                  checked={selected === 'free'}
                  onChange={setSelected}
                />
              </div>
            </Accordion>

            <Accordion title='Data sensitivity'>
              <div className='flex flex-col gap-3 pt-4'>
                <Checkbox
                  label='Allow usage for AI training'
                  checked={isPaid}
                  onChange={setIsPaid}
                />

                <Checkbox
                  label='Allow resale by third parties'
                  checked={isPaid2}
                  onChange={setIsPaid2}
                />

                <Checkbox
                  label='Anonymise personal identifiers before sharing'
                  checked={isPaid3}
                  onChange={setIsPaid3}
                />
              </div>
            </Accordion>
          </div>
        </div>

        <div className='mt-auto flex flex-col gap-4'>
          <Button onClick={logout} variant='outlined'>
            Logout
          </Button>

          <Button
            onClick={() => console.log(' Save Preferences clicked')}
            variant='solid'
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfigPage;
