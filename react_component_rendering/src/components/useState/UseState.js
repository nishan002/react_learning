import React, {useState} from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)
  console.log('Usestate rendering time')
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Count to {count}</button>
      <button onClick={() => setCount(5)}>Count to {count}</button>
    </div>
  )
}

export default UseState
