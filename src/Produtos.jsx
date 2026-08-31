import { NavLink } from "react-router-dom"

import boloChocolate from "./img/bolo-chocolate.webp"
import boloMorango from "./img/bolo-morango.jpg"
import boloNinho from "./img/bolo-ninho.webp"

import cupMorango from "./img/cupcake-morango.webp"
import cupChocolate  from "./img/cupcake-chocolate.jpg"
import cupRed from "./img/cupcake-red.jpg"


import briNutella from "./img/brigadeiro-nutella.jpg"
import briChocolate  from "./img/brigadeiro-chocolate.jpg"
import briNinho from "./img/brigadeiro-ninho.webp"

import mousseMorango from "./img/mousse-morango.webp"
import mousseChocolate  from "./img/mousse-chocolate.webp"
import mousseMaracuja from "./img/mousse-maracuja.jpg"

function Produtos() {
    return (
        <>
            <section className="about-content">
                <h1>Nossos <span>Produtos</span></h1>
                <p className="lead-text">
                    Escolha entre nossas opções de bolos, cupcakes,
                    brigadeiros e mousses e encontre o doce perfeito para você.
                </p>
            </section>

            <section className="about-content">
                <h2>Bolos</h2>
            </section>
            <section className="grid">
                <div className="card">
                    <h3>Bolo de Chocolate</h3>
                    <p>Massa de chocolate com recheio cremoso e cobertura de chocolate.</p>
                    <img src={boloChocolate} alt="Bolo de Chocolate" className="product-img" />
                    <strong>R$ 65,00</strong><br />
                </div>

                <div className="card">
                    <h3>Bolo de Morango</h3>
                    <p>Massa fofinha com recheio de morango e cobertura suave.</p>
                    <img src={boloMorango} alt="Bolo de Morango" className="product-img" />
                    <strong>R$ 70,00</strong><br />
                </div>

                <div className="card">
                    <h3>Bolo de Ninho</h3>
                    <p>Massa branca com recheio cremoso de leite Ninho e cobertura delicada.</p>
                    <img src={boloNinho} alt="Bolo de Ninho" className="product-img" />
                    <strong>R$ 75,00</strong><br />
                </div>
            </section>

            <section className="about-content">
                <h2>Cupcakes</h2>
            </section>

            <section className="grid">

                <div className="card">
                    <h3>Cupcake de Chocolate</h3>
                    <p>Massa de chocolate com recheio cremoso e cobertura de brigadeiro.</p>
                    <img src={cupChocolate} alt="Cupcake de Chocolate" className="product-img" />
                    <strong>R$ 8,00</strong><br />
                </div>

                <div className="card">
                    <h3>Cupcake de Morango</h3>
                    <p>Massa de baunilha, recheio de morango e cobertura cremosa.</p>
                    <img src={cupMorango} alt="Cupcake de Morango" className="product-img" />
                    <strong>R$ 9,00</strong><br />
                </div>

                <div className="card">
                    <h3>Cupcake Red Velvet</h3>
                    <p>Massa red velvet com cobertura cremosa de cream cheese.</p>
                    <img src={cupRed} alt="Cupcake Red Velvet" className="product-img" />
                    <strong>R$ 10,00</strong><br />
                </div>

            </section>

            <section className="about-content">
                <h2>Brigadeiros</h2>
            </section>

            <section className="grid">

                <div className="card">
                    <h3>Brigadeiro Tradicional</h3>
                    <p>O clássico brigadeiro de chocolate com granulado tradicional.</p>
                    <img src={briChocolate} alt="Brigadeiro Tradicional" className="product-img" />
                    <strong>R$ 35,00 / 20 unidades</strong><br />
                </div>

                <div className="card">
                    <h3>Brigadeiro de Ninho</h3>
                    <p>Brigadeiro branco cremoso finalizado com leite em pó.</p>
                    <img src={briNinho} alt="Brigadeiro de Ninho" className="product-img" />
                    <strong>R$ 40,00 / 20 unidades</strong><br />
                </div>

                <div className="card">
                    <h3>Brigadeiro de Nutella</h3>
                    <p>Brigadeiro de chocolate com recheio cremoso de Nutella.</p>
                    <img src={briNutella} alt="Brigadeiro de Nutella" className="product-img" />
                    <strong>R$ 45,00 / 20 unidades</strong><br />
                </div>

            </section>

            <section className="about-content">
                <h2>Mousses</h2>
            </section>

            <section className="grid">

                <div className="card">
                    <h3>Mousse de Chocolate</h3>
                    <p>Sobremesa cremosa de chocolate com textura leve e sabor marcante.</p>
                    <img src={mousseChocolate} alt="Mousse de Chocolate" className="product-img" />
                    <strong>R$ 10,00</strong><br />
                </div>

                <div className="card">
                    <h3>Mousse de Maracujá</h3>
                    <p>Uma combinação cremosa e refrescante com sabor de maracujá.</p>
                    <img src={mousseMaracuja} alt="Mousse de Maracujá" className="product-img" />
                    <strong>R$ 10,00</strong><br />
                </div>

                <div className="card">
                    <h3>Mousse de Morango</h3>
                    <p>Mousse suave de morango com textura delicada e refrescante.</p>
                    <img src={mousseMorango} alt="Mousse de Morango" className="product-img" />
                    <strong>R$ 10,00</strong><br />
                </div>

            </section>
        </>
    )
}

export default Produtos
