import { async } from "q";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
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
      {loading ? <h1>Loading</h1> :
        <div>
          <h2>{detail.title}</h2>
          {detail.rating}
          <img src={detail.medium_cover_image} />
          <p>{detail.description_full}</p>
        </div>
      }
    </div>
    ) 
}

export default Detail;