import {useState} from "react";

export default function ManageData() {
    const [number, setNumber] = useState(10);

    return (
        <div>
            <p>Valor: {number} </p>
            <button onClick={() => setNumber(25)}>Alterar valor</button>
        </div>
    );
}
