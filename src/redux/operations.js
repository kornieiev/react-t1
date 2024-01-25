import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6574dd84b2fbb8f6509cbbe6.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (e) {
      alert("Error! " + e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users", newUser);
      return response.data;
    } catch (e) {
      alert("Error! " + e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
