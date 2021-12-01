import React, { useEffect, useState } from 'react'
import { startRound } from '../helpers/gameHelpers'
import Computer from './Computer'
import Player from './Player'
import Result from './Result'

export default function Game(props) {
  const [state, setState] = useState({
    isCheating: true,
    playerItem: null,
    result: null
  })
  const { isCheating, playerItem, result } = state

  useEffect(() => {
    if (playerItem) {
      const roundResult = startRound(isCheating, playerItem)

      setState({ ...state, result: roundResult })
    }
  }, [playerItem])

  const setPlayerItem = item => {
    setState({ ...state, playerItem: item })
  }

  const gameCheating = (cheating) => {
    setState({ ...state, isCheating: cheating })
  }

  return (
    <div>
      <main className="game">
        <Computer isCheating={isCheating} gameCheating={gameCheating} />
        <Player setPlayerItem={setPlayerItem} />
      </main>
      <Result message={result && result.message} />
    </div>
  )
}