import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import Button from '../Button';
import './index.css';

require('core-js/fn/array/find-index');

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            count: 0,
            newTaskTitle: '',
        };

        this.addTask = this.addTask.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    onInputChange(event) {
        this.setState({
            newTaskTitle: event.target.value
        });
    }

    addTask(title) {
        let tasks = this.state.tasks;
        tasks.push({
            title: title,
            key: this.state.count,
            status: 'incomplete',
        });
        let count = this.state.count + 1;
        this.setState({ 
            tasks: tasks, 
            count: count,
            newTaskTitle: ''
        });
    }

    deleteTask(key) {
        this.setState((prevState, props) => ({
            tasks: prevState.tasks.filter((task) => task.key !== key)
        }));
    }

    render() {
        return (
            <div className="List">
                { this.state.tasks.length === 0 ? (
                    <div>All tasks complete!</div> ) : (
                    this.state.tasks.map(task => 
                        <Task 
                            key={task.key}
                            title={task.title} 
                            id={task.key}
                            status={task.status}
                            deleteTask={this.deleteTask}
                        /> 
                    )
                )}
                <input 
                    id="taskName" 
                    className="newTaskInput"
                    type="text"
                    placeholder="New Task"
                    value={this.state.newTaskTitle}
                    onChange={this.onInputChange}
                />
                <Button
                    className="newTaskButton"
                    onClick = {() => {
                        if(this.state.newTaskTitle === '') {
                            alert('New task title cannot be blank!')
                            return;
                        }
                        return this.addTask(this.state.newTaskTitle);
                    }}
                >
                    <i className="fa fa-plus" aria-hidden="true"></i>                
                </Button>
            </div>
        );
    }
}

List.PropTypes = {
    tasks: PropTypes.array,
    count: PropTypes.number,
}

export default List;