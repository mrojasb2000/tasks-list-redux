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
    <>
      <h1>Task List ({tasks.length})</h1>
      <br />
      <Link to="/create">New Task</Link>
      <br />
      <br />
      <br />
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <button onClick={() => handleClick(task.id)}>Remove</button>
                <span> | </span>
                <Link to={`/edit/${task.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TaskList;
