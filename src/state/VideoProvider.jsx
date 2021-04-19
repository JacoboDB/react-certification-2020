import React, { createContext, useContext, useReducer } from 'react';

import reducer from './VideoReducer';

const initState = {
  searchValue: 'wizeline',
  uiTheme: 'white-theme',
};

const VideoContext = createContext({
  todos: [],
  history: [],
});

function useVideos() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideos" without an VideoProvider!`);
  }
  return context;
}

function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>{children}</VideoContext.Provider>
  );
}

export { useVideos };

export default VideoProvider;
