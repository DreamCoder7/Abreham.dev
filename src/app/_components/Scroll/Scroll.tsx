"use client";
import { useContext, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import Link from "next/link";

import classes from "./Scroll.module.scss";
import { ModeContext } from "@/app/_context/modeContext";

const nums = [
  { num: "00", to: "home" },
  { num: "01", to: "about" },
  { num: "02", to: "portfolio" },
  { num: "03", to: "experience" },
  { num: "04", to: "contact" },
];

function Scroll() {
  const { mode } = useContext(ModeContext);
  const [isScrollHelper, setIsScrollHelper] = useState<boolean>(false);

  const toggleScrollHelper = () => {
    setIsScrollHelper(!isScrollHelper);
  };

  return (
    <div className={classes.Scroll}>
      <ul className={isScrollHelper ? classes.ShowList : classes.List}>
        {nums.map(({ num, to }) => (
          <li className={classes.Item} key={num}>
            <Link
              href={`#${to}`}
              className={mode === "dark" ? classes.NumDark : classes.Num}
            >
              {num}
            </Link>
          </li>
        ))}
      </ul>
      <div className={classes.Helper}>
        <p className={classes.HelperTitle}>Scroll down</p>
        <MdKeyboardArrowDown
          className={mode === "dark" ? classes.IconDark : classes.Icon}
        />
      </div>
      <div className={classes.ScrollHelper}>
        {isScrollHelper ? (
          <BsArrowBarRight
            onClick={toggleScrollHelper}
            className={classes.ScrollHelperIcon}
          />
        ) : (
          <BsArrowBarLeft
            onClick={toggleScrollHelper}
            className={classes.ScrollHelperIcon}
          />
        )}
      </div>
    </div>
  );
}

export default Scroll;
