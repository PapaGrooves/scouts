import { useEffect } from "react";
import UserCard from "./UserCard";
import { useUsersContext } from "../hooks/useUsersContext";

function ListUsers() {
  const { users, dispatch } = useUsersContext();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:4000/api/users");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_USER", payload: json });
      }
    };
    fetchUsers();
  }, [dispatch]);
  console.log(users, "coming from ListofUsers");

  
  return (
    <div className="usersWrap">
      {users &&
        users.map((user) => (
          <li key={user._id}>
              <UserCard user={user} />
          </li>
        ))}
    </div>
  );
}
export default ListUsers;
