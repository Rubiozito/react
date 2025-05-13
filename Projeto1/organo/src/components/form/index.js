import {useState} from "react";
import Button from "../Button";
import SuspendedList from "../SupendedList";
import TextField from "../TextField";
import "./Form.css";

const Formulario = () => {
    const times = ["Diretoria", "Infra", "Back-end", "Front-end", "UX/UI", "Business"];

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const onSave = (event) => {
        event.preventDefault();
        console.log("Formulario foi enviado", nome, cargo, imagem, time);
    };
    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para adicionar uma pessoa</h2>
                <TextField
                    label="Nome"
                    isRequired={true}
                    placeholder="Digite seu nome"
                    value={nome}
                    onChanged={(value) => setNome(value)}
                />
                <TextField
                    label="Cargo"
                    isRequired={true}
                    placeholder="Digite seu cargo"
                    value={cargo}
                    onChanged={(value) => setCargo(value)}
                />
                <TextField
                    label="Imagem"
                    isRequired={true}
                    placeholder="Digite a url da imagem"
                    value={imagem}
                    onChanged={(value) => setImagem(value)}
                />
                <SuspendedList
                    itens={times}
                    label="Time"
                    isRequired={true}
                    value={time}
                    onChanged={(value) => setTime(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Formulario;
