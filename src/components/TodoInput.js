import { useEffect, useRef } from "react";

const TodoInput = ({ todoInputGetter }) => {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.children[0].value = ''
    }
    )
    return (
        <form ref={inputRef} onSubmit={e => todoInputGetter(e)}>
            <input type='text' />
            <button>yo</button>
        </form>
    );
}

export default TodoInput;