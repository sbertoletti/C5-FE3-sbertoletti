import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState([])
  const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
  const searchApi = `https://api.spoonacular.com/food/search?apiKey=${apiKey}&query=${search}&number=10`;

  useEffect(() => {
    axios(searchApi)
    .then(res => setRecipes(res.data.searchResults[0].results))
  }, [searchApi])
  console.log(recipes)
  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {recipes.map(recipe => <Link to={'/detalle/' + recipe.id} key={recipe.id}>
          <li >{recipe.name}</li>
        </Link>)}
    </div>
  )
}

export default Recipes