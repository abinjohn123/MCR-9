import { useNavigate } from 'react-router';
import { DeleteIcon } from '../../icons/svg';
import { useAppContext } from '../../AppContext';

const PlayListCard = ({ playlist }) => {
  const { name, description } = playlist;
  const { playLists, setPlaylists } = useAppContext();
  const navigate = useNavigate();

  const handleDeleteClick = (e) => {
    e.stopPropagation();

    setPlaylists(playLists.filter((item) => item.id !== playlist.id));
  };

  return (
    <div
      className="playlist-card"
      onClick={() => navigate(`/playlists/${playlist.id}`)}
    >
      <div className="img-container">
        <img src="https://picsum.photos/250/150" alt={name} />
      </div>
      <div className="action">
        <div className="details">
          <h4 className="title">{name}</h4>
          {description && <p className="desc">{description}</p>}
        </div>
        <div onClick={handleDeleteClick}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default PlayListCard;
