import React from 'react';
import VideoList from '../../components/VideoList';
import Loading from '../../components/Loading';
import useYoutubeSearchApi from '../../hooks/useYoutubeSearchApi';
import { useVideos } from '../../state/VideoProvider';
import './Home.styles.css';

function HomePage() {
  const { state } = useVideos();
  const { searchValue, uiTheme } = state;
  const [isLoading, videoList] = useYoutubeSearchApi(searchValue);
  return (
    <section className={`homepage ${uiTheme}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <h1>Welcome to the Challenge!</h1>
          </div>
          <VideoList videos={videoList} />
        </div>
      )}
    </section>
  );
}

export default HomePage;
