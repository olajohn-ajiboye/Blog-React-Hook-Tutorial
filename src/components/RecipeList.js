import React, { useContext } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'
import { RecipeContext } from '../context/index'

export default function RecipeList() {
  const appContext = useContext(RecipeContext)
  const { showHomeButton, recipes, handleReturnHome } = appContext

  return (
    <>
      <RecipeSearch></RecipeSearch>
      <div className="container my-5 home-button">
        {showHomeButton && <button type="button"
          className="btn btn-warning"
          onClick={() => handleReturnHome()}>
          Go Back Home
        </button>}
        <div className=" d-flex d-flex justify-content-center mb-3">
          <h1 className="text-slaned ">Recipe List</h1>
        </div>

        <div className="row recipe-list">
          {recipes.map(recipe => {
            return <Recipe
              key={recipe.recipe_id} recipe={recipe} />
          })}
        </div>
      </div>
    </>
  )
}
