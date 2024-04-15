import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-similar.module.css"

async function getSimilar(id:string) {
  const res = await fetch(`${API_URL}/${id}/similar`);
  return res.json();
}

export default async function MovieSimilar({id}: {id:string}) {
  const similar = await getSimilar(id);

  return (
    <div className={styles.container}>
      {similar.map(movie => {
        return(
          <div key={movie.id} className={styles.similar}>
            <h2>{movie.title}</h2>
            <Link href={`/movies/${movie.id}`}>
            <img src={movie.poster_path?movie.poster_path:"/images/empty_poster.png"} alt={movie.title} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}