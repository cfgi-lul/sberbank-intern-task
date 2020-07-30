import "./noteEditor.scss";
import React from "react";

const NoteEditor = ({isShown}) => {
    return (
        <div className={isShown ? 'note-editor-wrapper' : 'hidden'}>
            <div className='note-editor-container'>

            </div>
        </div>
    )
};
export default NoteEditor
