import { useParams } from "react-router-dom"
import boloImg from "./img/bolo.jpg"
import cupcakesImg from "./img/cupcakes.jpg"
import brigadeiroImg from "./img/brigadeiro.jpg"
import mousseImg from "./img/mousse.webp"

function News() {
    const { slug } = useParams()
    const news = {
        "bolos-deliciosos": {
            titulo: "Bolos Deliciosos",
            imagem: boloImg,
            conteudo: "Bolos preparados com ingredientes selecionados para deixar cada momento ainda mais especial."
        },

        "cupcakes": {
            titulo: "Cupcakes",
            imagem: cupcakesImg,
            conteudo: "Cupcakes macios, delicados e preparados com diferentes sabores e coberturas."
        },

        "brigadeiros": {
            titulo: "Brigadeiros",
            imagem: brigadeiroImg,
            conteudo: "Brigadeiros cremosos e saborosos, disponíveis em diferentes combinações."
        },

        "mousses": {
            titulo: "Mousses",
            imagem: mousseImg,
            conteudo: "Sobremesas cremosas e refrescantes, perfeitas para adoçar qualquer momento."
        }
    }

    const newsSelected = news[slug]
    return (
        <section className="about-content">
            <h1>{newsSelected.titulo}</h1>
            <img src={newsSelected.imagem} alt={newsSelected.titulo} className="news-img"/>
            <p className="lead-text"> {newsSelected.conteudo}</p>
        </section>
    )
}

export default News
