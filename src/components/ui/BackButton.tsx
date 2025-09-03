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
        flex items-center justify-center rounded-full rounded-tl-none border border-marine
        bg-linear-custom px-2 py-1 text-marine
      `}
    >
      <BackArrow />
    </button>
  );
};

export default BackButton;
