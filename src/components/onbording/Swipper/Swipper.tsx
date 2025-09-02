import { Swiper as ReactSwipper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./styles.css";
import Slide from "../Slide";
import Plus from "../../../assets/icons/Plus";
import React from "react";
import Connect from "../../../assets/icons/Connect";
import Window from "../../../assets/icons/Window";
import Asset from "../../../assets/icons/Asset";
import { OnboardingSlide } from "../../../types";
import Flag from "../../../assets/icons/Flag";

const onboardingSlides: OnboardingSlide[] = [
  {
    id: 1,
    title: "1. Connect first data source",
    description: "Connect your data resource to complete",
    Icon: Plus,
  },
  {
    id: 2,
    title: "2. Connect your wallet",
    description: "Connect your crypto wallet to complete",
    Icon: Connect,
  },
  {
    id: 3,
    title: "3. Create your first asset",
    description: "Upload your first asset to complete",
    Icon: Window,
  },
  {
    id: 4,
    title: "4. Create 2 media asset",
    description: "Upload media or art asset to complete",
    Icon: Asset,
  },
];

const Swipper = () => {
  const mainSlide = {
    id: 0,
    title: "Onboarding Progress",
    description: "2/4 completed",
    Icon: Flag,
  };

  return (
    <ReactSwipper
      direction={"vertical"}
      effect="cards"
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination, EffectCards]}
      className="mySwiper"
      cardsEffect={{
        rotate: false,
        perSlideOffset: 10,
      }}
    >
      <SwiperSlide>
        <Slide slide={mainSlide}>
          <div className="flex flex-col w-full">
            <div className="flex gap-1 text-xs text-black">
              <span className="font-medium">Complete all steps to receive</span>
              <span className="font-bold">10 DAAC</span>
            </div>

            <div></div>
          </div>
        </Slide>
      </SwiperSlide>

      {onboardingSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
    </ReactSwipper>
  );
};

export default Swipper;
