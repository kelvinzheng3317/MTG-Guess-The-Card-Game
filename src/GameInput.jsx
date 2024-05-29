import React from "react";

export default function GameInput({hintPoints, guess, setGuess, checkGuess, getNextHint, loss}) {
    return (
        <div className='game-input'>
            <div className='game-input-header'>
            <div className='points'><p>+{hintPoints}</p></div>
            <label htmlFor="guess_name">Guess the card name: </label>
            </div>
            <input 
            id="guess_name" 
            type="text"
            value={guess}
            onChange={event => setGuess(event.target.value)}
            onKeyUp={(event) => event.key === "Enter" && checkGuess()}
            />
            {hintPoints>1 && <button onClick={getNextHint}>Get Next Hint</button>}
            <button onClick={checkGuess}>Submit</button>
            <button onClick={loss}>Skip</button>
        </div>
    )
}