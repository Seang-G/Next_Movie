import { API_URL } from "../app/constants";

import styles from "../styles/movie-credits.module.css"

async function getMovieCredits(id:string) {
  const response =await fetch(`${API_URL}/${id}/credits`);

  return response.json();
}

export default async function MovieCredits({id}: {id:string}) {
  const credits = await getMovieCredits(id);
  return (
    <div 
      className={styles.container}
    >
      {credits.map(credit=>{
        return(
          <div key={credit.id} className={styles.credit}>
            <img src={credit.profile_path} alt={credit.name} />
            <div className={styles.credit_name}>{credit.name}</div>
            <div className={styles.credit_character}>{credit.character}</div>
          </div>
        )
      })}
    </div>
  )
}