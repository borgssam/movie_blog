//2.영화 API읽기
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11
import React from 'react';
import Home from './routes/Home';
import './App.css';

function App() {
  return <Home />;
}

export default App;
