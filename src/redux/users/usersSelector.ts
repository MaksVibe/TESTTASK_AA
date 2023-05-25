export const getUsers = (state: { users: { users: any } }) => state.users.users;
export const getNextUrl = (state: { users: { nextUrl: any } }) =>
  state.users.nextUrl;
export const getIsLoading = (state: { users: { isLoading: boolean } }) =>
  state.users.isLoading;
export const getUserCreated = (state: { users: { userCreated: any } }) =>
  state.users.userCreated;
