import Link from "next/link";

import { introContent } from "@/app/_utils/constants";
import LottieAnimation from "../../_assets/lottie/portfolio.json";
import DisplayLottie from "../DisplayLottie/DisplayLottie";
import classes from "./Intro.module.scss";
import Nav from "../Nav/Nav";
import Scroll from "../Scroll/Scroll";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithubAlt } from "react-icons/fa";

function Intro() {
  const { btnText, text, title } = introContent;

  return (
    <header className={classes.Header}>
      <Nav />
      <div className={classes.Content}>
        <h1 className={classes.Title}>{title}</h1>
        <p className={classes.Text}>{text}</p>
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
        <FaGithubAlt className={classes.GitHubIcon} />
      </Link>
      <Scroll />
    </header>
  );
}

export default Intro;
