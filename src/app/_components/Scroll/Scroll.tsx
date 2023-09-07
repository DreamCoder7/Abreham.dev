import { MdKeyboardArrowDown } from "react-icons/md";

import classes from "./Scroll.module.scss";

function Scroll() {
  return (
    <div className={classes.Scroll}>
      <ul className={classes.List}>
        <li className={classes.Item}>
          <p className={classes.Num}>00</p>
        </li>
        <li className={classes.Item}>
          <p className={classes.Num}>01</p>
        </li>
        <li className={classes.Item}>
          <p className={classes.Num}>02</p>
        </li>
        <li className={classes.Item}>
          <p className={classes.Num}>03</p>
        </li>
      </ul>
      <div className={classes.Helper}>
        <p className={classes.HelperTitle}>Scroll down</p>
        <MdKeyboardArrowDown className={classes.Icon} />
      </div>
    </div>
  );
}

export default Scroll;
