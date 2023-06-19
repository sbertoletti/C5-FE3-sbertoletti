import React, { useEffect, useState } from 'react'
import Card from "./components/Card"
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async()=>{
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
  }

  useEffect(()=>{
    getBeers()
  }, []) //Agregamos "[]" para evitar el loop infinito

  return (
    <div className='grid'>
        {beers.length
            ? beers.map(beer => (<Link to={`/beer/` + beer.id}><Card data={beer} /></Link>))
            : null
        }
    </div>
  )
}

export default Home