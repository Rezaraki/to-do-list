const Button = ({ text, func, payload, styles }) => {
    return (
        <button className={styles} onClick={() => { return func(payload) }} >{text}</button>
    );
}

export default Button;