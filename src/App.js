import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)


  const [tasks, setTasks] = useState([{
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
      id: 2,
      text: 'School Meeting',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
  },
  {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
  },
  ])

  //AddTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1)

    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    //.filter takes in a function
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggleReminder
  const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  )
}

export default App;
