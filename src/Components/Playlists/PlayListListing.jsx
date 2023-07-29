import { useParams, useNavigate } from 'react-router';
import Layout from '../Shared/Layout';
import { useAppContext } from '../../AppContext';
import VideoCard from '../Listing/VideoCard';
import { videos } from '../../constants';
import NoData from '../Shared/NoData';

import './playlist.scss';

const PlayListListing = () => {
  const { playlistId } = useParams();
  const { playLists } = useAppContext();
  const navigate = useNavigate();

  const playlist = playLists.find((list) => list.id === playlistId);
  const filteredVideos = videos.filter((video) =>
    playlist.videos.includes(video._id)
  );
  return (
    <Layout title={`Playlist - ${playlist.name}`}>
      {playlist.description && (
        <h3 className="desc mb24">{playlist.description}</h3>
      )}
      {filteredVideos.length > 0 ? (
        <div className="videos-drawer">
          {filteredVideos.map((video) => (
            <VideoCard video={video} id={video._id} />
          ))}
        </div>
      ) : (
        <NoData text="You haven't added any videos to this playlist yet">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/explore')}
          >
            Explore videos
          </button>
        </NoData>
      )}
    </Layout>
  );
};

export default PlayListListing;
