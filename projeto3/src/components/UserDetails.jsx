export default function UserDetails({id, name, age, profession}) {
    return (
        <div>
            <h2>Detalhes do usuário</h2>
            <ul>
                <li>ID: {id}</li>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {profession}</li>
            </ul>
            {age >= 18 ? <p>Pode tirar carta</p> : <p>Não pode tirar carta</p>}
        </div>
    );
}
