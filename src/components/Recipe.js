import React, { useState } from 'react'

export default function Recipe({ recipe }) {
  const { image_url, publisher, title, recipe_id } = recipe
  const [showInfo, setShowInfo] = useState(false)
  const [recipeDetails, setRecipeDetails] = useState([])
  const { ingredients, social_rank } = recipeDetails

  const handleShowInfo = async (e) => {
    const { id } = e.target.dataset
    const response = await fetch(`https://www.food2fork.com/api/get?key=7cdab426afc366070dab735500555521&rId=${id}`)
    const { recipe } = await response.json()
    setRecipeDetails(recipe)
    setShowInfo(!showInfo)
  }
  return (
    <>
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <img src={image_url} alt="recipe" className="img-card-top" style={{ height: "14rem" }} />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning">
              Provided by: {publisher}
            </h6>
          </div>
          <div className="card-footer">
            <button type="button" style={{ margin: `13px` }} className="btn btn-primary text-center" data-id={recipe_id} onClick={handleShowInfo}>More Info</button>
            {showInfo &&
              <button key={recipe_id} type="button" style={{ margin: `13px` }} className="btn btn-success text-center font-weight-bold" >{social_rank}</button>}
            {showInfo ?
              ingredients.map((i, index) => {
                return <ul key={index} className="list-group">
                  <li className="list-group-item" >{i}</li>
                </ul>
              })
              : null}
          </div>
        </div>
      </div>
    </>
  )
}
