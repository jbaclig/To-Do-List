import React from 'react';
import Button from '../Button';
import './index.css'

const TaskButtons = ({ 
    id, 
    title,
    status, 
    deleteTask, 
    cancelEdit, 
    updateTaskStatus 
}) =>
    status === 'edit' ? (
        <span className="TaskButtons">
            <Button onClick={() => updateTaskStatus('incomplete')}>
                <i className="fa fa-check" aria-hidden="true"></i>
            </Button>
            <Button onClick={() => {
                cancelEdit();
                updateTaskStatus('incomplete');
            }}>
                <i className="fa fa-times" aria-hidden="true"></i>            
            </Button>
        </span>
    ) : (
        <span className="TaskButtons">
            <Button onClick={() => updateTaskStatus('edit')}>
                <i className="fa fa-pencil" aria-hidden="true"></i>                            
            </Button>
            <Button onClick={() => deleteTask(id)}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>            
            </Button>
        </span>
    )

export default TaskButtons;