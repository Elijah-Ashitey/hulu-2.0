import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Nav from '../components/nav'
import Results from '../components/result'
import requests from '../utils/request'

export default function Home({results}) {

  return (
    <div className="bg-[#06202A] min-h-screen md:px-10 text-gray-300" >
      <Head>
        <title>hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>
      {/* Nav */}
      <Nav/>
      {/* Result */}
      <Results results ={results}/>

    </div>
  )
}


export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res=>res.json())
return {
  props:{
    results: request.results,
  }
}

}