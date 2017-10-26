import React, { Component } from 'react';
import TaskButtons from '../TaskButtons';
import './index.css';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            key: props.id,
            status: props.status,
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.updateTaskStatus = this.updateTaskStatus.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    onInputChange(event) {
        this.setState({ title: event.target.value });
    }

    updateTaskStatus(status) {
        if(status === 'edit') {
            this.setState((prevState, props) => {
                return ({ cachedTitle: prevState.title });
            });
        }
        this.setState({ status: status });
    }

    cancelEdit() {
        this.setState({ title: this.state.cachedTitle });
    }

    render() {
        let taskElement;
        if(this.state.status === 'incomplete') {
            taskElement = <span className="Task">{this.state.title}</span>;        
        }
        else if(this.state.status === 'edit') {
            taskElement = 
                <input 
                    type="text" 
                    value={this.state.title} 
                    onChange={this.onInputChange}
                />;
        }
        else if(this.state.status === 'complete') {
    
        } 

        return (
            <div className='TaskContainer'>
                {taskElement}
                <TaskButtons
                    id={this.state.key}
                    title={this.state.title}
                    cachedTitle={this.state.cachedTitle}
                    status={this.state.status}
                    deleteTask={this.props.deleteTask}
                    cancelEdit={this.cancelEdit}
                    updateTaskStatus={this.updateTaskStatus}
                />
            </div>
        );
    }
}

export default Task;