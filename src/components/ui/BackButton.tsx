import React from 'react';
import { useNavigate } from 'react-router';
import BackArrow from '../../assets/icons/BackArrow';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className={`
        bg-radial-green flex cursor-pointer items-center justify-center rounded-full rounded-tl-none
        border border-neon-green px-2 py-1 text-white shadow-inset-1
        active:shadow-inset-top active:shadow-glow-small active:bg-dark-blue active:text-neon-green
        disabled:cursor-not-allowed disabled:border-coral-6 disabled:text-coral-6
      `}
    >
      <BackArrow color='currentColor'/>
    </button>
  );
};

export default BackButton;
