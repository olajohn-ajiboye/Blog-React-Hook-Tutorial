import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList'


function App() {
  const url = `https://api.myjson.com/bins/t7szj`
  const [recipes, setRecipes] = useState([])
  const fetchRecipe = async () => {
    const recipeData = await fetch(url)
    const { recipes } = await recipeData.json()
    setRecipes(recipes)
  }
  useEffect(() => {
    fetchRecipe()
  })
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
