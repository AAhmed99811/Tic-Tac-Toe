import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    const handleEditCLick = () => {
        setIsEditing(editing => !editing)
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditCLick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

export default Player;