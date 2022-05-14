import { useContext, useEffect, useRef } from "react";
import TodoContext from "../contexts/TodoContexts";


const TodoInput = () => {

    const [_, todoDispatcher, DISPATCH_COMMANDS] = useContext(TodoContext)

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.children[0].value = ''
    }
    )

    return (
        <form ref={inputRef} onSubmit={e => todoDispatcher({ event: e, type: DISPATCH_COMMANDS.GET_INPUT })}>
            <input type='text' />
            <button>yo</button>
        </form>
    );
}

export default TodoInput;