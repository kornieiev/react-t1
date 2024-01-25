import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const UserFormDiv = styled.div`
  margin-top: 50px;
  padding: 10px;
  width: 300px;
  border: 2px solid black;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const UserFormForm = styled.form`
  border-radius: 10px;
  gap: 10px;
  background-color: #fff;
  display: flex;
  padding: 10px 10px;
  flex-direction: column;
`;

export const UserFormBtn = styled(Button)`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  transition: background-color 500ms;

  &:hover {
    background-color: #5469d4;
  }
`;
