import React, { useContext } from 'react'
import { useState } from 'react';

const Context = () => {
    const UserContext = useContext();
  const [Data, setData] = useState();
  
  return (
    <div>Context</div>
  )
}

export default Context