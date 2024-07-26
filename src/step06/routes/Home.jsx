//2.영화 API읽기
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

export function Home() {
  // 상태 변수 설정
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // 영화자료구하기
  const fetchMovies = async () => {
    try {
      // API 요청
      
      const response = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
      // const response = await axios.get('https://yts.mx/api/v2/list_movies.json');
      // 성공적으로 데이터를 가져오면 상태 업데이트
      //const { data:{data:{movies},}} = response;
      
      setMovies(response.data.data.movies);
      setIsLoading(false); // 로딩 완료
      console.log(response);
      console.log(response.data.data.movies);
    } catch (err) {
      // 오류가 발생하면 상태 업데이트
      setError(err);
      setIsLoading(false); // 로딩 완료
    }
  };

  useEffect(() => {
    fetchMovies(); // 데이터 요청 함수 호출
  }, []); // 빈 의존성 배열로 컴포넌트가 마운트될 때만 실행됨

  // 렌더링 시 상태에 따라 다른 내용을 표시
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <section className='container'>
      {isLoading ? (
        <div className='loader'>
          <span className='loader_text'>Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            console.log(movie);
            return (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
