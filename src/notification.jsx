import React from 'react'

export default function Notification({ gameState, hintPoints, cardName }) {    
    let message = ''
    if (gameState === 'won') {
        message = `Correct! You get ${hintPoints} points.`
    } else if (gameState === 'loss') {
        message = "The card's name was " + cardName
    }

    let color = {}
    if (gameState === "won") {
        color = { backgroundColor: "rgb(147, 255, 112)" }
    } else if (gameState === "loss") {
        color = { backgroundColor: "rgb(255, 139, 139)"}
    }

    return (
        <div className='notification' style={color}>
            {message}
        </div>
    )
}