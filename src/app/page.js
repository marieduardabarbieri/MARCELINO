"use client"
import Link from 'next/link';
export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  
  const produtos = await req.json();

  return (
    <main className=''>
      <Link className='LoginAhref2' href="/cadastro" > CADASTRAR </Link>

       
      {produtos.map(produto => (
        <div key={produto.codigo}>
          <p>Produto: {produto.titulo}</p>
          <p>Data de inserção: {produto.data}</p>
          <p>Preço: {produto.preco}</p>
          <p>Descricao: {produto.descricao}</p>
          <img src={produto.img}></img>
          <Link className='LoginAhref' href={`/produto/${produto.codigo}`}>Ver Mais</Link>
        </div>
      
      ))}
    </main>
  )
}