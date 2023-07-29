import { useAppContext } from '../../AppContext';
import Layout from '../Shared/Layout';
import VideoCard from './VideoCard';
import { videos } from '../../constants';
import NoData from '../Shared/NoData';

const WatchLater = () => {
  const { watchLater } = useAppContext();

  const filteredVideos = videos.filter((video) =>
    watchLater.includes(video._id)
  );

  return (
    <Layout title="Watch Later">
      {filteredVideos.length === 0 ? (
        <NoData text="Nothing added to Watch Later yet!" />
      ) : (
        <div className="videos-drawer">
          {filteredVideos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default WatchLater;
