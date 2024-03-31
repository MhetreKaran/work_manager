"use client";
import React, { useState } from "react";
import { useDispatch } from "../../../node_modules/react-redux/dist/react-redux";
import { addTaskApi } from "../../redux/asyncAction";
// export const metadata = {
//   title: "Add Task: Work Manager",
// };
const addTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "65fa82e254779eed9741309b",
  });
  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);
    // validate task data
    try {
      dispatch(addTaskApi(task));
    } catch (error) {
      console.log(error);
    }
  };
  const clearForm = () => {
    setTask({
      title: "",
      content: "",
      status: "none",
      userId: "65fa82e254779eed9741309b",
    });
  };
  return (
    <div className="grid grid-cols-12 justify-center m-4">
      <div className="border-white col-span-6 col-start-4 px-5 rounded-2xl shadow-2xl border">
        <h1 className="text-3xl mb-2 text-center">Add your task here</h1>
        <form onSubmit={handleAddTask}>
          <div class="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="task_title"
              type="text"
              placeholder="Title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          <div class="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="content"
            >
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              rows={5}
              type="text"
              placeholder="Content...."
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          <div class="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="status"
            >
              Status
            </label>
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="task_status"
              onChange={(event) => {
                setTask({ ...task, status: event.target.value });
              }}
              value={task.status}
            >
              <option value="none" selected disabled>
                -- Select Status --
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 border-b-4 border-blue-950 hover:border-blue-700 rounded"
              >
                Add Task
              </button>
              <button
                type="clear"
                onClick={clearForm}
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded ms-3"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addTask;
