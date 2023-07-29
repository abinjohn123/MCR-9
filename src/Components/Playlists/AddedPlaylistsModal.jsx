import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useAppContext } from '../../AppContext';
import Modal from '../Shared/Modal';
import SpinnerButton from '../Shared/SpinnerButton';
import NoData from '../Shared/NoData';
import { noop } from '../../utils';

const AddedPlaylistsModal = ({ videoId, setIsModalOpen }) => {
  const { playLists, setPlaylists } = useAppContext();
  const [showNewPlaylistForm, setIsShowNewPlaylistForm] = useState(false);

  const handleItemClick = (playlistId, isAddedToPlaylist) => {
    setPlaylists(
      playLists.map((playlist) =>
        playlist.id === playlistId
          ? {
              ...playlist,
              videos: isAddedToPlaylist
                ? playlist.videos.filter((item) => item !== videoId)
                : [...playlist.videos, videoId],
            }
          : playlist
      )
    );
  };

  const handleCreateNewPlaylist = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const description = e.target[1].value || null;

    setPlaylists([
      ...playLists,
      { id: uuid(), name, description, videos: [videoId] },
    ]);
    setIsModalOpen(false);
  };

  return (
    <Modal setIsModalOpen={setIsModalOpen} width={400}>
      <h3>Playlists</h3>
      <ul className="playlists">
        {playLists.length === 0 && <NoData text="No playlists created yet!" />}
        {playLists.map((item) => {
          const isAddedToPlaylist = item.videos.includes(videoId);
          return (
            <li key={item.id} className="list-item">
              <label>
                <input
                  type="checkbox"
                  checked={isAddedToPlaylist}
                  onChange={() => handleItemClick(item.id, isAddedToPlaylist)}
                />
                {item.name}
              </label>
            </li>
          );
        })}
      </ul>
      {!showNewPlaylistForm ? (
        <div className="align-center">
          <button
            className="btn btn-primary"
            onClick={() => setIsShowNewPlaylistForm(true)}
          >
            Create new playlist
          </button>
        </div>
      ) : (
        <form
          className="new-playlist-form --border"
          onSubmit={handleCreateNewPlaylist}
        >
          <label>
            <span>Playlist name:*</span>
            <input type="text" required className="input-element-theme" />
          </label>
          <label>
            <span>Description:</span>
            <textarea className="input-element-theme --text-area"></textarea>
          </label>
          <SpinnerButton type="submit" className="btn-primary">
            Create
          </SpinnerButton>
        </form>
      )}
    </Modal>
  );
};

export default AddedPlaylistsModal;
