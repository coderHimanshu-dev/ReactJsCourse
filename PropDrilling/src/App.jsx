import React from 'react'
import ComponentA from './ComponentA'



/* Prop Drilling = Jab data ko parent se child tak pahunchane ke liye beech ke unnecessary components se props pass karne padte hain.
 */

/* App
 ↓ user
Parent
 ↓ user
Child
 ↓ user
GrandChild */


/* Agar sirf GrandChild ko user chahiye, lekin Parent aur Child ko bhi user prop pass karna pade → Prop Drilling.
 */

// Isko avoid karne ke liye Context API use kar sakte hain.


const App = () => {
  const name = "Himanshu"
  return (
    <div>
      <ComponentA  name ={name}/>
    </div>
  )
}

export default App
