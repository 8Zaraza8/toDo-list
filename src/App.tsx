import { useState } from 'react'
import './App.css'
import { Task, Importance } from './Task';
 

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [importance]

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  
  function addTask() {
    if(newTask.trim() !== '') {
      setTasks(t => [...t, newTask]);
      setNewTask('');
    }
  }
  
  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  
  
  return (
    <div className='to-do-list'>
      <h1>ToDo List</h1>
      <div className="creating-tasks">
        <input 
          type="text" 
          placeholder='create a task...'
          value={newTask}
          onChange={handleInputChange}/>
        <select name="" id="">
          <option value="">low</option>
          <option value="">medium</option>
          <option value="">high</option>
        </select>
        <button 
          className='add-button'
          onClick={addTask}>
            +
        </button>
      </div>
      <div className='active-tasks'>
        <ol>
          {tasks.map((task, index) => 
            <li key={index}>
              <span className='text'>{task}</span>
              <button className='delete-button' onClick={() => deleteTask(index)}>

              </button>
            </li>
            )}
        </ol>
      </div>
    </div>
  )
}


export default App