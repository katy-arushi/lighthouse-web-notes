import React, { useState } from 'react';

export default function Computer(props) {
  const { isCheating, gameCheating } = props
  const [cheating, setCheating] = useState(isCheating)

  const changeCheatingMode = () => {
    gameCheating(!cheating)
    setCheating(!cheating)
  }
  return (
    <section className="computer" >
      <span
        data-testid={"computerIcon"}
        onClick={changeCheatingMode}
        role="img"
        className={cheating ? "cheating" : ""}
        aria-label="robot"
      >
        🤖
      </span>
      <div>
        <h1>EXTERRMINATE !</h1>
        <div className="choices">
          <button><span role="img" aria-label="moai">❔</span></button>
          <button><span role="img" aria-label="axe">❔</span></button>
          <button><span role="img" aria-label="tree">❔</span></button>
        </div>
      </div>
    </section>
  )
}