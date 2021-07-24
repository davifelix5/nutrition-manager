import React from 'react'

export default function FoodInfo({ foodInfo, setFoodInfo }) {
  
  const totalCalories = foodInfo.reduce((acc, food) => acc + food.calories * food.quantity, 0)

  function remove(foodName) {
    setFoodInfo(
      foodInfo.filter(food => food.name !== foodName)
    )
  }
  
  return (
    <>
      <h2 className="subtitle">Today's foods</h2>
      <ul style={{marginBottom: 10}}>
        {foodInfo.map(food => (
          <li key={food.name}>
            {food.quantity} {food.name} = {food.calories * food.quantity} cal
            <button style={{margin: '0 5px'}} onClick={() => remove(food.name)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <strong>Total = {totalCalories} cal</strong>
    </>
  )
}
