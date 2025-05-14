import "./SuspendedList.css";

const SuspendedList = (props) => {
    return (
        <div className="suspended-list">
            <label>{props.label}</label>
            <select
                required={props.isRequired}
                onChange={(event) => props.onChanged(event.target.value)}
                value={props.value}>
                <option value="">Selecione um time</option>
                {props.itens.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default SuspendedList;
