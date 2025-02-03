import {  ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';
function CadastroProduto(){
    const navigate = useNavigate()
    const [nome,setNome] = useState("")
    const [tamanho,setTamanho] = useState("")
    const [preco,setPreco] = useState("")
    const [marca,setMarca] = useState("")
    const [modelo,setModelo] = useState("")
    const [imagem,setImagem] = useState("")
    async function handleForm(event:FormEvent){
        event.preventDefault()
        try{
            const resposta = await fetch("https://one022a-marketplace-1esb.onrender.com/produtos",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    nome:nome,
                    tamanho:tamanho,
                    marca:marca,
                    modelo:modelo,
                    preco:preco,
                    imagem:imagem
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
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleTamanho(event:ChangeEvent<HTMLInputElement>){
        setTamanho(event.target.value)
    }
    function handleMarca(event:ChangeEvent<HTMLInputElement>){
        setMarca(event.target.value)
    }
    function handleModelo(event:ChangeEvent<HTMLInputElement>){
        setModelo(event.target.value)
    }
    function handlePreco(event:ChangeEvent<HTMLInputElement>){
        setPreco(event.target.value)
    }
    function handleImagem(event:ChangeEvent<HTMLInputElement>){
        setImagem(event.target.value)
    }
    return(
        <>
            <h1>Meu Componente de Cadastro de Produtos</h1>
            <form onSubmit={handleForm}>
            <div>
                    <label htmlFor="nome">Nome</label>
                    <input placeholder="Nome" type="text" name="nome" id="nome" value={nome} onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="tamanho">Tamanho</label>
                    <input placeholder="Tamanho" type="text" name="tamanho" id="tamanho" value={tamanho} onChange={handleTamanho} />
                </div>
                <div>
                    <label htmlFor="marca">Marca</label>
                    <input placeholder="Marca" type="text" name="marca" id="marca" value={marca} onChange={handleMarca} />
                </div>
                <div>
                    <label htmlFor="modelo">Modelo</label>
                    <input placeholder="Modelo" type="text" name="modelo" id="modelo" value={modelo} onChange={handleModelo} />
                </div>
                <div>
                    <label htmlFor="preco">Preço</label>
                    <input placeholder="Preço" type="text" name="preco" id="preco" value={preco} onChange={handlePreco} />
                </div>
                <div>
                    <label htmlFor="imagem">URL Imagem</label>
                    <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" value={imagem} onChange={handleImagem} />
                    {imagem && <img className="imagem-produto-reduzida" src={imagem} alt="Imagem do Produto" />}
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    )
}

export default CadastroProduto