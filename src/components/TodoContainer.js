import { useContext, useReducer, useState } from "react";
import FeaturesContetxt from "../contexts/FeaturesContetxt";
import TodoContext from "../contexts/TodoContexts";
import FeaturesBar from "./FeaturesBar";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

//  adding delete func              ✓
// adding eddit func                ✓
// adding check button              ✓
// use constext                     ✓              
// adding filter by done or not     ✓
// adding search                    ✓  
// sort                             ✓
// beautifing the App               ✓
// finding a solution for backend
const DISPATCH_COMMANDS = {
    GET_INPUT: 'GET_INPUT',
    DELETE: 'DELETE',
    EDIT: 'EDIT',
    DONE: 'DONE'

}
const keyGen = (prevkey = 0) => prevkey + 1;
const todoGen = function (todoText, arrayOftodos) {
    const todoObj = {
        todoText: todoText,
        key: keyGen(arrayOftodos[arrayOftodos.length - 1]?.key),
        isDone: false,
        dateCreated: Date.now(),
    }
    todoObj.dateModified = todoObj.dateCreated
    return todoObj
}
const toggler = toggleValue => toggleValue ^= true;;
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
            temporaryState[indexOfEditedTodo].dateModified = Date.now();

            return temporaryState

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
const FEATURE_COMMANDS = {
    SEARCH: 'SEARCH',
    JUST_ON_GOING: 'JUST_ON_GOING',
    SORT_DATE_CREATED: 'SORT_DATE_CREATED',
    SORT_DATE_MODIFIED: 'SORT_DATE_MODIFIED',
    DESCENDING: 'DESCENDING',
    ASCENDING: 'ASCENDING'


}
const initialFeaturesObj = {
    onlyOngoing: false,
    searchValue: '',
    dateCreatedToggle: FEATURE_COMMANDS.DESCENDING,
    dateModifiedToggle: ''

}
const featuresReducer = (featureState, featureAction) => {
    const sortToggleOptions = [FEATURE_COMMANDS.DESCENDING, FEATURE_COMMANDS.ASCENDING]
    switch (featureAction.type) {

        case FEATURE_COMMANDS.SEARCH:
            featureAction.event.preventDefault();
            let searchText = featureAction.event.target.children[1].value
            if (searchText) { return { ...featureState, searchValue: searchText } }
            return featureState



        case FEATURE_COMMANDS.JUST_ON_GOING:
            const tempfeatureState = { ...featureState }
            tempfeatureState.onlyOngoing ^= true;
            return tempfeatureState

        case FEATURE_COMMANDS.SORT_DATE_CREATED:

            console.log('featureState', featureState)
            const currentCreatedSortModeIndex = sortToggleOptions.indexOf(featureState.dateCreatedToggle)
            const newSortModeIndex = (currentCreatedSortModeIndex !== 1) ? 1 : 0
            return { ...featureState, dateModifiedToggle: '', dateCreatedToggle: sortToggleOptions[newSortModeIndex] }

        case FEATURE_COMMANDS.SORT_DATE_MODIFIED:

            const currentModifiedSortModeIndex = sortToggleOptions.indexOf(featureState.dateModifiedToggle)
            const newModifiedSortModeIndex = (currentModifiedSortModeIndex === 1) ? 0 : 1

            return { ...featureState, dateCreatedToggle: '', dateModifiedToggle: sortToggleOptions[newModifiedSortModeIndex] }

        default: return featureState
    }
}


const TodoContainer = () => {
    const [todos, todoDispatcher] = useReducer(reducer, [])
    const [FeaturesData, featuresDispatcher] = useReducer(featuresReducer, initialFeaturesObj)


    return (
        <div className="w-full flex justify-center  ">
            <div className="w-11/12 lg:w-2/5 bg-white mt-8 rounded-2xl drop-shadow-md px-2 ">
                <FeaturesContetxt.Provider value={[FeaturesData, featuresDispatcher, FEATURE_COMMANDS]}>
                    <TodoContext.Provider value={[todos, todoDispatcher, DISPATCH_COMMANDS]}>
                        <TodoInput />
                        {todos[0] ? <FeaturesBar /> : undefined}
                        <TodoList />
                    </TodoContext.Provider>
                </FeaturesContetxt.Provider>

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

