import React from "react";
import Card from "../Ui/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
  console.log("UserList", props);
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.name}>
            {user.name} ({user.age} полных лет)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
