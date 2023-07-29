import cx from 'classnames';

const Layout = ({ title = '', className, children }) => {
  return (
    <main className={cx('layout', className)}>
      <h1>{title}</h1>
      {children}
    </main>
  );
};

export default Layout;
