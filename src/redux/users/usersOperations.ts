/* eslint-disable no-unreachable */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersApi } from "../api";

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
