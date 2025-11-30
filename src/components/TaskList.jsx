import { useSelector, useDispatch } from "react-redux";
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
      <h1>Task List</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => handleClick(task.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}

export default TaskList;
