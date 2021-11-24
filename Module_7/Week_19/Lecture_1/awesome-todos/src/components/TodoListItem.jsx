export default function TodoListItem(props){
    const {key, name, description, isComplete, completeTodo, deleteTodo} = props;
    return(
        <li className="TodoListItem">
        <p>{name}</p>
        <p>{description}</p>
        {!isComplete && <button onClick={completeTodo}>Complete</button>}
        <button onClick={deleteTodo}>Delete</button>
        </li>
    );
}