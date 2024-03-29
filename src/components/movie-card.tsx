import { Movie } from "@/typings";
import React from "react";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";

function movieCard({ movie }: { movie: Movie }) {
  return (
    <div>
      <p>{movie.title}</p>
      <Image
        src={getImagePath(movie.backdrop_path ?? movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
      />
    </div>
  );
}

export default movieCard;
