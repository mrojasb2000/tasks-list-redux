import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  // Dispatch event from
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

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
    if (params.id) {
      // Update task logic here
      dispatch(updateTask({ id: params.id, ...task }));
    } else {
      // Add task logic here
      dispatch(addTask({ id: uuid(), ...task }));
    }
    navigate("/");
  };

  // Fetch task data from API or Redux store
  // Bootstrap component
  useEffect(() => {
    if (params.id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <div className="bg-white rounded-md w-4/6">
      <br />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-md max-w-sm"
      >
        <label className="block text-sm font-bold py-2">Task Name:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter task name"
          value={task.title}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2 text-white"
        />
        <br />
        <br />
        <label className="block text-sm font-bold py-2">
          Task Description:
        </label>
        <textarea
          name="description"
          placeholder="Enter task description"
          value={task.description}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2 text-white"
        />
        <br />
        <br />
        <button
          type="submit"
          className="bg-indigo-600 px-2 py-1 rounded-md text-xs text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
