import React, { useState } from 'react';
import BackButton from '../../components/ui/BackButton';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import MultiSelector from '../ui/MultiSelector';
import { Option } from '../../types';
import FileUpload from '../ui/FileUpload';
import Button from '../../components/ui/Button';

const options = [
  { label: 'All', value: 'All' },
  { label: 'Music', value: 'Music' },
  { label: 'NFT', value: 'NFT' },
  { label: 'Dataset', value: 'Dataset' },
  { label: 'Links', value: 'Links' },
  { label: 'Retweets', value: 'Retweets' },
];

const NewAssetsTab = () => {
  const [assetName, setAssetName] = useState<string>('');
  const [assetLink, setAssetLink] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [assetMetadata, setAssetMetadata] = useState<Option[]>([]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [document, setDocument] = useState<File | null>(null);
  const [documentLink, setDocumentLink] = useState<string>('');

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'>
      <div className='mx-auto flex max-w-2xl flex-col justify-between p-4 pb-20'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row gap-2'>
            <BackButton />

            <div className='text-sm font-semibold text-green-blue-0'>
              <h2 className='text-green-blue-0'>New Asset</h2>

              <div className='text-green-blue-2'>Asset input details</div>
            </div>
          </div>

          <div className='flex flex-col gap-2 p-2'>
            <Input
              id='name'
              label='Asset Name'
              value={assetName}
              placeholder='Pick a name'
              onChange={(e) => setAssetName(e.target.value)}
            />

            <MultiSelector
              label='Metadata (tags)'
              placeholder='Metadata tags'
              value={assetMetadata}
              setValue={setAssetMetadata}
              options={options} />

            <div className='flex flex-col gap-2'>
              <label className='block text-sm font-semibold text-green-blue-0'>
                Thumbnail
              </label>

              <FileUpload
                label='Upload Cover'
                file={thumbnail}
                onChange={setThumbnail}
                type='img'
              />
            </div>

            <Input
              id='content'
              label='Content'
              value={assetLink}
              placeholder='Link'
              onChange={(e) => setAssetLink(e.target.value)}
            />

            <TextArea
              id='description'
              label='Description'
              placeholder='Write a description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className='flex flex-col gap-2'>
              <label className='block text-sm font-semibold text-green-blue-0'>
                DRM Policy source
              </label>

              {!document && (
                <Input
                  id='documentDRM'
                  value={documentLink}
                  placeholder='Link'
                  onChange={(e) => setDocumentLink(e.target.value)}
                />
              )}

              {!documentLink && (
                <FileUpload
                  label='Upload Policy source'
                  file={document}
                  onChange={setDocument}
                  type='document'
                />
              )}
            </div>
          </div>
        </div>

        <Button
          onClick={() => console.log('next')}
          variant='solid'
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default NewAssetsTab;