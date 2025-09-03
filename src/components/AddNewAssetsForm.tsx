import React from 'react';
import BackButton from '../components/ui/BackButton';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../components/ui/Form';
import Input from '../components/ui/Input';
import MultiSelector from '../components/ui/MultiSelector';
import { Option } from '../types';
import FileUpload from '../components/ui/FileUpload';
import TextArea from './ui/TextArea';
import Button from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { NewAssetsFormValues, NewAssetsSchema } from '../validation';
import { zodResolver } from '@hookform/resolvers/zod';

const options = [
  { label: 'All', value: 'All' },
  { label: 'Music', value: 'Music' },
  { label: 'NFT', value: 'NFT' },
  { label: 'Dataset', value: 'Dataset' },
  { label: 'Links', value: 'Links' },
  { label: 'Retweets', value: 'Retweets' },
];

type Props = {
  onSubmit: () => void;
}

const AddNewAssetsForm: React.FC<Props> = ({ onSubmit }) => {
  const form = useForm<NewAssetsFormValues>({
    resolver: zodResolver(NewAssetsSchema),
    defaultValues: {
      name: '',
      metadata: [],
      thumbnail: null,
      content: '',
      description: '',
      document: null,
    },
  });

  const onSubmitHandler = (data: NewAssetsFormValues) => {
    console.log('Form data:', data);
    onSubmit();
  };

  return (
    <div className='mx-auto flex h-full max-w-2xl flex-col justify-between p-4'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row gap-2'>
          <BackButton />

          <div className='text-sm font-semibold text-green-blue-0'>
            <h2 className='text-green-blue-0'>New Asset</h2>

            <div className='text-green-blue-2'>Asset input details</div>
          </div>
        </div>


        <Form {...form}>
          <form className='flex flex-1 flex-col gap-4 overflow-y-auto'>
            <FormField
              control={form.control}
              name='name'
              render={({ field, fieldState }) => (
                <FormItem className='flex flex-col gap-1'>
                  <FormControl>
                    <Input
                      {...field}
                      label='Asset Name'
                      placeholder='Pick a name'
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
              name='metadata'
              render={({ field, fieldState }) => (
                <FormItem className='flex flex-col gap-1'>
                  <FormControl>
                    <MultiSelector
                      value={field.value || []}
                      setValue={(val: Option[]) => field.onChange(val)}
                      label='Metadata (tags)'
                      placeholder='Metadata tags'
                      options={options}
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
              name='thumbnail'
              render={({ field, fieldState }) => (
                <FormItem className='flex flex-col gap-1'>
                  <FormLabel className='block text-sm font-semibold text-green-blue-0'>
                    Thumbnail
                  </FormLabel>

                  <FormControl>
                    <FileUpload
                      name='img-upload'
                      file={field.value || null}
                      onChange={(val) => field.onChange(val)}
                      label='Upload Cover'
                      type='img'
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
              name='content'
              render={({ field, fieldState }) => (
                <FormItem className='flex flex-col gap-1'>
                  <FormControl>
                    <Input
                      {...field}
                      label='Content'
                      placeholder='Link'
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
              name='description'
              render={({ field, fieldState }) => (
                <FormItem className='flex flex-col gap-1'>
                  <FormControl>
                    <TextArea
                      {...field}
                      label='Description'
                      placeholder='Write a description'
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
              name='document'
              render={({ field, fieldState }) => {
                const isFile = field.value instanceof File;
                const isLink = typeof field.value === 'string' && field.value.length > 0;

                return (
                  <FormItem className='flex flex-col gap-1'>
                    <FormLabel className='block text-sm font-semibold text-green-blue-0'>
                      DRM Policy source
                    </FormLabel>

                    <FormControl>
                      <div className='flex flex-col gap-2'>
                        {!isFile && (
                          <Input
                            {...field}
                            value={isLink ? field.value : ''}
                            placeholder='Link'
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        )}

                        {!isLink && (
                          <FileUpload
                            name='document-upload'
                            label='Upload Policy source'
                            file={isFile ? field.value : null}
                            onChange={(file) => field.onChange(file)}
                            type='document'
                          />
                        )}
                      </div>
                    </FormControl>

                    {fieldState.error && (
                      <FormLabel className='text-[12px] text-red'>
                        {fieldState.error.message}
                      </FormLabel>
                    )}
                  </FormItem>
                );
              }}
            />
          </form>
        </Form>
      </div>

      <Button
        disabled={!form.formState.isValid}
        type='submit'
        onClick={form.handleSubmit(onSubmitHandler)}
        variant='solid'
      >
        Next
      </Button>
    </div>
  );
};

export default AddNewAssetsForm;