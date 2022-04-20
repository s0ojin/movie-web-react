import { async } from "q";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { ReactComponent as Loading } from "../components/loading.svg";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);
  const getMovie = async() => {
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(()=>{
    getMovie();
  },[])

  return(
    <div>
        {loading ? <h1 className={styles.loader}><Loading width="50" height="50" viewBox="0 0 500 500" fill="#b3afe4" /></h1> :
          <div className={styles.container} style={{backgroundImage:`url(${detail.background_image_original})`}}>
            <div className={styles.movie}>
              <div>
                <img src={detail.medium_cover_image} alt={detail.title} className={styles.movie__img}/>
              </div>
              <div>
                <h2 className={styles.movie__title}>{detail.title_long}</h2>
                <div className={styles.details}>
                  <ul className={styles.movie__genres}>
                    {detail.genres.map(genre=>
                    <li key={genre}>{genre}</li>)}
                  </ul>
                  <h3 className={styles.movie__rating}>⭐ {detail.rating}</h3>
                  <h3 className={styles.movie__runtime}>{Math.floor(detail.runtime/60)}h {detail.runtime % 60}m</h3>
                </div>
                <p>{detail.description_full}</p>
              <div className={styles.trailerBox}>
                <iframe src={`https://www.youtube.com/embed/${detail.yt_trailer_code}?mute=1&&autoplay=1`} className={styles.trailer}></iframe>
              </div>
              </div>
            </div>
          </div>
        }
    </div>
    ) 
}

export default Detail;