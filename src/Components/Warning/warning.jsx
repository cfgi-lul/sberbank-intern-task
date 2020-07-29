import "./warning.scss";
import React from "react";

const Warning = ({isShown, confirmDeletion, closeWarning}) => {
    return (
        <div className={isShown ? 'warning-wrapper' : 'hidden'}>
            <div className='warning-container'>
                <div className='warning-title'>
                    <p>Do you really wanna delete this note???</p>
                </div>
                <button className='button' onClick={()=>{confirmDeletion(); closeWarning()}}>Yes</button>
                <button className='button' onClick={closeWarning}>No</button>
            </div>
        </div>
    )
};
export default Warning
