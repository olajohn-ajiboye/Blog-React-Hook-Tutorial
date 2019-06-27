import React from 'react'

export default function Recipe({ recipe }) {
  const { image_url, publisher, title, source_url, recipe_id } = recipe
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
            <button type="button" className="btn btn-primary text-capitalize">Details</button>
            <a href={source_url}
              className="btn mx-2 btn-success"
              target="_blank" rel="noopener noreferrer"
            >Recipe url</a>
          </div>
        </div>
      </div>
    </>
  )
}
