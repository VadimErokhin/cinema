import SubscribeForm from "../SubscribeForm/SubscribeFrom";
import style from "./HomeHero.module.css";

function HomeHero() {
  return (
    <section className={`${style.hero} container`}>
      <div className={style.wrapper}>
        <span className={style.greeting}>Welcome to BD Screens</span>
        <h1 className={style.title}>
          Download Unlimited Movies, Drama, Music Video and More Content.
        </h1>
        <span className={style.description}>
          Enjoy exclusive Music Video popular movies and Live shows. Subscribe
          BD Screen now
        </span>
        <SubscribeForm />
      </div>
    </section>
  );
}

export default HomeHero;
