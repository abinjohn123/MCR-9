import { PlusIcon } from '../../icons/svg';

const NewPlayListCard = ({ handleModalOpen }) => {
  return (
    <div className="playlist-card --new" onClick={handleModalOpen}>
      <PlusIcon />
      <h3>Create new playlist</h3>
    </div>
  );
};

export default NewPlayListCard;
