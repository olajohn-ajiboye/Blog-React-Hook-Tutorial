import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList'


function App() {
  const apiKey = `36920f6651c9cd9d91a6c3205cabaa19`
  const url = `https://www.food2fork.com/api/search?key=${apiKey}`
  const [showHomeButton, setShowHomeButton] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')


  const fetchRecipe = async () => {
    const recipeData = await fetch(url)
    const { recipes } = await recipeData.json()
    setRecipes(recipes)
    setLoading(false)

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const searchUrl = `${url}&q=${search}`
    const searchedRecipeData = await fetch(searchUrl)
    const { recipes } = await searchedRecipeData.json()
    setRecipes(recipes)
    setLoading(false)
    setShowHomeButton(true)

  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  const handleReturnHome = () => {
    // fetchRecipe()
  }
  useEffect(() => {
    fetchRecipe()

  }, [])
  return (
    <div>
      {loading ? <h1 className="text-center">...fetching Recipe</h1> :
        <RecipeList
          handleSubmit={handleSubmit}
          handleSearchChange={handleSearchChange}
          recipes={recipes}
          showHomeButton={showHomeButton}
          handleReturnHome={handleReturnHome} />}
    </div>
  );
}

export default App;
