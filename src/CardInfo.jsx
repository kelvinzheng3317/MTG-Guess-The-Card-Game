import React from 'react'
import PropTypes from 'prop-types'
import './CardInfo.css'

export default function  CardInfo({ card }) {
    CardInfo.propTypes = {
        card: PropTypes.object
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <p>{card.name}</p>
                <p>{card.mana_cost}</p>
            </div>
            <img className='card-img' src={card.image_uris.art_crop}/>
            <p className='type-line'>{card.type_line}</p>
            <div className='bottom-box'>
                <p className='rules-text'>{card.oracle_text}</p>
                {card.power && <p className='stats'>{card.power + "/" + card.toughness}</p>}
            </div>
        </div>
    )
}