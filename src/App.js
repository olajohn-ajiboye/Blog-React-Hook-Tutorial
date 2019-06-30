import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList'


function App() {
  const apiKey = `36920f6651c9cd9d91a6c3205cabaa19`
  let url = `https://www.food2fork.com/api/search?key=${apiKey}`
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')


  const fetchRecipe = (async () => {
    const recipeData = await fetch(url)
    const { recipes } = await recipeData.json()
    setRecipes(recipes)
    setLoading(false)
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    url = `${url}&q=${search}`
    const searchedRecipeData = await fetch(url)
    const { recipes } = await searchedRecipeData.json()
    setRecipes(recipes)
    setLoading(false)

  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    fetchRecipe()

  }, [])
  return (
    <div>
      {loading ? <h1 className="text-center">...loading</h1> :
        <RecipeList handleSubmit={handleSubmit}
          handleSearchChange={handleSearchChange}
          recipes={recipes} />}
    </div>
  );
}

export default App;
