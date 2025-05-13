import Button from "../Button";
import SuspendedList from "../SupendedList";
import TextField from "../TextField";
import "./Form.css";

const Formulario = () => {
    const times = ["Diretoria", "Infra", "Back-end", "Front-end", "UX/UI", "Business"];

    const onSave = (event) => {
        event.preventDefault();
        console.log("Formulario foi enviado");
    };
    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para adicionar uma pessoa</h2>
                <TextField label="Nome" isRequired={true} placeholder="Digite seu nome" />
                <TextField label="Cargo" isRequired={true} placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite a url da imagem" />
                <SuspendedList itens={times} label="Time" />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Formulario;
