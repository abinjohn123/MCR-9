const NoData = ({ text = 'Nothing here yet!', children }) => {
  return (
    <div className="no-data-container">
      <p>{text}</p>
      {children}
    </div>
  );
};

export default NoData;
