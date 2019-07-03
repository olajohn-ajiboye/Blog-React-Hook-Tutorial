import React, { useContext } from 'react'
import { RecipeContext } from '../context/index'

export default function RecipeSearch() {
  const appContext = useContext(RecipeContext)
  const { handleSubmit, handleSearchChange } = appContext

  return (
    <div className="container d-flex justify-content-center my-5">
      <form className="form-inline" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search" >Search:</label>
        <input data-age="Love" onChange={(e) => handleSearchChange(e)} type="text" className="form-control" id="search" placeholder="coffeee" name="search" />
        <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
      </form>
    </div>
  )
}
