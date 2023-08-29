import Link from "next/link";
import style from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Facebook from "../../../img/facebook.svg";
import Instagram from "../../../img/instagram.svg";

function Footer() {
  return (
    <section className={style.footer}>
      <button className={style.btn}></button>
      <div className={`${style.wrapper} container`}>
        <ul className={style.leftSide}>
          <li className={style.listItem}>
            <Link className={style.link} href="#">
              Feedback
            </Link>
          </li>
          <li className={style.listItem}>
            <Link className={style.link} href="#">
              Help
            </Link>
          </li>
          <li className={style.listItem}>
            <Link className={style.link} href="#">
              FAQ
            </Link>
          </li>
        </ul>

        <Logo className={style.logo} />

        <div className={style.rightSide}>
          <span className={style.follow}>FOLLOW ON</span>
          <div className={style.facebookWrapper}>
            <Facebook className={style.facebook} />
          </div>
          <Instagram />
        </div>
      </div>
      <span className={style.copyright}>©2021 All rights reserved</span>
    </section>
  );
}

export default Footer;
