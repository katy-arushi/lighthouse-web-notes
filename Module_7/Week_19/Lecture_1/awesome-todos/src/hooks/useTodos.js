import { useEffect, useState } from 'react';
import axios from "axios";


export default function useTodos(baseTodos){

const [todos, setTodos] = useState(baseTodos || {});

   useEffect(() => {
    axios.get("/api/todos")
    .then(res => setTodos(res.data)); 
   }, [])

    const completeTodo = (id) => {
      const updatedTodos = {...todos};
      const updatadeTodoItem = {...todos[id]}
      updatadeTodoItem.isComplete = true;
      
      updatedTodos[id] = updatadeTodoItem;
    
      axios.put(`/api/todos/${id}`)
      .then(() => {setTodos(updatedTodos)});
      
    };
    
    const deleteTodo = (id) => {
      const updatedTodos = {...todos};
    
      delete updatedTodos[id];
    
      axios.delete(`api/todos/${id}`)
      .then(() => {setTodos(updatedTodos)});
      
    };
    
    const createTodo = (formData) => {
      const newTodo = {
        id: Math.floor(Math.random() * 9090909090),
        name: formData.name,
        description: formData.description,
        isComplete: false
      };
    
      const updatedTodos = {...todos};
      updatedTodos[newTodo.id] = newTodo;
    
      axios.post("/api/todos", { todo: newTodo })
      .then(() => {setTodos(updatedTodos);});
      
    };

    return {todos, createTodo, completeTodo, deleteTodo};
}