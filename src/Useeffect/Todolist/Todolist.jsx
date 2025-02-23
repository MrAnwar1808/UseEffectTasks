
import React, { useState } from 'react';
import './Todolist.css'

function TodoList() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(''); 
  const [editingIndex, setEditingIndex] = useState(null); 
  const [text, setNewText] = useState(''); 


  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setNewText(tasks[index]); 
  };


  const saveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = text;
    setTasks(updatedTasks);
    setEditingIndex(null); 
    setNewText(''); 
  };


  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; 
    setTasks(updatedTasks);
  };


  return (
    <div className="container">
      <h2>TO DO LIST</h2>

      <div>
        
        <input
          type="text"
          value={newTask}
          placeholder="Enter New Task"
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button className="add-btn" onClick={addTask}>
          ADD TASK
        </button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>

            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(index)}
            />

              {editingIndex === index ? (
        <div>
            <input type="text"
                   value={text}
                   onChange={(e) => setNewText(e.target.value)}
            />

            <button onClick={() => saveTask(index)}>Save</button>
        </div>) 
        : 

        (<span>{task}</span>)}

              
        <div>
            <button onClick={() => editTask(index)}>
                  Edit
            </button>

            <button onClick={() => removeTask(index)}>REMOVE TASK</button>

            </div>
            </li>
          ))}
        </ol>
        </div>
        </div>
  );
}

export default TodoList;
