import { ChangeEvent, FormEvent, useState } from "react";
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
    <>
      <div className="container">
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleForm}>
          <div className="input-group">
            <label htmlFor="nome">Nome</label>
            <input
              placeholder="Nome"
              type="text"
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
              id="imagem"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
            {imagem && <img className="imagem-preview" src={imagem} alt="Imagem do Produto" />}
          </div>
          <button className="botao" type="submit">Cadastrar</button>
        </form>
      </div>

      <style>
        {`
          .container {
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            background-color: #2a2a4a;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
          }

          h1 {
            color: #b3b3ff;
            margin-bottom: 20px;
          }

          .input-group {
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-bottom: 15px;
          }

          label {
            color: #e0e0e0;
            font-weight: bold;
            margin-bottom: 5px;
          }

          input {
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #3a3a5a;
            color: #fff;
            font-size: 16px;
            outline: none;
          }

          input::placeholder {
            color: #b3b3ff;
            opacity: 0.7;
          }

          .imagem-preview {
            width: 100%;
            max-width: 200px;
            height: auto;
            margin-top: 10px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
          }

          .botao {
            padding: 12px;
            background-color: #7a36ff;
            color: white;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
          }

          .botao:hover {
            background-color: #5a26cc;
          }
        `}
      </style>
    </>
  );
}

export default CadastroProduto;
