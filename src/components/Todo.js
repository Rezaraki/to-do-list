// : [text, keys, isdone, todoDispatcher, DISPATCH_COMMANDS]

import { useState } from "react";
import Button from "./Button";
const Todo = ({ data: [todoDispatcher, DISPATCH_COMMANDS], todo: { todoText, key, isDone } }) => {

    // const todoTextField = useRef()
    const [editToggle, setEditToggle] = useState(true)


    const submitFunc = e => {
        todoDispatcher({ type: DISPATCH_COMMANDS.EDIT, keys: key, event: e })
        setEditToggle(true)
    }

    return (

        <div key={key}>
            {/* show todo text, when edit clicked show input for changing the todotext */}

            {editToggle ? <span className={isDone ? 'text-gray-500 line-through' : undefined}>{todoText} </span> : <form onSubmit={e => submitFunc(e)}>
                <input type="text" className="edit-input" /> <button>submit</button>
            </form>
            }

            <input type='checkbox' key={`checkbox${key}`} onClick={e => todoDispatcher({ type: DISPATCH_COMMANDS.DONE, keys: key, event: e })} />
            <Button text='delete' key={'delete' + key} func={todoDispatcher} payload={{ keys: key, type: DISPATCH_COMMANDS.DELETE }} />

            <Button text='edit' key={'edit' + key} func={() => setEditToggle(false)} payload={true} />




        </div >
    );
}

export default Todo;



//   {/* <form ref={inputRef} onSubmit={e => todoDispatcher({ event: e, type: DISPATCH_COMMANDS.GET_INPUT })}>
//             <input type='text' />
//             <button>yo</button>
//         </form> */}
//                 {/* <TodoText />
//                 show {todoText}
//                unless edit btn is clicked -->> how to know if clicked -- onclick run two funcs one to change the main state ,second to change Todo component state
//                 then show input */}

//                 {/* {<p>{todoText}</p> ||  <input type="text" className="edit-input" />  } */}
//                 {/* <p>{todoText}</p> */}
//  {/* <p>{todoText}</p> */}
//             {/* <input type="text" className="edit-input" /> */}

//  {/* <button onClick={() => { return todoDispatcher({ keys: key, type: DISPATCH_COMMANDS.DELETE }) }} >delete</button> */}
//             {/* <button onClick={() => { return todoDispatcher({ keys: key, type: DISPATCH_COMMANDS.EDIT }) }} >edit</button> */}