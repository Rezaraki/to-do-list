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
        <div className="w-full drop-shadow-md   ">
            <form className="w-full flex bg-transparent " ref={inputRef} onSubmit={e => todoDispatcher({ event: e, type: DISPATCH_COMMANDS.GET_INPUT })}>
                <input type='text' placeholder="Type some text" className="w-full outline-none bg-transparent " />
                <button className="text-3xl  pb-2 ">+</button>
            </form>
        </div>
    );
}

export default TodoInput;