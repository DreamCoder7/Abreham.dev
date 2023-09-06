import Image from "next/image";

type LogoProps = {
  isBgDark: boolean;
};

function Logo(props: LogoProps) {
  const { isBgDark } = props;

  return isBgDark ? (
    <Image
      src="/logo-white.svg"
      alt="Logo DreamCoder"
      width={100}
      height={100}
    />
  ) : (
    <Image
      src="/logo-dark.svg"
      alt="Logo DreamCoder"
      width={100}
      height={100}
    />
  );
}

export default Logo;
