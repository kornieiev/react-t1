import styled from "@emotion/styled";
import { CardContent, Typography } from "@mui/material";

export const UserInfoCardContent = styled(CardContent)`
  margin-top: 10px;
  padding: 10px;
  width: 300px;
  border: 2px solid #1976d2;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
`;

export const UserInfoTypographyHead = styled(Typography)`
  color: #1976d2;
  font-weight: 900;
`;

export const UserInfoSpan = styled.span`
  font-weight: 700;
`;
