import { tasks } from "./tasks.js";
import { useState } from "react";
console.log(tasks);

function TaskList() {
  const [tasks, setTasks] = (useState = []);
  if(tasks.length === 0) {
    return <h1>no hay tareas aun</h1>
  }

  return (
    <div>
      {tasks.map((tasks) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList;
