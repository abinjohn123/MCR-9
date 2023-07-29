import { useNavigate } from 'react-router';
import cx from 'classnames';

import { useAppContext } from '../../AppContext';
import { WatchLaterIcon } from '../../icons/svg';
import './listing.scss';

const VideoCard = ({ video }) => {
  const { _id: videoId, title, views, thumbnail, creator } = video;
  const navigate = useNavigate();
  const { watchLater, setWatchLater } = useAppContext();

  const isVideoInWatchLater = watchLater.includes(videoId);

  const handleWatchLaterClick = (e) => {
    e.stopPropagation();

    if (isVideoInWatchLater)
      setWatchLater(watchLater.filter((id) => id !== videoId));
    else setWatchLater([...watchLater, videoId]);
  };

  console.log(watchLater);

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
      <button
        className={cx('btn btn-reset watch-later', {
          active: isVideoInWatchLater,
        })}
        onClick={handleWatchLaterClick}
      >
        <WatchLaterIcon />
      </button>
    </div>
  );
};

export default VideoCard;
