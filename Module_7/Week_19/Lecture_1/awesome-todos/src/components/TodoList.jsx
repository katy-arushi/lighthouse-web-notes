import TodoListItem from "./TodoListItem";

export default function TodoList(props){
 const {todos, onComplete, onDelete} = props;

 const todoArray = Object.values(todos);
 const parsedTodos = todoArray.map(todo => 
    <TodoListItem 
        key={todo.id}
        {...todo}
        completeTodo = {() => onComplete(todo.id)}
        deleteTodo = {() => onDelete(todo.id)}
    />);

    return(
        <ul className="TodoList">
        {parsedTodos}
        </ul>
    );
}