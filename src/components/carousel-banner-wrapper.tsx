import { getDiscoverMovie } from "@/lib/getMovies";
import React from "react";
import CarouselBanner from "./carousel-banner";

type Props = {
  id?: string;
  keywords?: string;
};
async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovie(id, keywords);

  return (
    <div>
      <CarouselBanner movies={movies} />
    </div>
  );
}

export default CarouselBannerWrapper;
