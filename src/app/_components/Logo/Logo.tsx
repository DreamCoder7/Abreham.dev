import Image from "next/image";

type LogoProps = {
  isBgDark: boolean;
};

function Logo(props: LogoProps) {
  const { isBgDark } = props;

  return isBgDark ? (
    <Image src="/logo-white.svg" alt="Logo DreamCoder" width={50} height={50} />
  ) : (
    <Image src="/logo-dark.svg" alt="Logo DreamCoder" width={50} height={50} />
  );
}

export default Logo;
