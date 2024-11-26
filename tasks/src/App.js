import { useState } from "react";
import './App.css';

function TaskForm(props) {
  const [formData, setFormdata] = useState({task: "", deadline: ""});

  function changeHandler(e) {
    setFormdata({...formData, [e.target.name]: e.target.value});
  }
  // e parameter is a readily available event object provided by a mechanism outside of React
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormdata({task: "", deadline: ""});
  }

  return (
    <div>
      <h1>Tasks and deadlines:</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="task" placeholder="Task" value={formData.task} onChange={changeHandler} />
        <input type="text" name="deadline" placeholder="Finish by" value={formData.deadline} onChange={changeHandler} />
        <button>Add Task</button>
      </form>
    </div>
  )
}

function ListOfTasks(props) {
  return (
    <ol>
      {props.allTasks.map( (t) => (
        <li key={t.task}>
          <span>The task is to {t.task} by {t.deadline} latest.</span>
        </li>
      ))}
    </ol>
  );
}

function App() {
  const [allTasks, updateAllTasks] = useState([]);

  function addTask(task) { updateAllTasks([...allTasks, task]); }

  return (
    <div classname="App">
      <TaskForm onAdd={addTask} />
      <ListOfTasks allTasks={allTasks} />
    </div>
  );
}

export default App;
