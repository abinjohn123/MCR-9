import { useNavigate } from 'react-router';

import './listing.scss';

const VideoCard = ({ video }) => {
  const { _id: videoId, title, views, thumbnail, creator } = video;
  const navigate = useNavigate();

  return (
    <div className="video-card" onClick={() => navigate(`video/${videoId}`)}>
      <div className="img-container">
        <img src={thumbnail} alt="title" />
      </div>
      <div className="video-data">
        <h4 className="title">{title}</h4>
        <div className="meta">
          <p className="--creator">{creator}</p>
          <p className="--views">{views} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
