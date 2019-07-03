import React, { useState, useEffect } from 'react'

const RecipeContext = React.createContext()
let api = `https://api.myjson.com/bins/t7szj`
const apiKey = `7cdab426afc366070dab735500555521`
const RecipeProvider = (props) => {
  let url = `https://www.food2fork.com/api/search?key=${apiKey}`
  const [showHomeButton, setShowHomeButton] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const fetchRecipe = async () => {
    try {
      const recipeData = await fetch(api)
      const { recipes } = await recipeData.json()
      setRecipes(recipes)
      setLoading(false)
      console.log(recipes)
    } catch (e) {
      if (e) {
        console.log(e.message, 'Try updating the API key in App.js')
      }
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const searchUrl = `${url}&q=${search}`
      const searchedRecipeData = await fetch(searchUrl)
      const { recipes } = await searchedRecipeData.json()
      setRecipes(recipes)
      setLoading(false)
      setShowHomeButton(true)
    } catch (e) {
      console.log(e)
    }
  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  const handleReturnHome = () => {
    fetchRecipe()
    setShowHomeButton(false)
  }

  useEffect(() => {
    fetchRecipe()

  }, [])

  return (
    <RecipeContext.Provider value={{
      loading,
      search,
      showHomeButton,
      recipes,
      handleSearchChange,
      handleSubmit,
      handleReturnHome,
    }}>
      {props.children}
    </RecipeContext.Provider>
  )
}
const RecipeConsumer = RecipeContext.Consumer
export { RecipeProvider, RecipeConsumer, RecipeContext }
