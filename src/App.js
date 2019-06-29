import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'


function App() {
  const url = `https://api.myjson.com/bins/t7szj`
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchRecipe = async () => {
    const recipeData = await fetch(url)
    const { recipes } = await recipeData.json()
    setRecipes(recipes)
    setLoading(false)
  }
  useEffect(() => {
    fetchRecipe()
  })
  return (
    <div>
      {loading ? <h1 className="text-center">...loading</h1> : <RecipeList recipes={recipes} />}
      <RecipeDetails></RecipeDetails>
    </div>
  );
}

export default App;
