import MoviesCarousel from "@/components/movies-carousel";
import { getPoularMovies, getSearchMovie } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { term: string };
};
async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  const searchMovies = await getSearchMovie(termToUse);
  const popularMovies = await getPoularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42 ">
        <h1 className="text-6xl font-bold px-10">
          Result for &quot;{termToUse}&quot;
        </h1>
        <MoviesCarousel title="Movies" movies={searchMovies} isVertical />
        <MoviesCarousel
          title="You may also like"
          movies={popularMovies}
          isVertical
        />
      </div>
    </div>
  );
}

export default SearchPage;
