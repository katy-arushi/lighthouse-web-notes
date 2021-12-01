export const pickWinningItem = (playerItem) => {
    const winnerValue = {
        "🗿" : "🌳",
        "🌳" : "🪓",
        "🪓" : "🗿"
    }

    return winnerValue[playerItem]
  }

export const pickRandomly = (playerItem) => {
    const validEmojis = ["🗿", "🪓", "🌳"];
    if(validEmojis.includes(playerItem))
    {
        const randomIndex = Math.floor(Math.random() * validEmojis.length);
        return validEmojis[randomIndex];
    }
    return null;    
}   