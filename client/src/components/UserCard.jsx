import React from "react";

import edit from "../assets/images/edit.png";
import dlt from "../assets/images/delete.png";

import Popup from "reactjs-popup";

const UserCard = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className="user">
      <div className="name">
        <label htmlFor="">Name</label>
        <p>{props.name}</p>
      </div>

      <div className="email">
        <label htmlFor="">Email</label>
        <p>{props.email}</p>
      </div>

      <div className="disclosure">
        <label htmlFor="">Disclosure</label>
        <p>{props.disclosure}</p>
      </div>

      <div className="btns">
        <Popup
          className="popup"
          trigger={
            <button className="edit">
              <img src={edit} alt="" />
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="adminModal">
              <p className="close" onClick={() => close()}>
                x
              </p>

              <div className="header">
                <h2>Update Info</h2>
              </div>

              <div className="content">
                <form action="">
                  <div>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" placeholder={props.fname} />
                  </div>
                  <div>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" placeholder={props.lname} />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder={props.email} />
                  </div>
                  <div>
                    <label htmlFor="disclosure">Disclosure</label>
                    <select
                      name="disclosure"
                      id="disclosure"
                    >
                      <option value="" disabled selected hidden>{props.disclosure}</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="text" id="dob" placeholder={props.dob} disabled/>
                  </div>

                  <div>
                    <button type="submit">Update</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Popup>

        <button className="delete">
          <img src={dlt} alt="" />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
