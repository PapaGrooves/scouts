import edit from "../assets/images/edit.png";
import dlt from "../assets/images/delete.png"
const User = () => {
  return (
    <>
      <div className="user">

        <div className="name">
          <label htmlFor="">Name</label>
          <p>John Doe</p>
        </div>

        <div className="email">
          <label htmlFor="">Email</label>
          <p>johndoe@mail.com</p>
        </div>

        <div className="disclosure">
          <label htmlFor="">Disclosure</label>
          <p>yes</p>
        </div>

        <div className="btns">
            <button className="edit">
                <img src={edit} alt="" />
            </button>
            <button className="delete">
                <img src={dlt} alt="" />
            </button>
            </div>
      </div>
    </>
  );
};

export default User;
