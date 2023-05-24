import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = baseUrl;

const token = {
  set(token: any) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function getToken() {
  token.unset();
  const data = await axios.get("api/v1/token").then(res => res.data);
  token.set(data.token);
  return data.token;
}

export async function getUsersApi(url?: any) {
  getToken();
  const data = await axios.get(
    url ? url.replace(baseUrl, "") : `api/v1/users?page=1&count=6`
  );

  return data.data;
}

export async function createUserApi(user: any) {
  await axios.post("api/v1/users", user);
}
