const Layout = ({ title = '', children }) => {
  return (
    <main className="layout">
      <h1>{title}</h1>
      {children}
    </main>
  );
};

export default Layout;
