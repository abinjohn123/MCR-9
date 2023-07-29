import { useState } from 'react';
import Layout from '../Shared/Layout';
import { useAppContext } from '../../AppContext';
import SpinnerButton from '../Shared/SpinnerButton';
import NewPlaylistModal from './NewPlaylistModal';
import PlayListCard from './PlayListCard';
import NewPlayListCard from './NewPlayListCard';

import NoData from '../Shared/NoData';

const PlayList = () => {
  const { playLists } = useAppContext();
  const [isNewPlaylistModalOpen, setIsNewPlaylistModalOpen] = useState(false);

  return (
    <Layout title="All Playlists">
      {playLists.length === 0 ? (
        <NoData text="You haven't created any playlists yet">
          <SpinnerButton
            className="btn-primary"
            onClick={() => setIsNewPlaylistModalOpen(true)}
          >
            Create new playlist
          </SpinnerButton>
        </NoData>
      ) : (
        <div className="videos-drawer">
          {playLists.map((playlist) => (
            <PlayListCard playlist={playlist} key={playlist.id} />
          ))}
          <NewPlayListCard
            handleModalOpen={() => setIsNewPlaylistModalOpen(true)}
          />
        </div>
      )}
      {isNewPlaylistModalOpen && (
        <NewPlaylistModal setIsModalOpen={setIsNewPlaylistModalOpen} />
      )}
    </Layout>
  );
};

export default PlayList;
