import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {


    return(
        //.map creates a list and takes in a function
        <> 
            {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks