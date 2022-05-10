import { useEffect, useRef } from "react";


const TodoInput = ({ data: [todoDispatcher, DISPATCH_COMMANDS] }) => {

    console.log();

    // console.log(todoInputGetter, DISPATCH_COMMANDS);
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