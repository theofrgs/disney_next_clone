import { SearchResults } from "@/typings";

export async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "true");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };
  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getPoularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getDiscoverMovie(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  id && url.searchParams.set("with_genres", id);
  keywords && url.searchParams.set("with_keywords", keywords);
  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getSearchMovie(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", term);
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getMovieVideos(movie_id: number) {
  const url = new URL(`https://api.themoviedb.org/3/movie/${movie_id}/videos`);
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getMovieDetails(movie_id: number) {
  console.log(`https://api.themoviedb.org/3/movie/${movie_id}`);
  const url = new URL(`https://api.themoviedb.org/3/movie/${movie_id}`);
  const data = await fetchFromTMDB(url);
  return data;
}
