import React from 'react';
import VideoRecomendationsItem from '../VideoRecomendationsItem';

import './VideoRecomendationsList.styles.css';

function VideoRecomendationsList(props) {
  const items = props.videos.map((item) => (
    <VideoRecomendationsItem key={item.id.videoId} video={item} videos={props.videos} />
  ));
  return (
    <div data-testid="video-recomendations-list" className="video-recomendations-list">
      {items}
    </div>
  );
}

export default VideoRecomendationsList;
