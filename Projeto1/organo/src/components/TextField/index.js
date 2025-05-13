import "./TextField.css";

const TextField = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    const onTyping = (event) => {
        props.onChanged(event.target.value);
    };

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={onTyping}
                required={props.isRequired}
                placeholder={placeholderModificado}
            />
        </div>
    );
};

export default TextField;
