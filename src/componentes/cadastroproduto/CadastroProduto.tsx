import {  ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';
function CadastroProduto(){
    const navigate = useNavigate()
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [tamanho, setTamanho] = useState("")
    const [preco, setPreco] = useState("")
    const [imagem, setImagem] = useState("")
    const [marca, setMarca] = useState("")
    const [modelo, setmodelo] = useState("")
    async function handleForm(event: FormEvent){
        event.preventDefault()
        try{
            const resposta = await fetch("https://one022a-marketplace-1esb.onrender.com/produtos",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id:id,
                    nome: nome,
                    tamanho: tamanho,
                    preco: preco,
                    imagem: imagem,
                    marca: marca,
                    modelo: modelo,
                })
            })
            if(resposta.status!=500){
                alert("Produto Cadastro com Sucesso")
                navigate("/")
            }
            else{
                const mensagem = await resposta.text()
                alert("Erro ao Cadastrar Produto - Error: "+mensagem)
            }
        }
        catch(e){
            alert("Servidor não está respondendo.")
        }
        
    }
    function handleId(event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value)
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleTamanho(event: ChangeEvent<HTMLInputElement>) {
        setTamanho(event.target.value)
    }
    function handlePreco(event: ChangeEvent<HTMLInputElement>) {
        setPreco(event.target.value)
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>) {
        setImagem(event.target.value)
    }
    function handleMarca(event: ChangeEvent<HTMLInputElement>) {
        setMarca(event.target.value)
    }
    function handleModelo(event: ChangeEvent<HTMLInputElement>) {
        setmodelo(event.target.value)
    }
   
    return(
        <>
            <h1>Cadastro de Produtos</h1>
<form onSubmit={handleForm}>
    <div>
        <label htmlFor="id">ID:</label>
        <input
            placeholder="ID"
            type="text"
            name="id"
            id="id"
            onChange={handleId}
        />
    </div>
    <div>
        <label htmlFor="nome">Nome:</label>
        <input
            placeholder="Nome"
            type="text"
            name="nome"
            id="nome"
            onChange={handleNome}
        />
    </div>
    <div>
        <label htmlFor="marca">Marca:</label>
        <input
            placeholder="Marca"
            type="text"
            name="marca"
            id="marca"
            onChange={handleMarca}
        />
    </div>
    <div>
        <label htmlFor="tamanho">Tamanho:</label>
        <input
            placeholder="Tamanho"
            type="text"
            name="tamanho"
            id="tamanho"
            onChange={handleTamanho}
        />
    </div>
    <div>
        <label htmlFor="modelo">Modelo:</label>
        <input
            placeholder="Modelo"
            type="text"
            name="modelo"
            id="modelo"
            onChange={handleModelo}
        />
    </div>
    <div>
        <label htmlFor="preco">Preço:</label>
        <input
            placeholder="Preco"
            type="text"
            name="preco"
            id="preco"
            onChange={handlePreco}
        />
    </div>
    <div>
        <label htmlFor="imagem">URL da Imagem:</label>
        <input
            placeholder="URL da Imagem"
            type="text"
            name="imagem"
            id="imagem"
            onChange={handleImagem}
        />
    </div>
    <button type="submit">Cadastrar</button>
</form>

        </>
    )
}

export default CadastroProduto