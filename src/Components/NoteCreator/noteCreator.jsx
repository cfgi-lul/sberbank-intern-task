import "./noteCreator.scss";
import React, {useState} from "react";
import {Task} from "../Task/Task";

export const NoteCreator = ({isShown, addNewNote, closeCreateNote}) => {
    const [tasks, setTasks] = useState([]);
    const [noteName, setNoteName] = useState('');

    function addTask() {
        let temp = [...tasks];
        temp.push({name: '', isChecked: false});
        setTasks(temp);
    }

    const onDelete = (index) => {
        setTasks(tasks.filter((e, i) => i !== index));
    };

    const onCheckToggler = (index) => {
        const newTask = [...tasks];
        newTask[index].isChecked = !newTask[index].isChecked;
        setTasks(newTask);
    };

    const onChange = (index) => {
        const newTasks = [...tasks];
        return (newTaskName) => {
            newTasks[index].name = newTaskName;
            setTasks(newTasks);
        };
    };

    return (
        <div className={isShown ? 'note-editor-wrapper' : 'hidden'}>
            <div className='note-editor-container'>
                <div className='note-name'>
                    <p className='note-name-description'>Task name: </p>
                    <input className='note-name-input'
                           value={noteName}
                           onChange={(event) => setNoteName(event.target.value)}
                           type="text"/>

                </div>
                <hr className='hr'/>
                <div className='tasks'>
                    {
                        tasks.map((task, index) =>
                            <Task key={index}
                                  task={task}
                                  onChange={onChange(index)}
                                  onDelete={() => onDelete(index)}
                                  onCheckToggler={() => onCheckToggler(index)}/>
                        )
                    }
                </div>
                <button onClick={addTask}>Add Task</button>
                <button onClick={() => {
                    addNewNote({name: noteName, tasks: tasks});
                    closeCreateNote();
                    setTasks([]);
                    setNoteName('');
                }}>Add Note
                </button>
                <button onClick={() => {
                    closeCreateNote();
                    setTasks([]);
                    setNoteName('');
                }}>Cancel
                </button>
            </div>
        </div>
    )
};
