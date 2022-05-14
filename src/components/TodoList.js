import { useContext } from "react"
import FeaturesContetxt from "../contexts/FeaturesContetxt"
import TodoContext from "../contexts/TodoContexts"
import Todo from "./Todo"


const TodoList = () => {
    const [todos, ...theRest] = useContext(TodoContext)
    const [FeaturesData, featuresDispatcher, FEATURE_COMMANDS] = useContext(FeaturesContetxt)
    console.log(todos, FeaturesData);
    const mapFunc = todos => todos.map(todo => <div key={todo.key}> <Todo todo={todo} key={todo.key} data={theRest} /></div>)


    if (todos[0]) {

        if (FeaturesData.onlyOngoing) {
            const onlyOngoingTodos = todos.filter(todo => todo.isDone === false)

            return mapFunc(onlyOngoingTodos)

        } if (!FeaturesData.onlyOngoing) {

            return mapFunc(todos)
        }
    }
    else { return <div  > add some todos</div> }



}

export default TodoList;