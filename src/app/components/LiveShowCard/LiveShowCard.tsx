import { VideoItem } from "../CinemaContent/type";
import style from "./LiveShowCard.module.css";
interface LiveShowCardProps {
  video: VideoItem;
  isLive?: boolean;
}

function LiveShowCard(props: LiveShowCardProps) {
  return (
    <div className={style.card}>
      <div
        className={style.imgWrapper}
        style={{
          background: `url(${props.video.image}) no-repeat center / cover`,
        }}
      ></div>
      <div className="cardInfo">
        <h3 className={style.cardName}>Name: {props.video.user.name}</h3>
        <div className={style.description}>
          Quality: {props.video.video_files[0].quality}
        </div>
        {props.isLive && <div className={style.liveShow}>Live Show</div>}
      </div>
    </div>
  );
}

export default LiveShowCard;
