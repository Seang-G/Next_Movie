import { Suspense } from "react";

import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVides from "../../../components/movie-videos";
import MovieCredits from "../../../components/movie-credits";

import styles from "../../../styles/movie-detail.module.css"
import MovieProviders from "../../../components/movie-providers";
import MovieSimilar from "../../../components/movie-similar";

interface IParams {
  params: {id: string};
}

export async function generateMetadata({params:{id}}: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({params: {id}}: IParams) {

  return (
    <div className={styles.container}>
      <Suspense>
        <MovieInfo id={id}/>
      </Suspense>
      <Suspense>
        <h1>Videos</h1>
        <MovieVides id={id}/>
      </Suspense>
      <Suspense>
        <h1>Credits</h1>
        <MovieCredits id={id}/>
      </Suspense>
      {/* <Suspense>
        <h1>Providers</h1>
        <MovieProviders id={id}/>
      </Suspense> */}
      <Suspense>
      <h1>More Movies</h1>
        <MovieSimilar id={id}/>
      </Suspense>

    </div>
  );
}