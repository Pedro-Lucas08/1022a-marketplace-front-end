import {  FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastroProduto() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [preco, setPreco] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [imagem, setImagem] = useState("");

  async function handleForm(event: FormEvent) {
    event.preventDefault();
    try {
      const resposta = await fetch(
        "https://one022a-marketplace-1esb.onrender.com/produtos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            tamanho,
            marca,
            modelo,
            preco,
            imagem,
          }),
        }
      );

      if (resposta.status !== 500) {
        alert("Produto cadastrado com sucesso!");
        navigate("/");
      } else {
        const mensagem = await resposta.text();
        alert("Erro ao cadastrar produto - Error: " + mensagem);
      }
    } catch (e) {
      alert("Servidor não está respondendo.");
    }
  }

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Produtos</h1>
      <form className="cadastro-form" onSubmit={handleForm}>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input
            placeholder="Nome"
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="tamanho">Tamanho</label>
          <input
            placeholder="Tamanho"
            type="text"
            name="tamanho"
            id="tamanho"
            value={tamanho}
            onChange={(e) => setTamanho(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="marca">Marca</label>
          <input
            placeholder="Marca"
            type="text"
            name="marca"
            id="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="modelo">Modelo</label>
          <input
            placeholder="Modelo"
            type="text"
            name="modelo"
            id="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="preco">Preço</label>
          <input
            placeholder="Preço"
            type="text"
            name="preco"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="imagem">URL Imagem</label>
          <input
            placeholder="URL da Imagem"
            type="text"
            name="imagem"
            id="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
          {imagem && (
            <img className="imagem-produto" src={imagem} alt="Imagem do Produto" />
          )}
        </div>
        <button className="botao-cadastrar" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroProduto;
