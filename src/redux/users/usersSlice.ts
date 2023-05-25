import { createSlice } from "@reduxjs/toolkit";
import { createUser, fetchUsers, nextUsers } from "./usersOperations";

export interface repoState {
  users: any[];
  nextUrl: string | null;
  isLoading: boolean;
  userCreated: string | null;
  error: null;
}

const initialState: repoState = {
  users: [],
  nextUrl: "",
  isLoading: false,
  userCreated: null,
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
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload.users;
        state.nextUrl = payload.links.next_url;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.users = [];
        state.nextUrl = null;
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(nextUsers.pending, state => {
        state.users = [...state.users];
        state.nextUrl = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(nextUsers.fulfilled, (state, { payload }) => {
        state.users = [...state.users, ...payload.users];
        state.nextUrl = payload.links.next_url;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(nextUsers.rejected, (state, { payload }) => {
        state.users = [];
        state.nextUrl = null;
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(createUser.pending, state => {
        state.users = [];
        state.nextUrl = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.users = payload.users.users;
        state.nextUrl = payload.users.links.next_url;
        state.userCreated = payload.data.message;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        state.users = payload.users.users;
        state.nextUrl = payload.users.links.next_url;
        state.userCreated = payload.message;
        state.isLoading = false;
        state.error = payload.message;
      });
  },
});

export const usersReducer = usersSlice.reducer;
