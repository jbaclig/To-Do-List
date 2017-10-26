import React from 'react';
import Button from '../../../Button';
import './index.css';

const TaskButton = ({
    onClick,
    iconName,
}) =>
    <Button
        className="TaskButton"
        onClick={onClick}
    >
        <i className={`fa fa-${iconName}`} aria-hidden="true"></i>
    </Button>

export default TaskButton;
