import Link from "next/link";

import { introContent } from "@/app/_utils/constants";
import Logo from "../Logo/Logo";

function Intro() {
  const { btnText, text, title } = introContent;

  return (
    <header>
      <nav>
        <Logo isBgDark />
        <ul>
          <li>
            <Link href="/abreham.blog.com">Blog</Link>
          </li>
          <li>
            <Link href="/abreham.blog.com">Resume</Link>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>{btnText}</button>
      </div>
      <div>{/* Lottie files goes here */}</div>
    </header>
  );
}

export default Intro;
