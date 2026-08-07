import React from 'react'
import Person from './components/Person'
import Product from './Product'


const App = () => {
  return (
    <div>
    <Person name="Himanshu" age={18} profession="Developer"/>
    <hr />
    <Product name="Mobile" price={1200}/>
    </div>
  )
}

export default App
