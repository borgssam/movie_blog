import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detail.css';

export function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  // URLSearchParams를 사용하여 쿼리 파라미터 파싱
  const queryParams = new URLSearchParams(location.search);
  const year = queryParams.get('year');
  const title = queryParams.get('title');
  const summary = queryParams.get('summary');
  const poster = queryParams.get('poster');
  const genres = queryParams.get('genres') ? queryParams.get('genres').split(',') : [];

  if (!year || !title || !summary || !poster || !genres.length) {
    navigate('/');
    return <p>Loading...</p>;
  }

  return (
    <div className="detail">
      <img src={poster} alt={title} />
      <h2>{title} ({year})</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
