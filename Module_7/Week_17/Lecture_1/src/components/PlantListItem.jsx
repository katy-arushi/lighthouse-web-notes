export default function PlantListItem(props){
    const {name, lastWateredDate, wateringInterval, clicked} = props;
    return(
        <div>
            <h1>{name}</h1>
            <h2>{lastWateredDate}</h2>
            <h2>{wateringInterval}</h2>
            <button onClick={clicked}>Water</button>
        </div>
    );
}