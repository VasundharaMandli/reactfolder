import React, { useState, useEffect, useMemo } from 'react'

export default function App() {
  const [value, setValue] = useState(0)
  const [decrement, setDecrement] = useState(100)

  useEffect(() => {
    console.log('hello')
  }, [])

  function increment() {
    setValue(prevValue => prevValue + 1)
  }

  function decrementValue() {
    setDecrement(prevDecrement => prevDecrement - 1)
  }

  const multiplication = useMemo(() => {
    console.log('hello')
    return value * 10
  }, [value])

  return (
    <>
      <h3>Value: {value}</h3>
      <h3>Multiplication: {multiplication}</h3>
      <button onClick={increment}>Increment</button>
      <h3>Decrement Value: {decrement}</h3>
      <button onClick={decrementValue}>Decrement</button>
    </>
  )
}
