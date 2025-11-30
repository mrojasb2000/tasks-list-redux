import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <h1>Tasks Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
