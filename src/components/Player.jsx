import React, {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false); // by default, we are not editing

    function handleEditClick() {
        //setIsEditing(isEditing ? false : true);
        setIsEditing(editing => !editing); // working with the latest available state value
        if(isEditing) // we just click the button to stop editing
        onChangeName(symbol, playerName);
    }

    function handleChange(event) {
        setPlayerName(event.target.value) // target refers to the input element
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>; 
    // let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
        // btnCaption = "Save";
    }

  return (
    <li className={isActive ? 'active' : undefined}> 
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button> {/* ? -> true? => save, : -> false? => edit;  or btnCaption */} 
    </li>
  );
}
