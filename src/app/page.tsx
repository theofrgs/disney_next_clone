import MoviesCarousel from "@/components/movies-carousel";
import {
  getPoularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topratedMovies = await getTopRatedMovies();
  const poularMovies = await getPoularMovies();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* CarouselBannerWrapper */}
      <div className="flex flex-col space-x-2  xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topratedMovies} title="Top Rated" />
        <MoviesCarousel movies={poularMovies} title="Popular" />
      </div>
    </main>
  );
}
