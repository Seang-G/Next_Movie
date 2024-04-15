import { API_URL } from "../app/constants";

import styles from "../styles/movie-providers.module.css"

async function getMovieProviders(id:string) {
  const response = await fetch(`${API_URL}/${id}/providers`);

  return response.json();
}

function getProviers(json:Object) {
  const providersObj = new Object;

  Object.keys(json).map(country=>{
    Object.keys(json[country]).map(type=>{
      // console.log("\n\n\n\naaaaaaaaaaaa")
      // console.log(json[country][type])
      // const link = json[country]["link"]
      if (typeof(json[country][type]) === typeof(new Object)){
        json[country][type].map(provider=>{
          if (provider.logo_path.includes("http")) {
            providersObj[provider.provider_id] = provider.logo_path;
          }
        })
      }
    })
  })

  return providersObj;
}

export default async function MovieProviders({id}: {id:string}) {
  const json = await getMovieProviders(id);
  const providers = getProviers(json);
  // console.log(providers)
  return (
    <div 
      className={styles.container}
    >
      {Object.entries(providers).map(([id, path])=>{
        return(
          <div key={id} className={styles.provider}>
            <img src={path} alt="provider" />
          </div>
        )
      })}
    </div>
  )
}