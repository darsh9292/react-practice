import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const User = () => {

  const { userId } = useParams();
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/darsh9292')
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])

  return (
    <div>
      User : {userId}
      <img src={data.avatar_url} width={300} alt='Image Not loaded'/>
    </div>
  )
}

export default User