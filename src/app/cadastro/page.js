'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'
import '../globals.css' 

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data, setData] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDesc] = useState();
    const [img, setImg] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            data: data,
            preco: preco,
            descricao:descricao,
            img:img
        }
        const produtoJson = JSON.stringify(produto);
        fetch("https://base-projeto-interdisciplinar-coral.vercel.app/produtos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className='LoginBox'>
        <div className='LoginContainer'>
        <h1 >Cadastro de Produtos</h1>
            <form  className='LoginForm' onSubmit={cadastrar}>
                <input  className='LoginInput'
                    type="text"
                    placeholder='Titulo:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                />   <span className='LoginSpam'></span>

                <input  className='LoginInput'
                    type="date"
                    nome="data"
                    onChange={e => setData(e.target.value)}
                />   <span className='LoginSpam'></span>

                <input  className='LoginInput'
                    type="number"
                    placeholder='Preço:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                />   <span className='LoginSpam'></span>

             <input  className='LoginInput'
                    type="text"
                    placeholder='Descricao:'
                    nome="descricao"
                    onChange={e => setDesc(e.target.value)}
                />   <span className='LoginSpam'></span>

               <input  className='LoginInput'
                    type="text"
                    placeholder='Url img:'
                    nome="img"
                    onChange={e => setImg(e.target.value)}
                />   <span className='LoginSpam'></span>

                <button type='submit' className='LoginBotaoCadastrar'>Cadastrar</button>
                <div>
                    <a href='/' className='LoginAhref' >Voltar</a>
                </div>
            </form>
        </div>
        </div>
    );
}