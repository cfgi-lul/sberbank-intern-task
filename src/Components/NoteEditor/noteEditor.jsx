import "./noteEditor.scss";
import React, {useEffect, useState} from "react";
import {Task} from "../Task/Task";

export const NoteEditor = ({note, index, isShown, confirmEdition, closeNoteEditor}) => {
    const [tasks, setTasks] = useState(note.tasks);
    const [noteName, setNoteName] = useState(note.name);

    useEffect(() => {
        setNoteName(note.name);
        setTasks(note.tasks);
    }, [note]);

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
                        tasks?.map((task, index) =>
                            <Task key={index}
                                  task={task}
                                  onChange={onChange(index)}
                                  onDelete={() => onDelete(index)}
                                  onCheckToggler={() => onCheckToggler(index)}/>)
                    }
                </div>

                <button onClick={() => {
                    let temp = [...tasks];
                    temp.push({name: '', tasks: ''});
                    setTasks(temp);
                }}>Add Task
                </button>

                <button onClick={() => {
                    confirmEdition({name: noteName, tasks: tasks}, index);
                    closeNoteEditor();
                }}>Edit Note
                </button>

                <button onClick={closeNoteEditor}>Cancel</button>
            </div>
        </div>
    )
};
