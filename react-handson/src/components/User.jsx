import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import UserContext from '../context/UserContext';

const User = () => {

  const { userId } = useParams();
  const [data, setData] = useState([])

  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch('https://api.github.com/users/darsh9292')
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])

  return (
    <>
      <div>
        User : {userId}
        <img src={data.avatar_url} width={300} alt='Image Not loaded' />
      </div>
      <div>
        Data from Context :
        <ul>
          <li>user : {user.name}</li>
          <li>email : {user.email}</li>
          <li>number : {user.number}</li>
        </ul>
      </div>
    </>
  )
}

export default User