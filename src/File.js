import React from 'react'

function File({data}) 
{
  return (
    <>
      <div className="card mb-3" style={{maxWidth:"540px", margin:"20px auto"}}>
        {data.map((items)=>
      <div className="row g-0" style={ {margin:"20px auto"}}><br/>
        <div className="col-md-4" >
          <img src={items.recipe.image} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{items.recipe.label}</h5>
            
            <p className="card-text"><b>Recipe Type</b>:{items.recipe.cuisineType}</p>
            <p className="card-text"><b>HealthLabels</b>:{items.recipe.healthLabels[0]}</p>
            <p className="card-text"><b>Calories</b>:{items.recipe.calories}</p>
            
          </div>
        </div>
      </div>
        )}
    </div>
    </>
  )
}

export default File
