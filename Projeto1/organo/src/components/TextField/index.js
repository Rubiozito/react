import "./TextField.css";

const TextField = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input required={props.isRequired} placeholder={placeholderModificado} />
        </div>
    );
};

export default TextField;
