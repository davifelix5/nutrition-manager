import React, { useState } from 'react'

export default function FoodBox({ name, calories, imageUrl, foodInfo, setFoodInfo }) {

  const [quantity, setQuantity] = useState(1)

  function addFood() {
    let newFoods
    
    const foods = foodInfo.map(food => food.name)
    const foodFound = foods.find(foodName => foodName === name)
    
    if (foodFound) {
      newFoods = foodInfo.map(food => {
        if (food.name === name) {
          return {...food, quantity: Number(food.quantity) + Number(quantity)}
        }
        return food
      })
    } else {

      newFoods = [...foodInfo, {name, calories, quantity}]
    }
    
    setFoodInfo(newFoods)
    setQuantity(1)
  }

  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={imageUrl} alt="Pizza" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{name}</strong> <br />
            <small>{calories} cal</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input className="input" min="1" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
          </div>
          <div className="control">
            <button className="button is-info" onClick={addFood}>
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}