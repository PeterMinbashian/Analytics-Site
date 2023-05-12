import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer(props:any) {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleReady = () => {
    setIsReady(true);
  };

  const handleError = () => {
    setHasError(true);
  };
  console.log(props.url)
  return (
    <>
      <ReactPlayer url={props.url} onReady={handleReady} onError={handleError} />
    </>
  );
}

export default VideoPlayer;
