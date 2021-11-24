import WeatherWidget from "./WeatherWidget";

export default function Header(props){

    return(
        <div className="Header">
        <h1>Awesome Todo List</h1>
        <WeatherWidget />
        </div>
    );
}