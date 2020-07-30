import React, {useCallback, useEffect, useState} from "react";
import Note from '../Note/note';
import './notesHolder.scss';
import NoteCreator from '../NoteCreator/noteCreator'

const localStorage = window.localStorage;

const NotesHolder = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')));
    const [isCreateNoteShown, setCreateNoteShow] = useState(false);


    const confirmDeletion = useCallback(
        index => {
            setNotes(notes.filter((_, i) => i !== index));
        }, [notes]
    );

    function confirmEdition(note, index) {
        let temp = [...notes];
        temp.splice(index, 1, note);
        setNotes(temp);
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNewNote = useCallback((note) => {
            let temp = [...notes];
            temp.push(note);
            setNotes(temp);
        }, [notes]
    );

    function closeCreateNote() {
        setCreateNoteShow(false);
    }

    return (
        <div className='notes-holder-wrapper'>
            <button onClick={() => setCreateNoteShow(true)} className='add-note-button'>Add new Note</button>
            <div className='notes-holder'>
                {notes.map((note, index) =>
                    <Note confirmEdition={confirmEdition} index={index} confirmDeletion={() => confirmDeletion(index)}
                          key={index} note={note}/>
                )}
            </div>
            <NoteCreator addNewNote={addNewNote} closeCreateNote={closeCreateNote} isShown={isCreateNoteShown}/>
        </div>
    )
};

export default NotesHolder
