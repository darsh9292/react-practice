import { useState } from 'react'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1 className='bg-purple-50 size-30 m-2 p-1'>
        Hello World {count}
      </h1>
      <button className='size-15 bg-yellow-200 m-2 rounded p-2' onClick={addValue} on>Add 1</button>
      <Card employee="Darshan Patel" position="Software Developer" imageURL="https://avatars.githubusercontent.com/u/3110164?v=4"/>
      <Card/>
    </>
  )
}

export default App
