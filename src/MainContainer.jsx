import { Routes, Route } from "react-router-dom"

import Inicio from "./Inicio"
import Sobre from "./Sobre"
import Produtos from "./Produtos"
import Pedidos from "./Pedidos"
import Contato from "./Contato"
import News from "./News"
function MainContainer() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/news/:slug" element={<News />} />
            </Routes>
        </main>
    )
}

export default MainContainer