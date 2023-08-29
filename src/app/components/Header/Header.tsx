// ("use client");

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";
import SearchIcon from "../../../img/search.svg";
import Button from "../Button/Button";
import { useEffect, useMemo, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setIsScrolled(window.scrollY > 300);
      console.log("isScrolled", isScrolled);
      console.log("window.screenY", window.screenY, window);
    });
  }, []);

  const headerActiveClass = useMemo(() => {
    return isScrolled ? style.headerActiveClass : "";
  }, [isScrolled]);

  return (
    <div>
      <header className={`${style.header} ${headerActiveClass} container`}>
        <div className={style.logoWrapper}>
          <Logo />
          <Navigation />
        </div>
        <div className={style.searchWrapper}>
          <SearchIcon className={style.search} />
          <Button>Sign In</Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
