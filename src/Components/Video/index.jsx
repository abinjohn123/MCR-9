import { useState } from 'react';
import cx from 'classnames';
import { useParams } from 'react-router';

import { useAppContext } from '../../AppContext';
import Layout from '../Shared/Layout';
import { WatchLaterIcon, PlaylistIcon } from '../../icons/svg';
import { videos } from '../../constants';
import AddedPlaylistsModal from '../Playlists/AddedPlaylistsModal';

import './player.scss';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const video = videos.find((vd) => vd._id === Number.parseInt(videoId, 10));
  const { title, views, chips, src, category, creator } = video;

  const { playLists, watchLater, setWatchLater } = useAppContext();
  const isVideoInWatchLater = watchLater.includes(Number.parseInt(videoId, 10));
  const [isAddedPlaylistsModalOpen, setIsAddedPlaylistsModalOpen] =
    useState(false);

  const handleWatchLaterClick = (e) => {
    e.stopPropagation();

    if (isVideoInWatchLater)
      setWatchLater(
        watchLater.filter((id) => id !== Number.parseInt(videoId, 10))
      );
    else setWatchLater([...watchLater, Number.parseInt(videoId, 10)]);
  };

  return (
    <Layout title={`${title} | ${creator}`}>
      <div className="player-grid">
        <div className="player-container">
          <iframe src={src}></iframe>
          <div className="controls">
            <button
              className={cx('btn btn-reset watch-later', {
                active: isVideoInWatchLater,
              })}
              onClick={handleWatchLaterClick}
            >
              <WatchLaterIcon />
            </button>
            <button
              className="btn btn-reset watch-later"
              onClick={() => setIsAddedPlaylistsModalOpen(true)}
            >
              <PlaylistIcon />
            </button>
          </div>
        </div>
        <div className="player-sidebar"></div>
      </div>
      {isAddedPlaylistsModalOpen && (
        <AddedPlaylistsModal
          setIsModalOpen={setIsAddedPlaylistsModalOpen}
          videoId={Number.parseInt(videoId, 10)}
        />
      )}
    </Layout>
  );
};

export default VideoPlayer;
