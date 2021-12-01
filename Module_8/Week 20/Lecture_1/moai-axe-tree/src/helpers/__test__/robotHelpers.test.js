import {pickWinningItem, pickRandomly} from "../robotHelpers"

describe("pickWinningItem for robot", () => {

    it("should pick 🗿 when player selects 🪓", () => {

        const actualValue = pickWinningItem("🪓");
        expect(actualValue).toBe("🗿")
    })
    it("should pick 🪓 when player selects 🌳", () => {

        const actualValue = pickWinningItem("🌳");
        expect(actualValue).toBe("🪓")
    })
    it("should pick 🌳 when player selects 🗿", () => {

        const actualValue = pickWinningItem("🗿");
        expect(actualValue).toBe("🌳")
    })

})


describe("Testing ramdom chosen item by robot", () => {

    it("should pick a valid emoji", () => {

        const actualValue = pickRandomly("🗿");
        expect(["🗿", "🪓", "🌳"].includes(actualValue)).toBe(true);
    })

})