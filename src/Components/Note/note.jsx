import "./note.scss";
import React from "react";

const Note = ({note}) => {
    return (
        <div className='note-container'>
            <div className='navigation-container'>
                <button className='button'>Edit</button>
                <button className='button'>Delete</button>
            </div>
            <p className='title'>{note.name}</p>
            <hr className='hr'/>
            <div className='task-holder-container'>
                {note.tasks.map((task, index) =>
                    <div className='task-container' key={index}>
                        <input className='task-checkbox' type="checkbox" checked={task.isChecked}
                               readOnly={true}/>
                        <p className='task-description'>{task.name}</p>
                    </div>)}
            </div>
        </div>
    )
};
export default Note
