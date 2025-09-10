import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MonetiseSettingsFormValues, MonetiseSettingsSchema } from '../validation';
import { zodResolver } from '@hookform/resolvers/zod';
import BackButton from '../components/ui/BackButton';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../components/ui/Form';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Tag from '../components/ui/Tag';
import { assets } from '../components/tabs/UserTab';
import Range from '../components/ui/Range';
import Checkbox from './ui/Checkbox';
import Wallet from '../assets/icons/Wallet';
import Copy from '../assets/icons/Copy';
import { Link } from 'react-router';

const MonetiseSettingsForm = () => {
  const form = useForm<MonetiseSettingsFormValues>({
    resolver: zodResolver(MonetiseSettingsSchema),
    defaultValues: {
      price: '0.0',
      royalty: 0,
      terms: false,
    },
  });

  const onSubmitHandler = (data: MonetiseSettingsFormValues) => {
    console.log('Form data:', data);
  };

  const address = '0xb8E08...';
  const [copyText, setCopyText] = useState('Copy address');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopyText('Copied');
      setTimeout(() => setCopyText('Copy address'), 3000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className='mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 p-4'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row gap-2'>
          <BackButton />

          <div className='text-sm font-semibold'>
            <h2 className='text-green-blue-0'>New Asset</h2>

            <div className='text-green-blue-2'>Asset input details</div>
          </div>
        </div>

        <Input
          value='Electro Odyssey'
          label='Asset Name'
          placeholder='Asset Name'
          id='Asset Name'
        />

        <div className='flex flex-col font-medium'>
          <h2 className='text-sm text-coral'>Asset info:</h2>

          <div className='scrollbar-hide mb-3 mt-2 flex w-full flex-row gap-2 overflow-x-auto p-1'>
            {assets && assets.map((asset, index) => (<Tag key={index} text={asset} active />))}
          </div>

          <h3 className='text-sm font-semibold text-green-blue-0'>
            Spotify.org/my_songs
          </h3>
        </div>


        <Form {...form}>
          <form className='flex flex-1 flex-col gap-6 overflow-y-auto'>

            <FormField
              control={form.control}
              name='royalty'
              render={({ field, fieldState }) => (
                <FormItem className='flex flex-col gap-1'>
                  <FormControl>
                    <Range
                      {...field}
                      value={field.value}
                      setValue={(val) => field.onChange(val)}
                      label='Royalty %:'
                    />
                  </FormControl>

                  {fieldState.error && (
                    <FormLabel className='text-[12px] text-red'>
                      {fieldState.error.message}
                    </FormLabel>
                  )}
                </FormItem>
              )}
            />

            <div className='flex flex-col gap-1 font-medium'>
              <div className='text-sm text-coral'>Wallet:</div>

              <div className='flex flex-row items-center gap-1 text-sm text-green-blue-3'>
                <Wallet />

                {address}
              </div>

              <div
                className={`
                  flex cursor-pointer flex-row items-center gap-1 text-sm text-green-blue-3
                `}
                onClick={handleCopy}
              >
                <Copy />

                {copyText}
              </div>
            </div>

            <FormField
              control={form.control}
              name='price'
              render={({ field, fieldState }) => (
                <FormItem className='flex flex-col gap-1'>
                  <FormControl>
                    <Input
                      {...field}
                      label='Set Up Your Price:'
                      placeholder='0.0'
                      currency
                    />
                  </FormControl>

                  {fieldState.error && (
                    <FormLabel className='text-[12px] text-red'>
                      {fieldState.error.message}
                    </FormLabel>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='terms'
              render={({ field, fieldState }) => (
                <FormItem className='flex flex-col gap-1'>
                  <FormControl>
                    <Checkbox
                      {...field}
                      checked={field.value}
                      onChange={(val) => field.onChange(val)}
                      label={
                        <div className={`
                          w-full text-left text-sm font-medium text-green-blue-2 transition-colors
                        `}>
                            l acknowledge that I agree to the
                          <Link className={`
                            mx-1 bg-green-gradient bg-clip-text text-transparent underline
                            decoration-neon-green
                          `}>
                              Terms of Use
                          </Link>

                            and have read the

                          <Link className={`
                            ml-1 bg-green-gradient bg-clip-text text-transparent underline
                            decoration-neon-green
                          `}>
                              Privacy Policy
                          </Link>.
                        </div>
                      }
                    />
                  </FormControl>

                  {fieldState.error && (
                    <FormLabel className='text-[12px] text-red'>
                      {fieldState.error.message}
                    </FormLabel>
                  )}
                </FormItem>
              )}
            />

          </form>
        </Form>
      </div>

      <div className='mt-auto'>
        <Button
          disabled={!form.formState.isValid}
          type='submit'
          onClick={form.handleSubmit(onSubmitHandler)}
          variant='solid'
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default MonetiseSettingsForm;