import React, { useState } from 'react'
import './App.css'
import Notification from './notification'
import CardInfo from './CardInfo'
import GameInput from './GameInput'

// getting random card data from: https://scryfall.com/docs/api/cards/random
// NOTE THAT THERE IS ALSO AN OPTION TO GET RANDOM COMMANDERS : https://api.scryfall.com/cards/random?q=is%3Acommander
// Alternative API for card info, currently not being used: https://docs.magicthegathering.io/#api_v1cards_get

/*
Other potential features:
- ability to switch btw guessing any card vs guessing commanders only
- ability to see card price and set as a hint
- make player score more points if they use less guesses
*/

function App() {
  const [guess, setGuess] = React.useState("")
  const [hintPoints, setHintPoints] = React.useState(2)
  const [guessesLeft, setGuessesLeft] = React.useState(10)
  const [gameState, setGameState] = React.useState("guessing")
  const [currScore, setCurrScore] = React.useState(0)
  const [highScore, setHighScore] = React.useState(localStorage.getItem("highScore") || 0)
  const [card, setCard] = React.useState({
    "object": "card",
    "id": "acd482ad-ca4a-470f-8a76-14ec7b58316a",
    "oracle_id": "bd213210-42d1-49af-9959-08188abe692a",
    "multiverse_ids": [
      402081
    ],
    "mtgo_id": 58641,
    "mtgo_foil_id": 58642,
    "tcgplayer_id": 104876,
    "cardmarket_id": 284454,
    "name": "Ulamog's Nullifier",
    "lang": "en",
    "released_at": "2015-10-02",
    "uri": "https://api.scryfall.com/cards/acd482ad-ca4a-470f-8a76-14ec7b58316a",
    "scryfall_uri": "https://scryfall.com/card/bfz/207/ulamogs-nullifier?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/a/c/acd482ad-ca4a-470f-8a76-14ec7b58316a.jpg?1562935840",
      "normal": "https://cards.scryfall.io/normal/front/a/c/acd482ad-ca4a-470f-8a76-14ec7b58316a.jpg?1562935840",
      "large": "https://cards.scryfall.io/large/front/a/c/acd482ad-ca4a-470f-8a76-14ec7b58316a.jpg?1562935840",
      "png": "https://cards.scryfall.io/png/front/a/c/acd482ad-ca4a-470f-8a76-14ec7b58316a.png?1562935840",
      "art_crop": "https://cards.scryfall.io/art_crop/front/a/c/acd482ad-ca4a-470f-8a76-14ec7b58316a.jpg?1562935840",
      "border_crop": "https://cards.scryfall.io/border_crop/front/a/c/acd482ad-ca4a-470f-8a76-14ec7b58316a.jpg?1562935840"
    },
    "mana_cost": "{2}{U}{B}",
    "cmc": 4,
    "type_line": "Creature — Eldrazi Processor",
    "oracle_text": "Devoid (This card has no color.)\nFlash\nFlying\nWhen Ulamog's Nullifier enters the battlefield, you may put two cards your opponents own from exile into their owners' graveyards. If you do, counter target spell.",
    "power": "2",
    "toughness": "3",
    "colors": [],
    "color_identity": [
      "B",
      "U"
    ],
    "keywords": [
      "Flying",
      "Devoid",
      "Flash"
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "timeless": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "legal",
      "explorer": "not_legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "oathbreaker": "legal",
      "standardbrawl": "not_legal",
      "brawl": "not_legal",
      "alchemy": "not_legal",
      "paupercommander": "restricted",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal",
      "predh": "not_legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "91719374-7ac5-4afa-ada8-5da964dcf1d4",
    "set": "bfz",
    "set_name": "Battle for Zendikar",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/91719374-7ac5-4afa-ada8-5da964dcf1d4",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Abfz&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/bfz?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/acd482ad-ca4a-470f-8a76-14ec7b58316a/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Abd213210-42d1-49af-9959-08188abe692a&unique=prints",
    "collector_number": "207",
    "digital": false,
    "rarity": "uncommon",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Aleksi Briclot",
    "artist_ids": [
      "5e470014-31cb-41b0-b054-e23374484449"
    ],
    "illustration_id": "e0921655-6f70-4d4b-9b5b-e1f41921b55b",
    "border_color": "black",
    "frame": "2015",
    "frame_effects": [
      "devoid"
    ],
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 14501,
    "penny_rank": 5621,
    "prices": {
      "usd": "0.09",
      "usd_foil": "0.66",
      "usd_etched": null,
      "eur": "0.11",
      "eur_foil": "0.33",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=402081&printed=false",
      "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DUlamog%2527s%2BNullifier",
      "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DUlamog%2527s%2BNullifier",
      "edhrec": "https://edhrec.com/route/?cc=Ulamog%27s+Nullifier"
    },
    "purchase_uris": {
      "tcgplayer": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F104876%3Fpage%3D1",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Battle-for-Zendikar/Ulamog-s-Nullifier?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/58641?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  })
  
  React.useEffect(() => {
    getCardData()
  }, [])

  React.useEffect(() => {
    if (currScore > highScore) {
      setHighScore(currScore)
    }
  }, [currScore])

  React.useEffect(() => {
    localStorage.setItem("highScore", highScore)
  }, [highScore])

  React.useEffect(() => {
    if (guessesLeft < 1) {
      loss()
    }
  }, [guessesLeft])
  
  async function getCardData() {
    const response = await fetch("https://api.scryfall.com/cards/random")
    const data = await response.json()
    setCard(data)
  }

  function nextCard() {
    getCardData()
    setGuess("")
    setHintPoints(2)
    setGuessesLeft(10)
  }

  function checkGuess() {
    if (guess.toLowerCase() === card.name.toLowerCase()) {
      console.log("Correct!!")
      // Display notif and card name
      setGameState("won")
      setCurrScore(prevScore => prevScore + hintPoints)

      // waits 2 secs and then resets game to next card
      setTimeout(() => {
        setGameState("guessing")
        nextCard()
      }, 2000)

    } else {
      console.log("Incorrect, try again.")
      setGuessesLeft(prevGuessesLeft => prevGuessesLeft - 1)
      if (guessesLeft === 0) {
        nextCard()
      }
    }
  }
  
  function getNextHint() {
    setHintPoints(prevHintPoints => prevHintPoints > 1 && prevHintPoints - 1)
  }

  function loss() {
    setGameState('loss')
    setTimeout(() => {
      setCurrScore(0)
      setGameState("guessing")
      nextCard()
    }, 2000)
  }

  return (
    <div>
      <Notification gameState={gameState} hintPoints={hintPoints} cardName={card.name}/>
      <div className='app'>
          <CardInfo card={card} hintPoints={hintPoints} gameState={gameState}/>
          <div className='game-info'>

            <div>
              <p>High Score: {highScore}</p>
              <p>Current Score: {currScore}</p>
              <p>Guesses Left: {guessesLeft}</p>
            </div>

            <GameInput 
              hintPoints={hintPoints} 
              guess={guess} 
              setGuess={setGuess}
              checkGuess={checkGuess}
              getNextHint={getNextHint}
              loss={loss}
            />
          </div>
      </div>
    </div>
  )
}

export default App
