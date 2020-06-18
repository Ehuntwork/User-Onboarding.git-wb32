import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import axios from 'axios'
import * as Yup from 'yup'

const intialValues = {
  name:'',
  email:'',
  password: '',
  terms: true,
}

const intialErrors = {
  name:'',
  email:'',
  password: '',
}

const intialUser = [];
const initialDisabled = true


function App() {
  const [user, setUser] = useState(intialUser)
  const [formValues, setFormValues] = useState(intialValues)
  const [error, setError] = useState(intialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)       

  const onInputChange = evt =>{
    const{name, value} = evt.target;
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt =>{
    const { name, checked } = evt.target
    setFormValues({
      ...formValues, [name]: checked,
    })
  }

  const postNewUser = (userInfo)=>{
    
  }

  const onSubmit = evt =>{
    evt.preventDefault()

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }

    postNewUser(newUser)

  }

  return (
    <div className="App">
        <Form
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          disabled={disabled}
          errors={error}
        />
    </div>
  );
}

export default App;
