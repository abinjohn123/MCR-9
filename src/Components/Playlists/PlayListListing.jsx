import { useParams } from 'react-router';
import Layout from '../Shared/Layout';
import { useAppContext } from '../../AppContext';

const PlayListListing = () => {
  const { playlistId } = useParams();
  const { playLists } = useAppContext();

  const playlist = playLists.find((list) => list.id === playlistId);
  return (
    <Layout title={`Playlist - ${playlist.name}`}>
      {playlist.description && <h3>{playlist.description}</h3>}
    </Layout>
  );
};

export default PlayListListing;
