import React from "react";
import { useNavigate } from "react-router";
import BackArrow from "../../assets/icons/BackArrow";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="py-1 px-2 border rounded-tl-none rounded-full text-marine border-marine bg-linear-custom flex items-center justify-center"
    >
      <BackArrow />
    </button>
  );
};

export default BackButton;
