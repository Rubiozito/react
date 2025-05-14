import "./Member.css";

const Member = ({nome, imagem, cargo}) => {
    return (
        <div className="member">
            <div className="member__header">
                <img src={imagem} alt={nome} />
            </div>
            <div className="member__footer">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
};

export default Member;
