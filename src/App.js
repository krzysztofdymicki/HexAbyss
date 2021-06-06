import React from 'react'
import DishForm from './components/DishForm'
import { Container } from 'reactstrap'


const App = () => {

  return (
    <Container 
              style={{
                      width: '100vw',
                      background: '#E0E0E0',
                      margin: '0 auto',
                      height: '100vh',
                      padding: '2em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'}}>
    <DishForm />
    </Container>
  )
}

export default App