"use client";

import Header from "./components/Header/Header";
import HomeHero from "./components/HomeHero/HomeHero";
import CinemaContent from "./components/CinemaContent/CinemaContent";

import apiService from "./services/api-service";
import { VideoResponse } from "./components/CinemaContent/type";
import Footer from "./components/Footer/Footer";

async function Home() {
  const data: VideoResponse = await apiService.get("/videos/search", {
    per_page: 15,
    query: "nature",
  });

  const mostPopular: VideoResponse = await apiService.get("/videos/search", {
    per_page: 15,
    query: "Ocean",
  });

  const moviesForYou: VideoResponse = await apiService.get("/videos/search", {
    per_page: 15,
    query: "Pears",
  });

  const music: VideoResponse = await apiService.get("/videos/search", {
    per_page: 15,
    query: "Tigers",
  });

  return (
    <div>
      <Header />
      <main>
        <HomeHero />
        <CinemaContent
          data={data}
          mostPopularMovies={mostPopular}
          moviesForYou={moviesForYou}
          music={music}
        />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
