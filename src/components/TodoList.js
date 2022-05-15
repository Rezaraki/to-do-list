import { useContext, useEffect, useState } from "react"
import FeaturesContetxt from "../contexts/FeaturesContetxt"
import TodoContext from "../contexts/TodoContexts"
import Todo from "./Todo"


const TodoList = () => {
    const [todos, ...theRest] = useContext(TodoContext)
    const [FeaturesData, featuresDispatcher, FEATURE_COMMANDS] = useContext(FeaturesContetxt)

    // let [todosToShow, setTodosToShow] = useState()
    let todosToShow = JSON.parse(JSON.stringify(todos))

    // console.log(todos, todosToShow);
    const mapFunc = todos => todos.map(todo => <div key={todo.key}> <Todo todo={todo} key={todo.key} data={theRest} /></div>)
    const filterBySearchValue = sourceArray => sourceArray.filter(todo => todo.todoText.toLowerCase().includes(FeaturesData.searchValue))
    // const Sorter = () => { }


    if (todosToShow[0]) {
        // only on-going todos
        if (FeaturesData.onlyOngoing) {
            const onlyOngoingTodos = todosToShow.filter(todo => todo.isDone === false)
            todosToShow = onlyOngoingTodos
        }
        //  search
        if (FeaturesData.searchValue) {
            const searchedTodos = filterBySearchValue(todosToShow)
            todosToShow = searchedTodos

        }
        // Sort 
        if (FeaturesData.dateCreatedToggle === FEATURE_COMMANDS.DESCENDING) {
            const tempTodosToShow = JSON.parse(JSON.stringify(todosToShow))
            const descendingTodos = tempTodosToShow.sort((a, b) => a.key - b.key)
            console.log('descendingTodos', descendingTodos)
            todosToShow = descendingTodos
        }
        if (FeaturesData.dateCreatedToggle === FEATURE_COMMANDS.ASCENDING) {
            const tempTodosToShow = JSON.parse(JSON.stringify(todosToShow))
            const ascendingTodos = tempTodosToShow.sort((a, b) => b.key - a.key)
            todosToShow = ascendingTodos

        }

        return mapFunc(todosToShow)

    } else {
        return <div  > add some todos</div>
    }
}
export default TodoList;




