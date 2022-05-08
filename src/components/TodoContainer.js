import { useEffect, useReducer, useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

//  adding delete func 
// adding eddit func
// adding check button
// beautifing the App
// finding a solution for backend
const DISPATCH_COMMANDS = {
    GET_INPUT: 'GET_INPUT',

}
const reducer = (state, action) => {
    const keyGen = (prevkey = 0) => prevkey + 1;

    const todoGen = function (todoText) {

        return {
            todoText: todoText,
            key: keyGen(state[state.length - 1]?.key),
            isDone: false
        }
    }
    switch (action.func) {


        case DISPATCH_COMMANDS.GET_INPUT:
            action.event.preventDefault()
            if (action.event.target.children[0].value) {

                let todoText = action.event.target.children[0].value

                const objectifiedTodo = todoGen(todoText)

                return [...state, objectifiedTodo]


            } else {
                // BUUUUUUUG,  alert pops twice!
                alert('give me something')
                return state
            }


        default:
            break;
    }
}
const TodoContainer = () => {
    // const [todos, setTodos] = useState([])

    const [todos, todoDispatcher] = useReducer(reducer, [])

    // console.log(todos, 'todooooos');
    return (
        <>

            <div className="todo-container">
                <div className="todo-second-container">
                    <TodoInput todoInputGetter={event => todoDispatcher({ event: event, func: DISPATCH_COMMANDS.GET_INPUT })} />
                    <TodoList data={[todos, todoDispatcher]} />


                </div>
            </div>
        </>
    );
}

export default TodoContainer;





















// const keyGen = (prevkey = 0) => prevkey + 1;

    // const todoGen = function (todoText) {

    //     return {
    //         todoText: todoText,
    //         key: keyGen(todos[todos.length - 1]?.key),
    //         isDone: false
    //     }
    // }

    // const todoInputGetter = todoEvent => {
    //     todoEvent.preventDefault()
    //     if (todoEvent.target.children[0].value) {

    //         let todoText = todoEvent.target.children[0].value

    //         const objectifiedTodo = todoGen(todoText)

    //         setTodos([...todos, objectifiedTodo])

    //         todoEvent.target.children[0].value = '';

    //     } else {
    //         alert('give me something')
    //     }



    // }

