import React from 'react'
import PropTypes from 'prop-types'
import './CardInfo.css'

export default function  CardInfo({ card, hintPoints }) {
    CardInfo.propTypes = {
        card: PropTypes.object
    }

    let visibilityStyle={visibility: hintPoints === 2 ? "hidden" : "visible"}

    return (
        <div className='card'>
            <div className='card-header'>
                <p>{card.name}</p>
                <p>{card.mana_cost}</p>
            </div>
            <img className='card-img' src={card.image_uris.art_crop}/>
            <p className='type-line'>{hintPoints < 2 && card.type_line}</p>
            <div className='bottom-box'>
                <p className='rules-text' style={visibilityStyle}>{card.oracle_text}</p>
                {card.power && <div className='stats' style={visibilityStyle}>
                    <p>{card.power + "/" + card.toughness}</p>
                </div>}
            </div>
        </div>
    )
}