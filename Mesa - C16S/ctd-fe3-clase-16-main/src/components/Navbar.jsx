import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [ id, setId ] = useState();
  console.log(id);

  return (
    <div>
      <nav> 
          <Link to='/home'><h4>Home</h4></Link>
          <Link to='/contacto'><h4>Contacto</h4></Link>
          <Link to={`/beer/:${id}`}><h4>Beer</h4></Link>
      </nav>
      <input type='text' onChange={()=> setId(event.target.value)} />
    </div>
  )
}

export default Navbar


