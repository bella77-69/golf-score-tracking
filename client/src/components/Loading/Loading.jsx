import React from 'react';
// import LoadingGif from '../../assets/loading/golf.gif';
import LoadingGif from '../../assets/loading/giphy.webp';
import './loading.css';

function Loading() {
  return (
    <div className='loading'>
    <div className="loading-container">
      <img src={LoadingGif} alt="Loading..." className="loading-gif" />
      <p>Loading...</p>
    </div>
    </div>
  );
}

export default Loading;
