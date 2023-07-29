import { useNavigate } from 'react-router';

const PlayListCard = ({ playlist }) => {
  const { name, description } = playlist;
  const navigate = useNavigate();

  return (
    <div
      className="playlist-card"
      onClick={() => navigate(`/playlists/${playlist.id}`)}
    >
      <div className="img-container">
        <img src="https://picsum.photos/250/150" alt={name} />
      </div>
      <div className="details">
        <h4 className="title">{name}</h4>
        {description && <p className="desc">{description}</p>}
      </div>
    </div>
  );
};

export default PlayListCard;
