import Todo from "./Todo"



const TodoList = ({ data: [todos, setTodos] }) => {
    console.log(todos);
    if (todos[0]) {
        console.log(!todos[0], '!todos[0]', todos);
        return (
            <div  >
                {todos.map(todo => <Todo text={todo.todoText} keys={todo.key} key={todo.key} isdone={todo.isDone} />)}
            </div>
        )
    } else { return <div  > add some todos</div> }

}

export default TodoList;