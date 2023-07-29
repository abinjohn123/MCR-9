import { useParams } from 'react-router';

import { useState } from 'react';

import Layout from '../Shared/Layout';
import VideoCard from './VideoCard';
import { videos } from '../../constants';

import './listing.scss';

const VideoList = () => {
  const { categoryName } = useParams();
  const [searchInput, setSearchInput] = useState('');

  const filteredVideos = categoryName
    ? videos.filter((video) => video.category === categoryName)
    : videos.filter(({ title }) =>
        title.toLowerCase().includes(searchInput.toLowerCase())
      );

  return (
    <Layout title={`Videos | ${categoryName ?? 'All videos'}`}>
      {!categoryName && (
        <div className="input-container">
          <input
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="eg: Stop Motion"
          />
        </div>
      )}
      <div className="videos-drawer">
        {filteredVideos.map((video) => (
          <VideoCard video={video} id={video._id} />
        ))}
      </div>
    </Layout>
  );
};

export default VideoList;
