// : [text, keys, isdone, todoDispatcher, DISPATCH_COMMANDS]

import { useRef, useState } from "react";
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

            {editToggle ? <p>{todoText}</p> : <form onSubmit={e => submitFunc(e)}>
                <input type="text" className="edit-input" /> <button>submit</button>
            </form>
            }

            <input type="checkbox" id={`checkbox-${key}`} />
            <Button text='delete' key={'delete' + key} func={todoDispatcher} payload={{ keys: key, type: DISPATCH_COMMANDS.DELETE }} />

            <Button text='edit' key={'edit' + key} func={() => setEditToggle(false)} payload={true} />




        </div>
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