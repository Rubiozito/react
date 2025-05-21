import "./styles.css";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";

export default function Card({id, image, title, description, code_lines, nshares, coments, user}) {
    return (
        <article className="card">
            <div className="card__image">
                <img src={image} alt="Imagem do post" />
            </div>
            <div className="card__content">
                <div className="card__content__text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="content__footer">
                    <ul>
                        <li>
                            <img src={Code} alt="Ícone de código" />
                            {code_lines}
                        </li>
                        <li>
                            <img src={Chat} alt="Ícone de chat" />
                            {coments}
                        </li>
                        <li>
                            <img src={Share} alt="Ícone de compartilhar" />
                            {nshares}
                        </li>
                    </ul>
                    <div className="footer__user">
                        <img src={user.imagem} alt="Imagem do usuário" />
                        {user.nome}
                    </div>
                </div>
            </div>
        </article>
    );
}
