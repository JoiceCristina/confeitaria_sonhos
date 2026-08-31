function Sobre() {
    return (
        <section className="about-content">
            <h1>Nossa <span>Confeitaria Sonhos</span></h1>
            <p className="lead-text">
                Transformamos ingredientes simples e de qualidade em doces que despertam
                memórias e tornam cada comemoração ainda
                mais gostosa.
            </p>

            <div className="about-text">
                <div>
                    <h2>História - Confeitaria Sonhos</h2>
                    <p className="text-muted">
                        A Confeitaria Sonhos nasceu do amor pela confeitaria e
                        da vontade de levar sabores especiais para diferentes
                        momentos. Cada receita é pensada para oferecer uma
                        experiência deliciosa, desde o primeiro pedaço até o
                        último.
                    </p>
                </div>

                <div>
                    <h2>O que oferecemos</h2>
                    <p className="text-muted">
                        Nosso cardápio reúne opções para diferentes gostos e
                        ocasiões:
                    </p>
                    <ul>
                        <li><strong>Bolos </strong> </li>
                        <li><strong>Brigadeiros</strong></li>
                        <li><strong>Cupcakes</strong></li>
                        <li><strong>Mousses</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Sobre;