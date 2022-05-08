import { useRef } from "react";

const TodoInput = ({ todoInputGetter }) => {
    // const inputRef = useRef()


    return (
        <form onSubmit={e => todoInputGetter(e)}>
            <input type='text' />
            <button>yo</button>
        </form>
    );
}

export default TodoInput;