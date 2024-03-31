import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getImagePath } from "@/lib/getImagePath";
import { getMovieVideos } from "@/lib/getMovies";
import { cn } from "@/lib/utils";
import { Movie } from "@/typings";
import Image from "next/image";
import MovieCard from "./movie-card";

type Props = { children: React.ReactNode; movie: Movie };

async function MovieDialog({ children, movie }: Props) {
  // const movieVideos = ((await getMovieVideos(movie.id)) as any).filter(
  //   (m: { type: string }) => m.type === "Trailer"
  // );
  // const movieDetails = await getMovieDetails(movie.id);
  // https://www.youtube.com/watch?v=_YUzQa_1RCE
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="mt-20 p-0">
        {/* <iframe
          title="YouTube Video Player"
          src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
          className="h-full w-full"
          allowFullScreen
        ></iframe> */}
        <div
          key={movie.id}
          className={cn("flex flex-col lg:flex-row h-full w-full")}
        >
          {/* <MovieCard movie={movie} /> */}
          <div className="max-w-2xl">
            <div className="relative flex-shrink-0 cursor-pointer transform ">
              <p className="absolute z-20 bottom-5 left-5 font-bold">
                {movie.title}
              </p>
              <Image
                className="lg:min-w-[400px] object-cover object-center w-full h-auto"
                src={getImagePath(movie.backdrop_path ?? movie.poster_path)}
                alt={movie.title}
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
            </div>
            <hr className="mb-3" />
            <p className="p-4">{movie.overview}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default MovieDialog;
