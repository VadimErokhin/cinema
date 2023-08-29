import Image from "next/image";
import logoImg from "../../../img/logo.png";
import style from "./Logo.module.css";

interface LogoProps {
  className?: string;
}

function Logo(props: LogoProps) {
  return (
    <div>
      <Image
        className={`${style.logo} ${props.className}`}
        src={logoImg}
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
