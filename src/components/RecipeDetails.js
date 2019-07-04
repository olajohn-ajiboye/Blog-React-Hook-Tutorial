import React from 'react'

export default function RecipeDetails({ ingredients, showInfo, social_rank }) {
  return (
    <>
      {showInfo &&
        <button type="button" style={{ margin: `13px` }} className="btn btn-success text-center font-weight-bold" >Social Rank: {social_rank}</button>}
      {showInfo ?
        ingredients.map((i, index) => {
          return <ul key={index} className="list-group">
            <li className="list-group-item" >{i}</li>
          </ul>
        })
        : null}
    </>
  )
}
