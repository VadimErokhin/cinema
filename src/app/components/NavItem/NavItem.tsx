import style from "./NavItem.module.css";
import HomeIcon from "../../../img/homeBtn.svg";
import MovieIcon from "../../../img/movieBtn.svg";
import DramaIcon from "../../../img/dramaBtn.svg";
import MusicIcon from "../../../img/musicBtn.svg";
import LiveShowIcon from "../../../img/liveShowBtn.svg";
import ComedyIcon from "../../../img/comedyBtn.svg";

import { IconsIds } from "./types";
import { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
  iconId: IconsIds;
}

const iconsMap = {
  [IconsIds.Home]: <HomeIcon className={style.icon} />,
  [IconsIds.Movie]: <MovieIcon className={style.icon} />,
  [IconsIds.Drama]: <DramaIcon className={style.icon} />,
  [IconsIds.MusicVideo]: <MusicIcon className={style.icon} />,
  [IconsIds.LiveShow]: <LiveShowIcon className={style.icon} />,
  [IconsIds.Comedies]: <ComedyIcon className={style.icon} />,
};

function NavItem(props: NavItemProps) {
  return (
    <div className={style.wrapper}>
      {iconsMap[props.iconId]}
      <h3 className={style.title}>{props.children}</h3>
    </div>
  );
}

export default NavItem;
