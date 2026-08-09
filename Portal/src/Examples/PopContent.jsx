import React from 'react'
import {createPortal} from 'react-dom'


const PopContent = ({copied}) => {
  return createPortal (
    <section>
        {copied && ( 
            <div style={{position: "absolute", bottom : "50px", padding:"10px"}}>Copied to clipboard</div>
        )}
    </section>,
    document.querySelector("#create-popup")
  )
}

export default PopContent
