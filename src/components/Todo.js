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

        <div key={key} className='w-full border-2 flex justify-between my-2 p-4 rounded-md '>
            {/* show todo text, when edit clicked show input for changing the todotext */}
            <div className="flex-grow-0 ">
                {/* todo text */}
                {editToggle ? <p className={` inline-block break-all ${isDone ? 'text-gray-500 line-through' : undefined}`}>{todoText} </p> : <form onSubmit={e => submitFunc(e)}>
                    <input type="text" className="edit-input" /> <button>submit</button>
                </form>
                }
            </div>
            {/* done, edit, delete */}
            <div className="flex-shrink-0">
                <input type='checkbox' className='align-middle' key={`checkbox${key}`} onClick={e => todoDispatcher({ type: DISPATCH_COMMANDS.DONE, keys: key, event: e })} />
                {/* edit */}
                <Button text='edit' key={'edit' + key} func={() => setEditToggle(false)} payload={true} styles={'mx-2'} />
                {/* delete */}
                <Button text='delete' key={'delete' + key} func={todoDispatcher} payload={{ keys: key, type: DISPATCH_COMMANDS.DELETE }} />


            </div>



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