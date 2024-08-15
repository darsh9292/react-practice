import { useState } from 'react'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1 className='bg-purple-50 size-30 m-5 p-5'>
        Hello World {count}
      </h1>
      <button className='size-11 bg-yellow-200 m-5' onClick={addValue} on>Add 1</button>
      <Card employee="Darshan Patel" position="Software Developer" imageURL="https://avatars.githubusercontent.com/u/3110164?v=4"/>
      <Card/>
    </>
  )
}

export default App
