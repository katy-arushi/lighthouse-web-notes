import PlantListItem from "./PlantListItem";
import {listOfPlants} from "./../data/plantData"


export default function PlantList(){

    const myListOfPlants = Object.values(listOfPlants).map(tree => <PlantListItem {...tree} key={tree.id} clicked={() => console.log("It's watered!")}/>)

    // const pArray = [];
    // for(const plant in listOfPlants)
    // {
    //     pArray.push(<PlantListItem {...listOfPlants[plant]} key={listOfPlants[plant].id} clicked={() => console.log("It's watered!")}/>)
    // }
    // console.log(pArray);

   
    return(
        <>
        {myListOfPlants}
        </>
    );
}