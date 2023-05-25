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
  const data = await axios.get("api/v1/token").then(res => res.data);
  return data.token;
}

export async function getUsersApi(url?: any) {
  token.unset();
  token.set(getToken());
  const data = await axios.get(
    url ? url.replace(baseUrl, "") : `api/v1/users?page=1&count=6`
  );

  return data.data;
}

export async function createUserApi(user: any) {
  const token = await getToken();
  let formData = new FormData();
  formData.append("position_id", user.position_id);
  formData.append("name", user.name);
  formData.append("email", user.email);
  formData.append("phone", user.phone);
  formData.append("photo", user.photo);

  const data = await axios.post("api/v1/users", formData, {
    headers: {
      Token: token,
      "content-type": "multipart/form-data",
    },
  });
  return data;
}
