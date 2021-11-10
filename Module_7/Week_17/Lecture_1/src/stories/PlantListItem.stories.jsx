import PlantListItem from "../components/PlantListItem";
import {storiesOf} from "@storybook/react"


const samplePlant = {
    name: "Monstera",
    lastWateredDate: "2021-09-11",
    wateringInterval: 1 
}


storiesOf("PlantListItem", module)
.add("With Proper Props", () => <PlantListItem  {...samplePlant} />)
.add("Without proper props", () => <PlantListItem  name={samplePlant.name}
                                        lastWateredDate={samplePlant.lastWateredDate} />)                                                
