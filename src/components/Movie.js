import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id,year,coverImg,title,summary,genres}) {
    return( 
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>      
        <h1 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h1>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 250 ? `${summary.slice(0,250)}...` :summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map(genre=>
          <li key={genre}>{genre}</li>)}
        </ul>
      </div>

    </div>
    )    
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
