import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  GlobeIcon,
  PlaylistIcon,
  WatchLaterIcon,
} from '../icons/svg';

const menuItems = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    path: '/',
  },
  {
    label: 'Explore',
    icon: <GlobeIcon />,
    path: '/explore',
  },
  {
    label: 'Playlists',
    icon: <PlaylistIcon />,
    path: '/playlists',
  },
  {
    label: 'Watch Later',
    icon: <WatchLaterIcon />,
    path: '/watchlater',
  },
];

const MenuItem = ({ menuItem }) => {
  const { label, icon, path } = menuItem;

  return (
    <NavLink to={path} className="menu-item">
      {icon}
      <p>{label}</p>
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <nav className="sidebar">
      {menuItems.map((item, id) => (
        <MenuItem menuItem={item} key={id} />
      ))}
    </nav>
  );
};

export default Sidebar;
