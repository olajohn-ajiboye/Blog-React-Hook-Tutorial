import React, { useState, useEffect } from 'react';

function App() {
  const [url] = useState(`https://api.myjson.com/bins/t7szj`)
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
    <div className="App">
      {/* Use response somehow */}
    </div>
  );
}

export default App;
