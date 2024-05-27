import React from 'react'
import PropTypes from 'prop-types'

export default function  CardInfo({ card }) {
    CardInfo.propTypes = {
        card: PropTypes.object
    }

    return (
        <div className='card'>
            <p>{card.name}</p>
            <p>{card.mana_cost}</p>
            <img src={card.image_uris.art_crop}/>
            <p>{card.type_line}</p>
            <p>{card.oracle_text}</p>
            {card.power && <p>{card.power + "/" + card.toughness}</p>}
        </div>
    )
}