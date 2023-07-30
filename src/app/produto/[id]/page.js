'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";

export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }
    const idJson = JSON.stringify(id);

    const req = await fetch("https://base-projeto-interdisciplinar-coral.vercel.app/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();

    const remover = () => {
        console.log(idJson)
        try {
            fetch("https://base-projeto-interdisciplinar-coral.vercel.app/produtos", {
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
        <div className='VerMais1'>
        <div className='VerMais2'>
        <img src={produto.img}></img>
            <p>Título: {produto.titulo}</p>
            <p>Descricao: {produto.descricao}</p>
          
            <button className='LoginBotaoCadastrar' onClick={e => e.preventDefault(remover())}>Remover</button> 
            <button className='LoginBotaoCadastrar' onClick={e => e.preventDefault(uptade())}>Alterar</button>
        </div>
        </div>

    )
}