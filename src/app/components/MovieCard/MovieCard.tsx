import { useMemo } from "react";
import { VideoItem } from "../CinemaContent/type";
import style from "./MovieCard.module.css";

interface MovieCardProps {
  video: VideoItem;
  horizontal?: boolean;
}

function MovieCard(props: MovieCardProps) {
  const cardClass = useMemo(
    () => (props.horizontal ? style.horizontal : ""),
    [props.horizontal]
  );
  return (
    <div
      className={`${style.card}  ${cardClass}`}
      style={{
        background: `url(${props.video.image}) no-repeat center / cover`,
      }}
    >
      <div className={style.description}>{props.video.user.name}</div>
    </div>
  );
}

export default MovieCard;
