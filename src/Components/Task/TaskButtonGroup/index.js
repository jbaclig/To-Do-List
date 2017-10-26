import React from 'react';
import TaskButton from './TaskButton';
import './index.css';

const TaskButtonGroup = ({ 
    id, 
    title,
    status, 
    deleteTask, 
    cancelEdit, 
    updateTaskStatus 
}) =>
    status === 'edit' ? (
        <EditButtons
            updateTaskStatus={updateTaskStatus}
            cancelEdit={cancelEdit}
        />
    ) : (
        status === 'incomplete' ? (
            <IncompleteButtons
                id={id}
                updateTaskStatus={updateTaskStatus}
                deleteTask={deleteTask} 
            />
        ) : (
            <CompleteButtons
                id={id}
                updateTaskStatus={updateTaskStatus}
                deleteTask={deleteTask}
            />
        )
    )

const EditButtons = ({
    updateTaskStatus,
    cancelEdit,
}) => 
    <span className="TaskButtons">
        <TaskButton
            onClick={() => updateTaskStatus('incomplete')}
            iconName="check"
        />
        <TaskButton
            onClick={() => {
                cancelEdit();
                updateTaskStatus('incomplete');
            }}
            iconName="times"
        />
    </span>

const IncompleteButtons = ({
    id,
    updateTaskStatus,
    deleteTask,
}) =>
    <span className="TaskButtons">
        <TaskButton
            onClick={() => updateTaskStatus('edit')}
            iconName="pencil"
        />
        <TaskButton
            onClick={() => deleteTask(id)}
            iconName="trash-o"
        />
        <TaskButton
            onClick={() => updateTaskStatus('complete')}
            iconName="check"
        />  
    </span>

const CompleteButtons = ({
    id,
    updateTaskStatus,
    deleteTask
}) =>
    <span className="TaskButtons">
        <TaskButton
            onClick={() => updateTaskStatus('incomplete')}
            iconName="undo"
        />
        <TaskButton
            onClick={() => deleteTask(id)}
            iconName="trash-o"
        />
    </span>

export default TaskButtonGroup;