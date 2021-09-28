import React, { Component } from 'react';
import './index.css';

export default class ToDoDragDropDemo extends Component {

    state = {
        tasks: [
            {id: "1", taskName:"Read Book", type: "inProgress", backgroundColor: "red"},
            {id: "2", taskName:"Pay phone bill", type: "inProgress", backgroundColor: "green"},
            {id: "3", taskName:"Exercise", type: "Done", backgroundColor: "blue"},
            {id: "4", taskName:"Call School", type: "Done", backgroundColor: "green"},

        ]
    }

    onDragStart = (event, taskName) => {
    	console.log('dragstart on div: ', taskName);
    	event.dataTransfer.setData("taskName", taskName);
	}
	onDragOver = (event) => {
	    event.preventDefault();
	}

	onDrop = (event, cat) => {
	    let taskName = event.dataTransfer.getData("taskName");

	    let tasks = this.state.tasks.filter((task) => {
	        if (task.taskName == taskName) {
	            task.type = cat;
	        }
	        return task;
	    });

	    this.setState({
	        ...this.state,
	        tasks
	    });
	}

    render() {
        var tasks = {
            inProgress: [],
            Done: []
        }

        this.state.tasks.forEach ((task) => {
            tasks[task.type].push(
                <div key={task.taskName}
                className="draggable"
                style = {{backgroundColor: task.bgcolor}}>
                    {task.taskName}
                </div>
            )
        })


        return(
            <div className="drag-container">
                <h2 className="head">To Do List Drag and Drop</h2>
                <div className="inProgress"> 
                    <span className="group-header">In Progress</span>
                    {tasks.inProgress}
                </div>
                <div className="droppable">
                    <span className="group-header">Done</span>
                    {tasks.Done}
                </div>
                <div className="inProgress"
                onDragOver={(event) => this.onDragOver(event)}
                onDrop={(event)=>{this.onDrop(event, "inProgress")}}>
  	                <span className="group-header">In Progress</span>
  	                {tasks.inProgress} 
                </div>
            </div>
        )
    }
}