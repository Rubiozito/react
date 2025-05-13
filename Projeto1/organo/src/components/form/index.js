import TextField from "../TextField";
import "./Form.css";

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para adicionar uma pessoa</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite a url da imagem" />
            </form>
        </section>
    );
};

export default Formulario;
