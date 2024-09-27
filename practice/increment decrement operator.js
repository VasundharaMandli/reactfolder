import React, { useState, useEffect } from 'react'

export default function App() {
  const [value, setValue] = useState(0)
  const [decrement, setDecrement] = useState(100)

  useEffect(() => {
    console.log('Component mounted')
  }, [])

  function increment() {
    setValue(prevValue => prevValue + 1)
  }

  function decrementValue() {
    setDecrement(prevDecrement => prevDecrement - 1)
  }

  const multiply = () => {
    console.log('Multiply called')
    return value * 5
  }

  return (
    <>
      <h3>Increment Value: {value}</h3>
      <h3>Multiply Result: {multiply()}</h3>
      <button onClick={increment}>Increment</button>
      <h3>Decrement Value: {decrement}</h3>
      <button onClick={decrementValue}>Decrement</button>
    </>
  )
}
