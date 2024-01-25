import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import { UserFormForm, UserFormBtn, UserFormDiv } from "./UserForm.styled";
import { selectUsers } from "../../redux/selectors";
import { addUser } from "../../redux/operations.js";

export default function UserForm() {
  const users = useSelector(selectUsers);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      alert("All fields must be filled in");
      return;
    }
    addNewUser({ id: nanoid(), firstName, lastName, email });
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const addNewUser = (newUser) => {
    if (
      users.users.find((user) => {
        return user.email.toLowerCase() === newUser.email.toLowerCase();
      })
    ) {
      alert(`user with email "${newUser.email}" is already in contacts `);
      return;
    }
    dispatch(addUser(newUser));
  };

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        console.log(`Unknown input`);
    }
  };

  return (
    <UserFormDiv>
      <UserFormForm noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          name='firstName'
          type='text'
          label="Ім'я"
          onChange={handleInputChange}
          value={firstName}
        />
        <TextField
          name='lastName'
          type='text'
          label='Прізвище'
          onChange={handleInputChange}
          value={lastName}
        />
        <TextField
          name='email'
          type='email'
          label='Email'
          onChange={handleInputChange}
          value={email}
        />
        <UserFormBtn variant='contained' type='submit'>
          Submit
        </UserFormBtn>
      </UserFormForm>
    </UserFormDiv>
  );
}
