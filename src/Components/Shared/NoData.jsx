const NoData = ({ text = 'Nothing here yet!' }) => {
  return (
    <div className="no-data-container">
      <p>{text}</p>
    </div>
  );
};

export default NoData;
