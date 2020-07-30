import "./noteCreator.scss";
import React, {useState} from "react";

const NoteCreator = ({isShown, addNewNote, closeCreateNote}) => {
    const [tasks, setTasks] = useState([]);
    const [noteName, setNoteName] = useState('');

    function addTask() {
        let temp = [...tasks];
        temp.push({name: '', isChecked: false});
        setTasks(temp);
    }

    return (
        <div className={isShown ? 'note-editor-wrapper' : 'hidden'}>
            <div className='note-editor-container'>
                <div className='note-name'>
                    <p className='note-name-description'>Task name: </p>
                    <input className='note-name-input'
                           onChange={(event) => setNoteName(event.target.value)}
                           type="text"/>

                </div>
                <hr className='hr'/>
                <div className='tasks'>
                    {
                        tasks.map((task, index) =>
                            <div key={index} className='task'>
                                <input type="checkbox"
                                       onChange={(event) => task.isChecked = event.target.value}
                                       className='checkbox'/>
                                <input type="text" className='task-input'
                                       onChange={(event) => task.name = event.target.value}
                                       placeholder='Input your task'/>
                                <button className='button'>Delete</button>
                            </div>
                        )
                    }
                </div>
                <button onClick={addTask}>Add Task</button>
                <button onClick={() => {
                    addNewNote({name: noteName, tasks: tasks});
                    closeCreateNote()
                }}>Add Note
                </button>
            </div>
        </div>
    )
};
export default NoteCreator
