"use client";
import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

import classes from "./portfolio.module.scss";
import { ModeContext } from "@/app/_context/modeContext";

function Portfolio() {
  const { mode } = useContext(ModeContext);

  const itemClasses = mode === "dark" ? classes.Item : classes.ItemDark;

  return (
    <section
      className={mode === "dark" ? classes.Portfolio : classes.PortfolioDark}
      id="portfolio"
    >
      <div className={classes.Intro}>
        <h2 className={mode === "dark" ? classes.Title : classes.TitleDark}>
          Portfolio & Previous Projects
        </h2>
        <p className={mode === "dark" ? classes.Text : classes.TextDark}>
          I have built various different projects to fit different aspects of
          the {`client's`} business.
        </p>
        <Link href="/#portfolio/slide1" className={classes.Btn}>
          See Projects
          <IoIosArrowForward className={classes.Icon} />
        </Link>
      </div>

      <div className={classes.Classify}>
        <ul className={mode === "dark" ? classes.List : classes.ListDark}>
          <li className={itemClasses}>Mobile App</li>
          <li className={itemClasses}>Desktop App</li>
          <li className={itemClasses}>Web App</li>
          <li className={itemClasses}>Other Projects</li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
