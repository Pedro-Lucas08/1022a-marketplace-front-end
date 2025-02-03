import { useEffect, useState } from 'react'
import './App.css'
import { Link} from 'react-router-dom'
// Tipo para produtos
type ProdutoType = {
  id: number,
  nome: string,
  tamanho:string,
  preco: string,
  marca: string,
  modelo:string,
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])

  // useEffect para carregar produtos e usuários
  useEffect(() => {
    // Buscar os produtos
    fetch("https://one022a-marketplace-1esb.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
  }, [])

  function handleExcluir(id:number){
    alert(`Excluir o produto com id ${id}`)
    fetch(`https://one022a-marketplace-1esb.onrender.com/produtos/${id}`, {
      method: 'DELETE'
    })
    .then(resposta=>{
      if(resposta.status ===200){
        alert("Produto excluído com sucesso")
        window.location.reload()
      }else{
        alert("Erro ao excluir o produto: Confira o terminal do backend")
      }
    })
  }

  return (
    <>
      {/* Listagem de Produtos */}
      <div className="produtos-container">
      <Link to="/cadastro-produto">Cadastro de Produto</Link>
        <h1 className='titulo-produto'>Produtos</h1>
        <div className="produtos-list">
          {
            produtos.map(produto => (
              <div key={produto.id} className="produto-item">
                <h3 className="produto-nome">{produto.nome}</h3> {/* Use h3 para o nome do produto */}
                <div className='container-imagem'>
                  <img src={produto.imagem} alt="Imagem do produto" />
                </div>
                <p className="produto-tamanho">{produto.tamanho}</p>
                <p className="produto-preco">{produto.preco}</p>
                <p className="produto-marca">{produto.marca}</p>
                <p className="produto-modelo">{produto.modelo}</p>
                <button className="botao-comprar">Comprar</button>
                <button onClick={() => handleExcluir(produto.id)}>Excluir</button>
                <Link to={`/alterar-produto/${produto.id}`} className="botao-comprar">Alterar</Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App