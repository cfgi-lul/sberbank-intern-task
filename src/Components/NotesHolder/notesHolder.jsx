import React from "react";
import Note from '../Note/note';

const NotesHolder = () => {
    const notes = [{
        name: "First Note", tasks: [{
            isChecked: false,
            name: 'Do that task'
        }, {isChecked: true, name: 'second'}]
    }, {
        name: "First Note", tasks: [{
            isChecked: false,
            name: 'Do that task'
        }, {isChecked: true, name: 'second'}]
    }, {
        name: "First Note", tasks: [{
            isChecked: false,
            name: 'Do that task'
        }, {isChecked: true, name: 'second'}]
    }];

    return (
        <div className='notes-holder' style={{display: 'flex', 'flex-wrap': 'wrap'}}>
            {notes.map((note, index) =>
                <Note key={index} note={note}/>
            )}
        </div>
    )
};

export default NotesHolder
