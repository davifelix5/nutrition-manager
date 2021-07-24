import React from 'react'

export default function FoodInfo({ foodInfo, setFoodInfo }) {
  
  const totalCalories = foodInfo.reduce((acc, food) => acc + food.calories * food.quantity, 0)

  function remove(foodName) {
    setFoodInfo(
      foodInfo.filter(food => food.name !== foodName)
    )
  }
  
  return (
    <div className="box">
      <h2 className="title is-3">Today's foods</h2>
      <ul style={{listStyle: 'inside'}}>
        {foodInfo.map(food => (
          <li key={food.name}>
            {food.quantity} {food.name} = {food.calories * food.quantity} cal
            <button style={{margin: '0 5px'}} onClick={() => remove(food.name)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      Total = {totalCalories}
    </div>
  )
}
