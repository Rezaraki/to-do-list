import { useEffect, useReducer, useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

//  adding delete func  ✓
// adding eddit func    ✓
// adding check button
// beautifing the App
// finding a solution for backend
const DISPATCH_COMMANDS = {
    GET_INPUT: 'GET_INPUT',
    DELETE: 'DELETE',
    EDIT: 'EDIT',
    DONE: 'DONE'

}
const keyGen = (prevkey = 0) => prevkey + 1;
const todoGen = function (todoText, arrayOftodos) {

    return {
        todoText: todoText,
        key: keyGen(arrayOftodos[arrayOftodos.length - 1]?.key),
        isDone: false
    }
}
const toggler = toggleValue => !toggleValue;
const reducer = (state, action) => {

    switch (action.type) {

        case DISPATCH_COMMANDS.DONE:
            const stateTemp = JSON.parse(JSON.stringify(state))
            const indexOfCheckedTodo = stateTemp.findIndex(todo => todo.key === action.keys)

            stateTemp[indexOfCheckedTodo].isDone = toggler(stateTemp[indexOfCheckedTodo].isDone)

            return stateTemp;
        case DISPATCH_COMMANDS.EDIT:
            action.event.preventDefault();

            const temporaryState = [...state]
            const newText = action.event.target.children[0].value;
            const indexOfEditedTodo = temporaryState.findIndex(todo => todo.key === action.keys)

            temporaryState[indexOfEditedTodo].todoText = newText;

            return temporaryState;

        case DISPATCH_COMMANDS.DELETE:
            const tempState = state.filter(todo => todo.key !== action.keys)

            return tempState;

        case DISPATCH_COMMANDS.GET_INPUT:
            action.event.preventDefault();

            if (action.event.target.children[0].value) {

                let todoText = action.event.target.children[0].value

                const objectifiedTodo = todoGen(todoText, state)


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

    const [todos, todoDispatcher] = useReducer(reducer, [])

    return (
        <div className="todo-container">
            <div className="todo-second-container">
                <TodoInput data={[todoDispatcher, DISPATCH_COMMANDS]} />
                <TodoList data={[todos, todoDispatcher, DISPATCH_COMMANDS]} />
            </div>
        </div>
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

