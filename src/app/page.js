"use client"
import Link from 'next/link';
export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  
  const produtos = await req.json();

  return (
    
    <main className='tudo'>
     <p> <Link className='LoginAhref2' href="/cadastro" > CADASTRAR </Link></p>

   <div className='Produto1'> 
      {produtos.map(produto => (
        <div key={produto.codigo} className='Produto3'>
          <img src={produto.img}></img><br/><hr/>
          <p className='Produto2'>Produto: {produto.titulo}</p>
          <p className='Produto2'>Data de inserção: {produto.data}</p>
          <p className='Produto2'>Preço: R${produto.preco}</p>
          <p className='Produto2'>Descricao: {produto.descricao}</p>
          <Link className='LoginAhref' href={`/produto/${produto.codigo}`}>Ver Mais</Link>
        </div>
  
      ))}
      </div>
    </main>
  )
}