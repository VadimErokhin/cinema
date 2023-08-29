import CinemaItem from "../CinemaItem/CinemaItem";
import LiveShowCard from "../LiveShowCard/LiveShowCard";
import MovieCard from "../MovieCard/MovieCard";
import style from "./CinemaContent.module.css";
import { VideoResponse } from "./type";

interface CinemaContentProps {
  data: VideoResponse;
  mostPopularMovies: VideoResponse;
  moviesForYou: VideoResponse;
  music: VideoResponse;
}

function CinemaContent(props: CinemaContentProps) {
  return (
    <section className={style.cinemaContent}>
      <CinemaItem title="Live Show">
        {props.data.videos.map((el, index) => (
          <LiveShowCard key={el.id} isLive={index < 2} video={el} />
        ))}
      </CinemaItem>

      <CinemaItem title="Most Popular">
        {props.mostPopularMovies.videos.map((el) => (
          <MovieCard key={el.id} video={el} />
        ))}
      </CinemaItem>

      <CinemaItem title="Movies for you">
        {props.moviesForYou.videos.map((el) => (
          <MovieCard horizontal key={el.id} video={el} />
        ))}
      </CinemaItem>

      <CinemaItem title="Latest Bangla Musicu">
        {props.music.videos.map((el) => (
          <MovieCard horizontal key={el.id} video={el} />
        ))}
      </CinemaItem>
      {/* <CinemaItem title="title">{props.data.videos.map(() => <Card />)}</CinemaItem>
      <CinemaItem title="title">{props.data.videos.map(() => <Card />)}</CinemaItem> */}
    </section>
  );
}

export default CinemaContent;
