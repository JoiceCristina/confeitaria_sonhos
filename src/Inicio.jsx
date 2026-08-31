import { NavLink } from "react-router-dom"

function Inicio() {
    return (
        <>
            <section className="hero">
                <h1>Bem-vindo à <span>Confeitaria Sonhos</span>.</h1>
                <p className="lead-text"> Doces feitos com amor e carinho para adoçar a sua vida.</p>
                <div className="cta-group">
                    <NavLink to="/produtos">Conheça nossos produtos</NavLink>
                    <NavLink to="/pedidos">Faça seu pedido</NavLink>
                </div>
            </section>

            <section className="grid">

                <div className="card">
                    <h3>Bolos</h3>
                    <p>Bolos deliciosos para datas importantes, como aniversários, festas, casamentos e datas comemorativas.</p>
                    <NavLink to="/news/bolos-deliciosos">Leia mais</NavLink>
                </div>

                <div className="card">
                    <h3>Cupcakes</h3>
                    <p>Cupcakes para adocicar o seu dia a dia, práticos para várias ocasiões.</p>
                    <NavLink to="/news/cupcakes">Leia mais</NavLink>
                </div>

                <div className="card">
                    <h3>Brigadeiros</h3>
                    <p>Brigadeiros cremosos e saborosos, perfeitos para datas especiais.</p>
                    <NavLink to="/news/brigadeiros">Leia mais</NavLink>
                </div>

                <div className="card">
                    <h3>Mousses</h3>
                    <p>Mousses de diversos sabores, pensados especialmente para você.</p>
                    <NavLink to="/news/mousses">Leia mais</NavLink>
                </div>
            </section>
        </>
    )
}

export default Inicio
