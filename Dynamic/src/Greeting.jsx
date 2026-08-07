import React from 'react'

let greet = "Himanshu"
let date = new Date();


const Greeting = () => {
  return (
    <div>
      <h1>Hello, {greet}</h1>
        <p>Date : {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
    </div>
  )
}

export default Greeting
