import { useState } from "react"

function Pedidos() {
    //Array contendo lista de produtos e preço
    const produtos = [
        ["Bolo de Chocolate", 65],
        ["Bolo de Morango", 70],
        ["Bolo de Ninho", 75],
        ["Cupcake de Chocolate", 8],
        ["Cupcake de Morango", 9],
        ["Cupcake Red Velvet", 10],
        ["Brigadeiro Tradicional - 20 unidades", 35],
        ["Brigadeiro de Ninho - 20 unidades", 40],
        ["Brigadeiro de Nutella - 20 unidades", 45],
        ["Mousse de Chocolate", 10],
        ["Mousse de Maracujá", 10],
        ["Mousse de Morango", 10]
    ]

    //Estado do formulário
    const [pedido, setPedido] = useState({
        nome: "",
        telefone: "",
        produto: "",
        quantidade: 1,
        pagamento: "",
        observacoes: ""
    })

    //Estado que armazena os produtos adicionados
    const [itens, setItens] = useState([])

    //Controla se o pedido foi finalizado
    const [finalizado, setFinalizado] = useState(false)

    //Altera os dados do formulário
    function alterar(e) {
        const { name, value } = e.target

        setPedido({
            ...pedido,
            [name]: value
        })
    }

    //Adiciona um produto ao pedido
    function adicionar() {
        const produto = produtos.find(
            p => p[0] === pedido.produto
        )

        if (!produto) {
            return
        }

        setItens([
            ...itens,
            {
                nome: produto[0],
                preco: produto[1],
                quantidade: Number(pedido.quantidade)
            }
        ])

        setPedido({
            ...pedido,
            produto: "",
            quantidade: 1
        })
    }

    // Calcula o total
    const total = itens.reduce(
        (soma, item) =>
            soma + item.preco * item.quantidade,
        0
    )

    // Finaliza o pedido
    function finalizar() {

        if (
            !pedido.nome ||
            !pedido.telefone ||
            !pedido.pagamento ||
            itens.length === 0
        ) {
            return
        }

        setFinalizado(true)
    }

    return (
        <section className="about-content">
            <h1>Faça seu <span>Pedido</span></h1>
            <p className="lead-text">Preencha os dados e escolha seus produtos.</p>

            <form className="pedido-form">

                <div className="form-group">
                    <label>Nome</label>
                    <input
                        name="nome"
                        value={pedido.nome}
                        onChange={alterar}
                        placeholder="Digite seu nome"
                    />
                </div>

                <div className="form-group">
                    <label>Telefone</label>
                    <input
                        name="telefone"
                        value={pedido.telefone}
                        onChange={alterar}
                        placeholder="(00) 00000-0000"
                    />
                </div>

                <div className="form-group">
                    <label>Produto</label>
                    <select
                        name="produto"
                        value={pedido.produto}
                        onChange={alterar}
                    >
                        <option value="">Selecione um produto</option>

                        {produtos.map(p => (
                            <option
                                key={p[0]}
                                value={p[0]}
                            >
                                {p[0]} - R$ {p[1].toFixed(2)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Quantidade</label>
                    <input
                        name="quantidade"
                        type="number"
                        min="1"
                        value={pedido.quantidade}
                        onChange={alterar}
                    />
                </div>

                <button type="button" onClick={adicionar}>Adicionar produto</button>

                {itens.map((item, i) => (
                    <div className="item-pedido" key={i}>
                        <p>
                            {item.quantidade}x {item.nome}
                            <br />
                            R$ {(item.preco * item.quantidade).toFixed(2)}
                        </p>
                    </div>
                ))}

                <h2>Total: R$ {total.toFixed(2)}</h2>

                <div className="form-group">
                    <label>Forma de pagamento</label>
                    <select
                        name="pagamento"
                        value={pedido.pagamento}
                        onChange={alterar}
                    >
                        <option value="">Selecione</option>
                        <option value="PIX">PIX</option>
                        <option value="Dinheiro">Dinheiro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Observações</label>
                    <textarea
                        name="observacoes"
                        value={pedido.observacoes}
                        onChange={alterar}
                        placeholder="Ex: Quero o bolo com decoração rosa..."
                    />
                </div>
                <button type="button" onClick={finalizar}>Finalizar pedido</button>
            </form>

            {/* Mostra o resumo quando o pedido é finalizado */}
            {finalizado && (
                <div className="resumo-pedido">
                    <h2>Resumo do Pedido</h2>
                    <p><strong>Nome:</strong> {pedido.nome}</p>
                    <p><strong>Telefone:</strong> {pedido.telefone}</p>
                    <h3>Produtos:</h3>

                    {itens.map((item, i) => (
                        <p key={i}>
                            {item.quantidade}x {item.nome} -{" "}
                            R$ {(item.preco * item.quantidade).toFixed(2)}
                        </p>
                    ))}

                    <h3>Total: R$ {total.toFixed(2)}</h3>

                    <p><strong>Pagamento:</strong>{" "}{pedido.pagamento}</p>

                    {pedido.observacoes && (
                        <p>
                            <strong>Observações:</strong>{" "}
                            {pedido.observacoes}
                        </p>
                    )}

                    <p><strong>Pedido realizado com sucesso!</strong></p>
                </div>
            )}
        </section>
    )
}

export default Pedidos