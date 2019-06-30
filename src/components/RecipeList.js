import React from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

export default function RecipeList({ recipes, handleSubmit, handleSearchChange }) {

  return (
    <>
      <RecipeSearch handleSubmit={handleSubmit}
        handleSearchChange={handleSearchChange}></RecipeSearch>
      <div className="container my-5">

        <div className=" d-flex d-flex justify-content-center mb-3">
          <h1 className="text-slaned ">Recipe List</h1>
        </div>

        <div className="row">
          {recipes.map(recipe => {
            return <Recipe
              key={recipe.recipe_id} recipe={recipe} />
          })}
        </div>
      </div>
    </>
  )
}
