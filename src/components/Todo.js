
const Todo = ({ text, keys, isdone }) => {

    return (
        <div key={keys}>

            <label htmlFor="vehicle1">{text} </label>
            <input type="checkbox" id="vehicle1" />
            <button >delete</button>
            <button>edit</button>

        </div>
    );
}

export default Todo;