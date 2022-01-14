import { useEffect, useState } from "react";
import Movie from "../components/Movie";

//Home.module.css를 불러오기 styles로
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true); //Loading 설정 boolean
  const [movies, setMovies] = useState([]); //movie 들을 담는 배열, 첫 render될떄는 빈 배열, useeffect로 api호출한뒤, 배열에 담아주기

  const url =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";

  const getMovies = async () => {
    // console.log("Hey I'm getting the movie info only once");
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.data.movies);
    // console.log(typeof json.data.movies);

    setMovies(json.data.movies);
    setLoading(false);
  };

  //useEffect(getMovies(), []);//이렇게 쓰면 틀림

  useEffect(() => {
    //arrow fucntion 안에 실행할 함수 참조값을 실행해주야됨
    getMovies();
  }, []); //[]에 감시하는 것이 없으니깐 첫 render에서만 실행됨

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading....</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((item) => (
            <Movie
              id={item.id}
              key={item.id}
              medium_cover_image={item.medium_cover_image}
              title={item.title}
              year={item.year}
              summary={item.summary}
              genres={item.genres} //여기 오타 gernes로 해서 오류남..
            />
          ))}
        </div>
        //movies에는 json.data.movies가 object 형태로 배열로 들어가 있다. 배열을 각기 접근해서 object의 id, url,titile을 가지고 오려면 어떻게 해야 할까?
        //-> map 으로 접근
      )}
    </div>
  );
}
export default Home;
