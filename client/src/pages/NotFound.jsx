import Scout from "../assets/images/errscout.png";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <div className="text">
          <h2>404</h2>
          <p>Page Not Found</p>
        </div>

        <div className="image">
          <img src={Scout} alt="" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
