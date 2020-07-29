import "./noteEditor.scss";
import React from "react";

const NoteEditor = ({isShown}) => {
    return (
        <div className={isShown ? 'none' : 'note-editor-container'}>

        </div>
    )
};
export default NoteEditor
