import React, { useState } from 'react';
import AddNewAssetsForm from '../components/AddNewAssetsForm';
import MonetiseSettingsForm from '../components/MonetiseSettingsForm';


const NewAssetsPage = () => {
  const [step, setStep] = useState(1);

  const renderStep = (step: number) => {
    switch (step) {
    case 1:
      return <AddNewAssetsForm onSubmit={() => setStep(step + 1)} />;
    default:
      return <MonetiseSettingsForm />;
    }
  };

  return (
    <div className='from-gray-950 via-gray-900 to-gray-950 flex min-h-screen bg-gradient-to-br'>
      {renderStep(step)}
    </div>
  );
};

export default NewAssetsPage;