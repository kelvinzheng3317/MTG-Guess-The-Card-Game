import React from 'react'
import PropTypes from 'prop-types'
import './CardInfo.css'

export default function  CardInfo({ card, hintPoints, gameState }) {
    CardInfo.propTypes = {
        card: PropTypes.object
    } 

    let showHint = hintPoints < 2 || gameState != "guessing"

    let color = 'gray'
    if (card.color_identity.length === 0) {
        color = '#d9c084'
    } else {
        switch(card.color_identity[0]) {
            case 'R':
                color = '#ff8b87'
                break
            case 'G':
                color = '#a2bcad'
                break
            case 'U':
                color = '#5aa6cf'
                break
            case 'B':
                color = '#c9c9c9'
                break
            case 'W':
                color = '#f1f1e7'
                break
            case 'C':
                color = '#bbc8cd'
                break;
        }
    }

    return (
        <div className='card' style={{backgroundColor: color}}>
            <div className='card-header'>
                <p>{gameState != "guessing" && card.name}</p>
                <p>{showHint && card.mana_cost}</p>
            </div>
            <img className='card-img' src={card.image_uris.art_crop}/>
            <p className='type-line'>{showHint && card.type_line}</p>
            <div className='bottom-box'>
                <p className='rules-text' style={{visibility: showHint ? "visible" : "hidden"}}>{card.oracle_text}</p>
                {card.power && <div className='stats' style={{backgroundColor: color}} >
                    <p style={{visibility: showHint ? "visible" : "hidden"}}>{card.power + "/" + card.toughness}</p>
                </div>}
            </div>
        </div>
    )
}