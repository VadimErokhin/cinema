import NavItem from "../NavItem/NavItem";
import { IconsIds } from "../NavItem/types";
import style from "./Navigation.module.css";

interface NavItem {
  iconId: IconsIds;
  title: string;
}

export default function Navigation() {
  const data: NavItem[] = [
    {
      iconId: IconsIds.Home,
      title: "Home",
    },
    {
      iconId: IconsIds.Movie,
      title: "Movie",
    },
    {
      iconId: IconsIds.Drama,
      title: "Drama",
    },
    {
      iconId: IconsIds.MusicVideo,
      title: "Music Video",
    },
    {
      iconId: IconsIds.LiveShow,
      title: "Live Show",
    },
    {
      iconId: IconsIds.Comedies,
      title: "Comedies",
    },
  ];

  return (
    <div className={style.wrapper}>
      {data.map((el) => (
        <NavItem key={el.iconId} iconId={el.iconId}>
          {el.title}
        </NavItem>
      ))}
    </div>
  );
}
