//2.영화 API읽기
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11
// npm install react-router-dom

import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom';
import {About} from './routes/About';
import {Home} from './routes/Home';
// import { Detail } from './routes/Detail';
import { Navigation } from './routes/Navigation'; 

function App() {
  return (

  <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" extract={true} element={<Home />} /> 
      <Route path="/about" element={<About />} />
      {/* <Route path="/movie-detail" element={<Detail />} /> */}
    </Routes>
  </BrowserRouter>

  );
  // return <Home />;
}

export default App;
