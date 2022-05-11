import Todo from "./Todo"


// : [todos, todoDispatcher, DISPATCH_COMMANDS]
// DISPATCH_COMMANDS={DISPATCH_COMMANDS} todoDispatcher={todoDispatcher} text={todo.todoText} keys={todo.key} key={todo.key} isdone={todo.isDone}
const TodoList = ({ data: [todos, ...theRest] }) => {

    if (todos[0]) {

        // console.log(!todos[0], '!todos[0]', todos);
        return (

            todos.map(todo => <div key={todo.key}> <Todo todo={todo} key={todo.key} data={theRest} /></div>)

        )
    } else { return <div  > add some todos</div> }

}

export default TodoList;