import React, {useState} from "react";

export default function ListRender() {
    const [list] = useState(["Vitor", "João", "Maria"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Vitor", age: 22},
        {id: 2, name: "João", age: 23},
        {id: 3, name: "Maria", age: 24},
    ]);

    const deleteRandom = () => {
        const randomIndex = Math.floor(Math.random() * users.length);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomIndex !== user.id);
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    );
}
