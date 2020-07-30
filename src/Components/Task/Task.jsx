import React from "react";
import './Task.scss';


export const Task = ({task, onCheckToggler, onDelete, onChange}) => {

    return (
        <div className='notes-holder-wrapper'>
            <div className='task'>
                {task.isChecked}
                <input type="checkbox"
                       onChange={onCheckToggler}
                       checked={task.isChecked}
                       className='checkbox'/>
                <input type="text"
                       className='task-input'
                       value={task.name}
                       onChange={(event) => onChange(event.target.value)}
                       placeholder='Input your task'/>
                <button className='button' onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
};
