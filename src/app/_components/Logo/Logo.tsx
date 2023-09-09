"use client";
import { useContext } from "react";
import Image from "next/image";
import { PiMoonFill } from "react-icons/pi";
import { BsFillSunFill } from "react-icons/bs";

import classes from "./Logo.module.scss";
import { ModeContext } from "@/app/_context/modeContext";

function Logo() {
  const { darkModeHandler, lightModeHandler, mode } = useContext(ModeContext);

  return (
    <div className={classes.Logo}>
      {mode === "dark" ? (
        <Image
          src="/logo-white.svg"
          alt="Logo DreamCoder"
          width={50}
          height={50}
        />
      ) : (
        <Image
          src="/logo-dark.svg"
          alt="Logo DreamCoder"
          width={50}
          height={50}
        />
      )}
      <div>
        {mode === "dark" ? (
          <BsFillSunFill
            className={classes.SunIcon}
            onClick={lightModeHandler}
          />
        ) : (
          <PiMoonFill className={classes.MoonIcon} onClick={darkModeHandler} />
        )}
      </div>
    </div>
  );
}

export default Logo;
