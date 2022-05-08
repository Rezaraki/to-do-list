
const Todo = ({ text, keys, isdone }) => {

    return (
        <div key={keys}>
            <p>{text}</p>
            <p>{isdone}</p>

        </div>
    );
}

export default Todo;