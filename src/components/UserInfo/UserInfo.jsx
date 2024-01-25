import React from "react";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/selectors";
import {
  UserInfoCardContent,
  UserInfoSpan,
  UserInfoTypographyHead,
} from "./UserInfo.styled";

export default function UserInfo() {
  const users = useSelector(selectUsers);

  return (
    <UserInfoCardContent>
      <UserInfoTypographyHead>User added successfully!</UserInfoTypographyHead>
      <Typography>
        <UserInfoSpan>First Name:</UserInfoSpan>{" "}
        {users.users[users.users.length - 1].firstName}
      </Typography>
      <Typography>
        <UserInfoSpan>Second Name:</UserInfoSpan>{" "}
        {users.users[users.users.length - 1].lastName}
      </Typography>
      <Typography>
        <UserInfoSpan>Email:</UserInfoSpan>{" "}
        {users.users[users.users.length - 1].email}
      </Typography>
    </UserInfoCardContent>
  );
}
