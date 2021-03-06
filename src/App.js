import React, { useState } from 'react';

import FoodBox from './components/FoodBox'
import FoodInfo from './components/FoodInfo'
import FoodForm from './components/FoodForm'

import initialFoods from './foods.json'

import 'bulma/css/bulma.css'

function App() {
  
  const [foods, setFoods] = useState(initialFoods.map(food => ({...food, show: true})))
  const [showForm, setShowForm] = useState(false)
  const [foodInfo, setFoodInfo] = useState([])

  function filterFoods(filter) {
    const newFoods = foods.map(food => {
      const name = food.name.toLowerCase()
      if (filter === '' || name.includes(filter.toLowerCase())) {
        return {...food, show: true}
      }
      return {...food, show: false}
    })
    setFoods(newFoods)
  }

  return (
    <div className="box">
      {showForm && <FoodForm setFoods={setFoods} foods={foods} setShow={setShowForm} />}
      <h1 className="title">IronNutrition</h1>
      <div style={{marginBottom: 30}}>
        <input type="text" className="input" onChange={e => filterFoods(e.target.value)} />
      </div>
      <div className="columns">
        <div className="column">
          {foods.map(food => {
            return food.show ? <FoodBox 
              key={food.name}
              foodInfo={foodInfo}
              setFoodInfo={setFoodInfo}
              name={food.name} 
              calories={food.calories} 
              imageUrl={food.image} 
            /> : null
          })}
        </div>
        <div className="column content">
         <FoodInfo foodInfo={foodInfo} setFoodInfo={setFoodInfo} />
        </div>
      </div>
      <button className="button is-link" onClick={() => setShowForm(true)}>Add food +</button>
    </div>
  );
}

export default App;
