"use client";
import Lottie from "lottie-react";
import { LottieAnimationProps } from "@/app/_types";

function DisplayLottie({
  animationData,
  autoplay = true,
  loop = true,
}: LottieAnimationProps) {
  return (
    <Lottie animationData={animationData} autoPlay={autoplay} loop={loop} />
  );
}

export default DisplayLottie;
