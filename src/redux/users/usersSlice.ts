import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, nextUsers } from "./usersOperations";

export interface repoState {
  users: any[];
  nextUrl: string | null;
  error: null;
}

const initialState: repoState = {
  users: [],
  nextUrl: "",
  error: null,
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.users = [];
        state.nextUrl = null;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload.users;
        state.nextUrl = payload.links.next_url;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.users = [];
        state.nextUrl = null;
        state.error = payload;
      })

      .addCase(nextUsers.pending, state => {
        state.users = [...state.users];
        state.nextUrl = null;
        state.error = null;
      })
      .addCase(nextUsers.fulfilled, (state, { payload }) => {
        state.users = [...state.users, ...payload.users];
        state.nextUrl = payload.links.next_url;
        state.error = null;
      })
      .addCase(nextUsers.rejected, (state, { payload }) => {
        state.users = [];
        state.nextUrl = null;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
