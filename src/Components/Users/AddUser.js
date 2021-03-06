import React, { useState } from "react";

import Card from "../Ui/Card";
import Button from "../Ui/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../Ui/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Oooops, you did something wrong",
        message: "Please, enter valid name or age",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Oooops, you did something wrong",
        message: "Please, enter valid age",
      });
      return;
    }
    const user = { name: enteredUsername, age: enteredAge };
    props.onAddUser(user);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form className={classes.input} onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="text"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
