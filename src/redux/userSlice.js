import { createSlice } from "@reduxjs/toolkit";
import { addUser, fetchUsers } from "./operations";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isUserAdded: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isUserAdded = true;
      });
  },
});

export const usersReducer = usersSlice.reducer;
