import NavBar from "@/components/NavBar";
import Head from "next/head";
import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "f8b085ec16593844287d5d9abc8d7ea8";

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  });
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div id={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

//APIリードアクセストークン
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGIwODVlYzE2NTkzODQ0Mjg3ZDVkOWFiYzhkN2VhOCIsInN1YiI6IjY1NmRlOGE5NGE0YmY2MDEwMzUxMmMxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GruIvupM0fgdffuFU91ps8JxWRNUTUCHR5Ut3PQOozw
