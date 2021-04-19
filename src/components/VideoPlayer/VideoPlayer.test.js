import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoPlayer from './VideoPlayer.component';

import { mockData } from '../../data/mock-videos';

const videoData = mockData.items[0];

test('test VideoPlayer component', () => {
  render(<VideoPlayer video={videoData} />);
  const videoPlayerComponent = screen.getByTestId('video-player');
  expect(videoPlayerComponent).toBeInTheDocument();
  expect(videoPlayerComponent).toHaveClass('video-player');
  expect(videoPlayerComponent).toBeVisible();
  expect(videoPlayerComponent).toHaveTextContent(videoData.snippet.title);
  expect(videoPlayerComponent).toHaveTextContent(videoData.snippet.description);
});
