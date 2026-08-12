import React from 'react'
import FetchData from './FetchData'
import BasicEffect from  './challenge/BasicEffect'

/* useEffect hook allows you to  perform side effects in you components. Some examples of side effects  are: fetching data, directly updating the DOM etc. */



// syntax

/* useEffect(() =>{
  //do you magic
}) */
 
// 1. without the array  -> on every single render               
const App = () => {
  return (
    <div>
      {/* <FetchData /> */}

        <BasicEffect />
    </div>
  )
}

export default App
