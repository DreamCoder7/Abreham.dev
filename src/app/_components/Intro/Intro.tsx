"use client";
import { useContext } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithubAlt } from "react-icons/fa";

import { introContent } from "@/app/_utils/constants";
import LottieAnimation from "../../_assets/lottie/portfolio.json";
import DisplayLottie from "../DisplayLottie/DisplayLottie";
import classes from "./Intro.module.scss";
import Nav from "../Nav/Nav";
import Scroll from "../Scroll/Scroll";
import { ModeContext } from "@/app/_context/modeContext";

function Intro() {
  const { btnText, text, title } = introContent;
  const { mode } = useContext(ModeContext);

  return (
    <header className={mode === "dark" ? classes.HeaderDark : classes.Header}>
      <Nav />
      <div className={classes.Content}>
        <h1 className={mode === "dark" ? classes.TitleDark : classes.Title}>
          {title}
        </h1>
        <p className={mode === "dark" ? classes.TextDark : classes.Text}>
          {text}
        </p>
        <button className={classes.AboutBtn}>
          {btnText}
          <IoIosArrowForward className={classes.Icon} />
        </button>
      </div>
      <div className={classes.ImgCon}>
        <DisplayLottie animationData={LottieAnimation} />
      </div>
      <Link
        href="https://github.com/DreamCoder7"
        className={classes.GithubLink}
      >
        <FaGithubAlt
          className={
            mode === "dark" ? classes.GitHubIconDark : classes.GitHubIcon
          }
        />
      </Link>
      <Scroll />
    </header>
  );
}

export default Intro;
