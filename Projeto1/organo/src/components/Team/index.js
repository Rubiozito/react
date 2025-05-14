import Member from "../member";
import "./Team.css";

const Team = (props) => {
    const css = {backgroundColor: props.secundaryColor};

    return props.members.length > 0 ? (
        <section className="team" style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.nome}</h3>
            <div className="members">
                {props.members.map((member) => (
                    <Member nome={member.nome} cargo={member.cargo} imagem={member.imagem} />
                ))}
            </div>
        </section>
    ) : (
        ""
    );
};

export default Team;
