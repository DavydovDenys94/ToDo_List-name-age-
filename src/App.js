import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import Counter from "./Components/counter/Counter";

const initialUsers = [
  { name: "Dmitiy", age: 36 },
  { name: "Denys", age: 27 },
  { name: "Bob", age: 33 },
  { name: "Max", age: 34 },
  { name: "John", age: 23 },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const onAddUser = (newUser) => {
    // console.log("APP add users", userName, userAge);
    const filteredUsers = users.filter((user) => user.name !== newUser.name);
    setUsers([...filteredUsers, newUser]);
  };

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={users} />
      <Counter />
    </div>
  );
}

export default App;
