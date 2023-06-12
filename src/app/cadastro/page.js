'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'
import '../globals.css' 

export default function Cadastro() {
    const route = useRouter();
    const [nome, setNome] = useState();
    const [idade, setIdade] = useState();
    const [uf, setUF] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            nome: nome,
            idade: idade,
            uf: uf
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className='LoginBox'>
        <div className='LoginContainer'>
            <form  className='LoginForm' onSubmit={cadastrar}>
                <input  className='LoginInput'
                    type="text"
                    placeholder='Nome:'
                    nome="nome"
                    onChange={e => setNome(e.target.value)}
                /><br/>
                <input  className='LoginInput'
                    type="text"
                    placeholder='Idade:'
                    nome="idade"
                    onChange={e => setIdade(e.target.value)}
                /><br/>
                <input  className='LoginInput'
                    type="text"
                    placeholder='UF:'
                    nome="uf"
                    onChange={e => setUF(e.target.value)}
                /><br/>
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
        </div>
    );
}