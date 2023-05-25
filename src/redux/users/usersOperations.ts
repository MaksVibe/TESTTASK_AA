import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersApi, createUserApi } from "../api";

export const fetchUsers: any = createAsyncThunk(
  "getUsers",
  async (_, thunkAPI) => {
    try {
      const data = await getUsersApi();

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const nextUsers: any = createAsyncThunk(
  "nextUsers",
  async (url, thunkAPI) => {
    try {
      const data = await getUsersApi(url);

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createUser: any = createAsyncThunk(
  "createUser",
  async (user: any, thunkAPI) => {
    try {
      const data: any = await createUserApi(user);
      const users = await getUsersApi();

      return { data: data.data, users };
    } catch ({ message }) {
      const users = await getUsersApi();
      return { message: thunkAPI.rejectWithValue(message), users };
    }
  }
);
