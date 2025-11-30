import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeTask } from "../features/tasks/taskSlice";

function TaskList() {
  // Get global state
  const tasks = useSelector((state) => state.tasks);
  // Dispatch event from
  const dispatch = useDispatch();

  const handleClick = (id) => {
    //console.log(taskId);
    // Implement task removal logic here
    dispatch(removeTask(id));
  };

  return (
    <div className="w-4/6">
      <br />
      <header className="flex justify-between items-center py-4">
        <h1>Task List ({tasks.length})</h1>
        <br />
        <Link
          to="/create"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-white hover:bg-indigo-700"
        >
          New Task
        </Link>
      </header>
      <br />
      <br />
      <div className="grid grid-cols-3 py-2 gap-6">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-md shadow-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex items-center py-1 gap-x-2">
                <Link
                  to={`/edit/${task.id}`}
                  className="bg-indigo-600 px-2 py-1 rounded-md text-xs text-white"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleClick(task.id)}
                  className="bg-red-600 px-2 py-1 rounded-md text-xs text-white"
                >
                  Remove
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
