"use client";

import { Movie } from "@/typings";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";

type Props = {
  movies: Movie[];
};
Autoplay.globalOptions = { delay: 8000 };
function CarouselBanner({ movies }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
    >
      <div className="flex">
        {movies.map((movie) => (
          <div
            className="flex-full flex_[0_0_100%] min-w-0 relative"
            key={movie.id}
          >
            <Image
              src={getImagePath(movie.backdrop_path, true)}
              alt={""}
              width={1920}
              height={1080}
            />
            <div className="hidden lg:inline absolute mt-0 top-0 z-20 pt-40 lg:pt-60 left-0 lg:mt-40 bg-transparent h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
              <h2 className="text-5xl font-bold max-w-xl z-50">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
    </div>
  );
}

export default CarouselBanner;
