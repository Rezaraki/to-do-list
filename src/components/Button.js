const Button = ({ text, func, payload }) => {
    return (
        <button onClick={() => { return func(payload) }} >{text}</button>
    );
}

export default Button;