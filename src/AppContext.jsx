import { useState, createContext, useContext } from 'react';

const AppContext = createContext({});

const LOCAL_STORAGE_KEYS = {
  WATCH_LATER: 'watch_later',
  PLAYLISTS: 'playlists',
};

const AppProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.WATCH_LATER) ?? [])
  );
  const [playLists, setPlaylists] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.PLAYLISTS)) ?? []
  );

  const setLocalStorageWatchLater = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.WATCH_LATER, JSON.stringify(data));
    setWatchLater(data);
  };

  const setLocalStoragePlaylists = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.PLAYLISTS, JSON.stringify(data));
    setPlaylists(data);
  };

  const contextValue = {
    watchLater,
    setWatchLater: setLocalStorageWatchLater,
    playLists,
    setPlaylists: setLocalStoragePlaylists,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
