import { ReactNode } from "react";
import style from "./CinemaItem.module.css";
interface CinemaItemProps {
  children: ReactNode;
  title: string;
}

import Arrow from "../../../img/seeAllArrow.svg";

function CinemaItem(props: CinemaItemProps) {
  return (
    <div className={style.wrapper}>
      <div className={`${style.titleWrapper} container`}>
        <h2 className={style.title}>{props.title}</h2>
        <div className={style.buttonWrapper}>
          <button className={style.titleBtt}>See all</button>
          <Arrow />
        </div>
      </div>

      <div className={style.scrollWrapper}>{props.children}</div>
    </div>
  );
}

export default CinemaItem;
