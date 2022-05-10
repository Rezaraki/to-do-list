// : [text, keys, isdone, todoDispatcher, DISPATCH_COMMANDS]

const Todo = ({ data: [todoDispatcher, DISPATCH_COMMANDS], todo: { todoText, key, isDone } }) => {

    return (

        <div key={key}>

            <label htmlFor="checkbox">{todoText} </label>
            <input type="checkbox" id="checkbox" />
            <button onClick={e => { return todoDispatcher({ keys: key, type: DISPATCH_COMMANDS.DELETE }) }} >delete</button>
            <button key={key}>edit</button>

        </div>
    );
}

export default Todo;