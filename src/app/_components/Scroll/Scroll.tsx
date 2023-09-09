"use client";
import { useContext, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

import classes from "./Scroll.module.scss";
import { ModeContext } from "@/app/_context/modeContext";

const nums = ["00", "01", "02", "03", "04"];

function Scroll() {
  const { mode } = useContext(ModeContext);
  const [isScrollHelper, setIsScrollHelper] = useState<boolean>(false);

  const toggleScrollHelper = () => {
    setIsScrollHelper(!isScrollHelper);
  };

  return (
    <div className={classes.Scroll}>
      <ul className={isScrollHelper ? classes.ShowList : classes.List}>
        {nums.map((n) => (
          <li className={classes.Item} key={n}>
            <p className={mode === "dark" ? classes.NumDark : classes.Num}>
              {n}
            </p>
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
