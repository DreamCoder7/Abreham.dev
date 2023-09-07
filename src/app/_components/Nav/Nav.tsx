import Link from "next/link";

import Logo from "../Logo/Logo";
import classes from "./Nav.module.scss";

function Nav() {
  return (
    <nav className={classes.Nav}>
      <Logo isBgDark />
      <ul className={classes.List}>
        <li className={classes.Item}>
          <Link href="/abreham.blog.com" className={classes.Link}>
            Blog
          </Link>
        </li>
        <li className={classes.Item}>
          <Link href="/abreham.blog.com" className={classes.Link}>
            Resume
          </Link>
        </li>
        <li className={classes.Item}>
          <button className={classes.ContactBtn}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
