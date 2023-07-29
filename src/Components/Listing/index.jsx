import { useParams } from 'react-router';

import Layout from '../Shared/Layout';
import VideoCard from './VideoCard';
import { videos } from '../../constants';

import './listing.scss';

const VideoList = () => {
  const { categoryName } = useParams();

  const filteredVideos = categoryName
    ? videos.filter((video) => video.category === categoryName)
    : videos;

  return (
    <Layout title={`Videos | ${categoryName ?? 'All videos'}`}>
      <div className="videos-drawer">
        {filteredVideos.map((video) => (
          <VideoCard video={video} id={video._id} />
        ))}
      </div>
    </Layout>
  );
};

export default VideoList;
