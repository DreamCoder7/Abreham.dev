"use client";
import { useContext } from "react";
import Link from "next/link";

import Logo from "../Logo/Logo";
import classes from "./Nav.module.scss";
import { ModeContext } from "@/app/_context/modeContext";

function Nav() {
  const { mode } = useContext(ModeContext);

  const linkClasses = mode === "dark" ? classes.LinkDark : classes.Link;

  return (
    <nav className={classes.Nav}>
      <Logo />
      <ul className={classes.List}>
        <li className={classes.Item}>
          <Link href="/abreham.blog.com" className={linkClasses}>
            Blog
          </Link>
        </li>
        <li className={classes.Item}>
          <Link href="/abreham.blog.com" className={linkClasses}>
            Resume
          </Link>
        </li>
        <li className={classes.Item}>
          <button
            className={
              mode === "dark" ? classes.ContactBtnDark : classes.ContactBtn
            }
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
