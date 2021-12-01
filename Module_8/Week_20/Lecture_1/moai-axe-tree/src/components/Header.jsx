import React from 'react';

export default function Header(props) {
  return(
    <header>
      <h1>Moai Axe Tree</h1>
      <div>
        <span role="img" aria-label="moai statue">🗿</span>
        <span>-</span>
        <span role="img" aria-label="axe">🪓</span>
        <span>-</span>
        <span role="img" aria-label="tree">🌳</span>
      </div>
    </header>
  )
}