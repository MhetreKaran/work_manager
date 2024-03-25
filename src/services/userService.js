import { httpAxios } from "../helper/httpHelper";
export async function createUserApi(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);
  return result;
}
export async function userLoginApi(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return result;
}
