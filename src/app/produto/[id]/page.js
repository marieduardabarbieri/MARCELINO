'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";

export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }
    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3003/produto", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();

    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3003/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (
        <div>
            <p>Título: {produto.titulo}</p>
            <p>Descricao: {produto.descricao}</p>
            <img src={produto.img}></img>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button> 
            <button onClick={e => e.preventDefault(uptade())}>alterar</button>
       
        </div>

    )
}