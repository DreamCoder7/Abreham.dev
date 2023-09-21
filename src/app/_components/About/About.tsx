"use client";
import { useContext } from "react";

import classes from "./About.module.scss";
import { ModeContext } from "@/app/_context/modeContext";

function About() {
  const { mode } = useContext(ModeContext);

  return (
    <section className={mode === "dark" ? classes.AboutDark : classes.About} id="about">
      <div className={mode === "dark" ? classes.IntroDark : classes.Intro}>
        <h2 className={mode === "dark" ? classes.TitleDark : classes.Title}>
          Hi, {`I'm`} Abreham Full Stack Developer
        </h2>
        <p className={classes.Text}></p>
      </div>
      {/* <Image src={Img} alt="Abreham Photo" width={500} height={500} /> */}
    </section>
  );
}

export default About;
