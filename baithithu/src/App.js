import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


function App() {


  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, name: taskName, completed: false }
    ]);
    setTaskName("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Quản Lý Công Việc</h1>
        </header>
        <div>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Thêm công việc"
          />
          <button onClick={addTask}>Thêm</button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
              </span>
              <button onClick={() => toggleCompleted(task.id)}>
                {task.completed ? 'Hoàn Thành' : 'Gạch'}
              </button>
              <button onClick={() => deleteTask(task.id)}>Xoá</button>
            </li>
          ))}
        </ul>
        <footer>
          <p>&copy; Make by me</p>
        </footer>
      </div>
    </Router>
    
  );
}
export default App;
