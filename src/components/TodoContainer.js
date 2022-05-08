import { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


const TodoContainer = () => {
    const [todos, setTodos] = useState([])
    // give each one a unoqe Id?



    // useEffect(() => {
    //     // const tempTodo = JSON.parse(JSON.stringify(todos));
    //     // // const idGen=()=>

    //     // console.log(tempTodo, '1111');
    //     // if (tempTodo.lenght === 1) { let x = { Text: tempTodo[0], isDone: false, Id: 1 }; tempTodo[0] = x }
    //     // console.log(tempTodo, '222');

    // }, [todos])
    // get some text
    // get the txt into an object 
    // put object into aan array of todos

    const keyGen = (prevkey = 0) => prevkey + 1;

    const todoGen = function (todoText) {

        return {
            todoText: todoText,
            key: keyGen(todos[todos.length - 1]?.key),
            isDone: false
        }
    }

    const todoInputGetter = todoEvent => {
        todoEvent.preventDefault()
        if (todoEvent.target.children[0].value) {

            let todoText = todoEvent.target.children[0].value
            // let todoKey = Math.floor(Math.random() * 101);
            // console.log(
            //     'chained',todos[todos.length - 1]?.key, keyGen(todos[todos.length - 1]?.key))
            // console.log('key', todoKey);
            const objectifiedTodo = todoGen(todoText)

            setTodos([...todos, objectifiedTodo])

            todoEvent.target.children[0].value = '';

        } else {
            alert('give me something')
        }



    }
    // console.log(todos, 'todooooos');
    return (
        <>

            <div className="todo-container">
                <div className="todo-second-container">
                    <TodoInput todoInputGetter={todoInputGetter} />
                    <TodoList data={[todos, setTodos]} />


                </div>
            </div>
        </>
    );
}

export default TodoContainer;

