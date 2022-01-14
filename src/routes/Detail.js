import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

//영화를 제목을 누르면 상세 페이지 보여주는 component
function Detail() {
  const { id } = useParams(); //useParms는 Routes에서 ~/:key" 의 key를 넘겨줘
  const [emovie, setEmovie] = useState("");
  // console.log(id);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setEmovie(json.data.movie);
  };

  useEffect(() => {
    getMovies();
    console.log(emovie.title);
  }, []);

  return (
    <div>
      <h1>{emovie.title}</h1>
      <img src={emovie.medium_cover_image} />
      <h3>{emovie.year}</h3>
      {/* <ul>
        {emovie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul> */}
      <div>{`Running time : ${emovie.runtime} mins`} </div>
      <span>{`Rates : ${emovie.rating}`} </span>
      <p>{emovie.description_full}</p>
    </div>
  );
}
export default Detail;
