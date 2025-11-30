import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  // Dispatch event from
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    //console.log(e.target.name, e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //No refresh page
    // Add task logic here
    //console.log(task);
    dispatch(addTask({ id: uuid(), ...task }));
  };

  return (
    <>
      <h1>Task Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            name="title"
            placeholder="Enter task name"
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Task Description:
          <textarea
            name="description"
            placeholder="Enter task description"
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

export default TaskForm;
