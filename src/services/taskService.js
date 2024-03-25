import { httpAxios } from "../helper/httpHelper";

export async function addTaskApi(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);
  return result;
}

