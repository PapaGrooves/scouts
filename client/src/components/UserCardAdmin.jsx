import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import edit from "../assets/images/edit.png";
import dlt from "../assets/images/delete.png";
// import { AuthContext } from "../context/AuthContext";
import { useUsersContext } from "../hooks/useUsersContext";

const UserCardAdmin = (props) => {
  const { dispatch } = useUsersContext();
  const [updatedUser, setUpdatedUser] = useState({});
  // const { user } = useContext(AuthContext);

  const [isAdmin, setIsAdmin] = useState(false);

useEffect(() => {
  if (props.is_admin === 1) {
    setIsAdmin(true);
  }
}, [props.is_admin]);

  // const isAdmin = props.is_admin === 1;

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/users/" + props.user._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_USER", payload: json });
    }
  };

  const handleUpdate = async (e, close) => {
    e.preventDefault(); //prevents page refresh

    console.log("handleUpdate triggerred");

    const response = await fetch(
      "http://localhost:4000/api/users/" + props.user._id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }
    );
    const json = await response.json();

    if (response.ok) {
      // Dispatch the action to update the user in the context
      dispatch({
        type: "UPDATE_USER",
        payload: { _id: props.user._id, updatedUser: json },
      });
    }
    console.log("handleUpdate handled");
    // alert("User data updated successfully. Refresh page to see changes.")
    // navigate("/helpers")
    close();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const capitalizedValue =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [id]: capitalizedValue,
    }));
  };
  if (props.user.is_admin === 1){
    console.log(props,"usercard")

  return (
    <div className="user">
      <div className="name">
        <label htmlFor="">Name</label>
        <p>{props.user.name}</p>
      </div>

      <div className="email">
        <label htmlFor="">Email</label>
        <p>{props.user.email}</p>
      </div>

      <div className="disclosure">
        <label htmlFor="">Disclosure</label>
        <p>{props.user.disclosure}</p>
      </div>

      <div className="availability">
        <label htmlFor="">Availability</label>
        <p>{props.user.availability}</p>
      </div>

      <div className="btns">
        {/* {isAdmin ? (
          <> */}
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
                  <p className="close" onClick={close}>
                    x
                  </p>

                  <div className="header">
                    <h2>Update Info</h2>
                  </div>

                  <p className="smallPrint">
                    *refresh the page to view changes
                  </p>
                  <div className="content">
                    <form action="">
                      <div>
                        <label htmlFor="fname">First Name</label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder={props.fname}
                          value={updatedUser.fname || ""}
                          onChange={handleChange}
                          // onMouseEnter={changeCase}
                        />
                      </div>
                      <div>
                        <label htmlFor="lname">Last Name</label>
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          placeholder={props.lname}
                          value={updatedUser.lname || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder={props.email}
                          value={updatedUser.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="disclosure">Disclosure</label>
                        <select
                          name="disclosure"
                          id="disclosure"
                          // defaultValue={props.disclosure}
                          value={updatedUser.disclosure || ""}
                          onChange={handleChange}
                        >
                          <option value="" disabled selected hidden>
                            {props.disclosure}
                          </option>
                          <option value="pending">Pending</option>
                          <option value="approved">Approved</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                          type="text"
                          id="dob"
                          name="dob"
                          placeholder={props.dob}
                          disabled
                        />
                      </div>

                      <div>
                        <label htmlFor="availability">Availability</label>
                        <input
                          type="text"
                          id="availability"
                          name="availability"
                          placeholder={props.availability}
                          value={updatedUser.availability || ""}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <button
                          onClick={(e) => handleUpdate(e, close)}
                          type="submit"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </Popup>

            <button className="delete" onClick={handleClick}>
              <img src={dlt} alt="" />
            </button>
          {/* </>
        ) : null } */}
      </div>
    </div>
  );
};
}



export default UserCardAdmin;
