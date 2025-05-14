import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="devmaua.com" target="_blank">
                            <img src="/images/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="devmaua.com" target="_blank">
                            <img src="/images/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="devmaua.com" target="_blank">
                            <img src="/images/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="" />
            </section>
            <section>
                <p>É o beckas</p>
            </section>
        </footer>
    );
};

export default Footer;
