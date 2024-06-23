import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext';
const About = () => {
  const [count,setCount] = useContext(noteContext); 
  return (
    <div>
      <h1>This is about</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default About



// React components should not perform state updates during rendering->will leads to infinte rendering
//ex  <div>
/* <h1>This is about</h1>
<h2>Count: {count}</h2>
{setCount(count+1)}
<button onClick={() => setCount(count + 1)}>Increment Count</button>
</div> */