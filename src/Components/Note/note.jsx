import "./note.scss";
import React, {useState} from "react";
import {NoteEditor} from "../NoteEditor/noteEditor";
import {Warning} from "../Warning/warning";

export const Note = ({confirmEdition, note, index, confirmDeletion}) => {
    const [isEditorShown, setEditorShow] = useState(false);
    const [isWarningShown, setWarningShow] = useState(false);

    function closeWarning() {
        setWarningShow(false);
    }

    function closeNoteEditor() {
        setEditorShow(false);
    }

    return (
        <div className='note-container'>
            <div className='navigation-container'>
                <button onClick={() => {
                    setEditorShow(true)
                }} className='button'>Edit
                </button>
                <button onClick={() => setWarningShow(true)} className='button'>Delete</button>
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
            <Warning confirmDeletion={confirmDeletion} closeWarning={closeWarning} isShown={isWarningShown}/>
            <NoteEditor note={JSON.parse(JSON.stringify(note))}
                        index={index}
                        confirmEdition={confirmEdition}
                        closeNoteEditor={closeNoteEditor}
                        isShown={isEditorShown}/>
        </div>
    )
};

