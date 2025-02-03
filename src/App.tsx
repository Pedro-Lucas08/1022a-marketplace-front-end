import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// Tipo para produtos
type ProdutoType = {
  id: number;
  nome: string;
  tamanho: string;
  preco: string;
  marca: string;
  modelo: string;
  imagem: string;
};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);

  useEffect(() => {
    fetch("https://one022a-marketplace-1esb.onrender.com/produtos")
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  function handleExcluir(id: number) {
    if (window.confirm(`Deseja realmente excluir o produto ${id}?`)) {
      fetch(`https://one022a-marketplace-1esb.onrender.com/produtos/${id}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (res.status === 200) {
            setProdutos(produtos.filter(produto => produto.id !== id));
            alert("Produto excluído com sucesso");
          } else {
            alert("Erro ao excluir o produto. Confira o backend");
          }
        });
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Produtos</h1>
        <Link to="/cadastro-produto" className="botao">Cadastrar Produto</Link>
      </header>

      <div className="produtos-grid">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} className="produto-img" />
            <h3>{produto.nome}</h3>
            <p><strong>Marca:</strong> {produto.marca}</p>
            <p><strong>Modelo:</strong> {produto.modelo}</p>
            <p><strong>Tamanho:</strong> {produto.tamanho}</p>
            <p className="preco">R$ {produto.preco}</p>
            <div className="botoes">
              <button className="botao-comprar">Comprar</button>
              <button className="botao-excluir" onClick={() => handleExcluir(produto.id)}>Excluir</button>
              <Link to={`/alterar-produto/${produto.id}`} className="botao">Alterar</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
