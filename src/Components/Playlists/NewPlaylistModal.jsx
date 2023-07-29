import { v4 as uuid } from 'uuid';
import { useAppContext } from '../../AppContext';
import Modal from '../Shared/Modal';
import SpinnerButton from '../Shared/SpinnerButton';

import './playlist.scss';

const NewPlaylistModal = ({ setIsModalOpen }) => {
  const { playLists, setPlaylists } = useAppContext();

  const handleCreateNewPlaylist = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const description = e.target[1].value || null;

    setPlaylists([...playLists, { id: uuid(), name, description, videos: [] }]);
    setIsModalOpen(false);
  };
  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <h2 className="playlist-modal-title">New Playlist</h2>
      <form className="new-playlist-form" onSubmit={handleCreateNewPlaylist}>
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
    </Modal>
  );
};

export default NewPlaylistModal;
