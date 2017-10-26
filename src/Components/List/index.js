import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import Button from '../Button';
import './index.css';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            count: 0,
        };

        this.addTask = this.addTask.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
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
        });
        let count = this.state.count + 1;
        this.setState({ 
            tasks: tasks, 
            count: count,
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
                <input 
                    id="taskName" 
                    type="text"
                    onChange={this.onInputChange}
                />
                <Button
                    onClick = {() => {
                        if(!this.state.newTaskTitle || this.state.newTaskTitle === '') {
                            alert('New task title cannot be blank!')
                            return;
                        }
                        return this.addTask(this.state.newTaskTitle);
                    }}
                >
                    Add Task
                </Button>
                { this.state.tasks.length === 0 ? (
                    <div>No Tasks</div> ) : (
                    this.state.tasks.map(task => 
                        <div className="TaskContainer" key={task.key}>
                            <Task title={task.title} key={task.key} />
                            <Button onClick={() => this.deleteTask(task.key)}>
                                delete
                            </Button>
                        </div>
                    )
                )}
            </div>
        );
    }
}

List.PropTypes = {
    tasks: PropTypes.array,
    count: PropTypes.number,
}

export default List;