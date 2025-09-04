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
        hover:bg-radial-fancy
        disabled:g-coral-8 disabled:cursor-not-allowed disabled:border-coral-6 disabled:text-coral-6
        flex items-center justify-center rounded-full rounded-tl-none border border-marine
        bg-linear-custom px-2 py-1 text-marine
        active:bg-green-blue-6
      `}
    >
      <BackArrow />
    </button>
  );
};

export default BackButton;
