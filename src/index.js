//import { TodoList } from './classes/todo-list.class';
//import { Todo } from './classes/todo.class';
import { TodoList, Todo } from './classes'
import { crearTodoHtml } from './js/componentes';

import './styles.css';

export const todoList = new TodoList();

/*const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo(tarea);

console.log(todoList);
crearTodoHtml( tarea );*/


/*
localStorage.setItem('mi-key', 'ABC123');
sessionStorage.setItem('mi-key', 'ABC123');

setTimeout(()=>{
    localStorage.removeItem('mi-key');
}, 1500);
*/

/*todoList.todos.forEach(todo => {
    crearTodoHtml(todo);
});*/
//forech simplificado
todoList.todos.forEach( crearTodoHtml );

console.log('todos', todoList.todos);