import React from 'react'
import { Field, reduxForm } from 'redux-form'

let DishForm = ({ handleSubmit }) => {
  
return (
  <form onSubmit={handleSubmit}>

    <div id='dish-name-container'>
      <label htmlFor='dishName'>Dish name</label>
      <Field name='dishName' component='input' type='text' />
    </div>

    <div id='prep-time-container'>
      <label htmlFor='prep-time'>Prep time</label>
      <Field name='prep-time' component='input' type='text' />
    </div>

    <div id='dish-types-container'>
      <label htmlFor='dish-type'>Dish type</label>
      <div id='select-box'>
        <Field name='dish-type' component='select'>
          {['pizza','soup', 'sandwich']
                                  .map( (d,i) => <option value={d} key={i}>{d}</option>)}
        </Field>
      </div>
    </div>
  </form>
)
}

DishForm = reduxForm({
  form: 'dishForm'
})(DishForm)

export default DishForm
