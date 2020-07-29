import React, {useEffect, useState} from "react";
import Note from '../Note/note';
import './notesHolder.scss';

const localStorage = window.localStorage;

const NotesHolder = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')));

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    });


    function confirmDeletion(index) {
        setNotes(notes.filter((_, i) => i !== index));
        console.log('confirmDeletion', index);
    }

    function confirmEdition() {
        console.log('confirmEdition');
    }

    return (
        <div className='notes-holder' style={{display: 'flex', flexWrap: 'wrap'}}>
            {notes.map((note, index) =>
                <Note confirmDeletion={() => confirmDeletion(index)} confirmEdition={confirmDeletion}
                      key={index} note={note}/>
            )}
        </div>
    )
};

export default NotesHolder
