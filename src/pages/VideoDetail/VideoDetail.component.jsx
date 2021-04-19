import React from 'react';
import { useLocation } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';
import VideoRecomendationsList from '../../components/VideoRecomendationsList';
import { useVideos } from '../../state/VideoProvider';

import './VideoDetail.styles.css';

function VideoDetail() {
  const { state } = useVideos();
  const { uiTheme } = state;
  const location = useLocation();
  return (
    <div className={`video-detail ${uiTheme}`}>
      <VideoPlayer video={location.state.video} />
      <VideoRecomendationsList videos={location.state.videos} />
    </div>
  );
}

export default VideoDetail;
