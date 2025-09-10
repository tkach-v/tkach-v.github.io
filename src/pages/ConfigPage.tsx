import React, { useState } from 'react';
import BackButton from '../components/ui/BackButton';
import Accordion from '../components/ui/Accordion';
import Radio from '../components/ui/Radio';
import Checkbox from '../components/ui/Checkbox';
import Button from '../components/ui/Button';
import { useTelegram } from '../contexts/TelegramContext';
import { deleteUser } from '../api/user';
import ArrowsLine from '../assets/icons/ArrowsLine';
import { Link } from 'react-router';

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
        from-gray-950 via-gray-900 to-gray-950 flex min-h-screen flex-col bg-gradient-to-br
      `}
    >
      <div className='mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 p-4'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-row gap-2 border-b border-neon-green pb-2'>
            <BackButton />

            <div className='text-sm font-semibold text-green-blue-0'>
              <h2 className='text-white'>Controls</h2>

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

            <Accordion title='Unconnection controls '>
              <div className='flex flex-col gap-4 pt-4'>
                <Button
                  onClick={() => console.log('Delete my account')}
                  variant='outlinedPink'
                >
                  Delete my account
                </Button>
              </div>
            </Accordion>

            <div className='flex flex-col gap-2'>
              <div
                className={`
                  text-md flex w-full items-center justify-between text-left font-medium uppercase
                  text-green-blue-1 transition-colors
                `}
              >
                Privacy Policy
              </div>

              <div
                className={`
                  w-full text-left text-sm font-medium text-green-blue-2 transition-colors
                `}
              >
                l acknowledge that I agree to the
                <Link
                  className={`
                    mx-1 bg-green-gradient bg-clip-text text-transparent underline
                    decoration-neon-green
                  `}
                >
                  Terms of Use
                </Link>
                and have read the

                <Link
                  className={`
                    ml-1 bg-green-gradient bg-clip-text text-transparent underline
                    decoration-neon-green
                  `}
                >
                  Privacy Policy
                </Link>
                .
              </div>
            </div>
          </div>
        </div>

        <div className='mt-auto flex flex-col gap-4'>
          <Button
            onClick={() => console.log(' Save Preferences clicked')}
            variant='solid'
            iconBack={<ArrowsLine color='currentColor' />}
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfigPage;
