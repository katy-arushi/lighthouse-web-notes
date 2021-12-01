import { pickRandomly, pickWinningItem } from "./robotHelpers"

export const determineWinner = (items) => {
    if (items.player === items.computer) {
        return "it's a tie... fighter?"
      }
      if (items.player === "🌳") {
        if (items.computer === "🗿") {
          return "Lifeforms win"
        }
      }
      if (items.player === "🗿") {
        if (items.computer === "🪓") {
          return "Lifeforms win"
        }
      }
      if (items.player === "🪓") {
        if (items.computer === "🌳") {
          return "Lifeforms win"
        }
      }
    
      return "Skynet will rise"
}

export const startRound = (isCheating, playerItem) => {
    const computerItem = isCheating ? pickWinningItem(playerItem) : pickRandomly(playerItem);
    const winningMessage = determineWinner({plyer: playerItem, computer: computerItem});

    if(winningMessage === "Lifeforms win"){
        return {winner: "player", message: winningMessage};
    }
    if(winningMessage === "it's a tie... fighter?"){
        return {winner: "tie", message: winningMessage};
    }
    if(winningMessage === "Skynet will rise"){
        return {winner: "computer", message: winningMessage};
    }
}