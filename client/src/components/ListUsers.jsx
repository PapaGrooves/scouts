// import { React } from "react";
import { useEffect } from "react";
import UserCard from "./UserCard";
import { useUsersContext } from "../hooks/useUsersContext"


// const filteredData = Users.filter((el) => {
  //   //if no input the return the original
  //   if (props.input === "") {
  //     return el;
  //   }
  //   //return the user which contains the user input
  //   else {
  //     return el.fname.toLowerCase().includes(props.input);
  //   }
  // });

  
  function ListUsers() {

  const {users, dispatch} = useUsersContext()

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users")
      const json = await response.json()

      if (response.ok) {
        dispatch({type: "SET_USERS", payload: json})
      }
    }
    fetchUsers()
  }, [dispatch])


  return (
    <div className="usersWrap">
      {users && users.map((user) => (
        <li>
          <UserCard
            key={user._id}
            fname={user.fname}
            lname={user.lname}
            name={user.fname + " " + user.lname}
            email={user.email}
            disclosure={user.disclosure}
            dob={user.dob.toString()}
            availability={user.availability}
          />
        </li>
      ))}
    </div>
  );
}

export default ListUsers;
