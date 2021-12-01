import { startRound, determineWinner } from "../gameHelpers";


describe("Test determine winner helper", () => {

    it("should return playerWins for all the cases", () => {
        const winningCombinations = [
            { player: '🗿', computer: '🪓' },
            { player: '🪓', computer: '🌳' },
            { player: '🌳', computer: '🗿' }
          ]
    
        
          for(const combination of winningCombinations)
          {
              const result = determineWinner(combination);
              expect(result).toBe("Lifeforms win");
          }
    
    })

})


describe("Testing startRound helper", () => {

    const result = startRound(true, "🌳");
    expect(result.message).toBe("Skynet will rise")
    expect(result.winner).toBe("computer")
})