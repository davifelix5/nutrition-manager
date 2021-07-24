import React, { useState } from 'react'

export default function FoodForm({ foods, setFoods, setShow }) {
  
  const [name, setName] = useState('')
  const [calories, setCalories] = useState(0)
  const [image, setImage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFoods([
      ...foods,
      {
        name, calories, image, show: true
      }
    ])
    setShow(false)
  }
  
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content" style={{background: '#fff', padding: 15, borderRadius: 8}}>
        <form onSubmit={handleSubmit}>
          <div className="columns">
            <div className="field column is-four-fifths">
              <label htmlFor="name" className="label">Nome</label>
              <div className="control">
                <input type="text" className="input" id="name" value={name} onChange={e => setName(e.target.value)} />
              </div>
            </div>
            <div className="field column">
              <label htmlFor="calories" className="label">Calorias</label>
              <div className="control">
                <input type="text" className="input" id="calories" value={calories} onChange={e => setCalories(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="image" className="label">Imagem</label>
              <div className="control">
                <input type="text" className="input" id="image" value={image} onChange={e => setImage(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link">Adicionar</button>
            </div>
          </div>
        </form>
      </div>
      <button onClick={() => setShow(false)} className="modal-close is-large" aria-label="close"></button>
    </div>
  )
}