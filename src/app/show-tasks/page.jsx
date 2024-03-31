"use client";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksList } from "../../redux/asyncAction";
// export const metadata = {
//   title:"Show Tasks: Work Manager"
// }
const showTasks = () => {
  const dispatch = useDispatch();
  const tasksData = useSelector((state) => state.tasksData.tasks);
  useEffect(() => {
    dispatch(getTasksList());
  }, []);
  console.log("tasksData", tasksData);
  return (
    <div class=" m-4 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Title
            </th>
            <th scope="col" class="px-6 py-3">
              Content
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tasksData) &&
            tasksData.length > 0 &&
            tasksData.map((task) => (
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {task.title}
                </th>
                <td class="px-6 py-4">{task.content}</td>
                <td class="px-6 py-4">{task.status}</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="font-medium text-red-600 dark:text-red-500 hover:underline ml-4"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default showTasks;
