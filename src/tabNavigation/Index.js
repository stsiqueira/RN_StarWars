
import React, { useState }  from 'react'
import Guest from './Guest'
import Home from './Home'


const Index = () => {
  const [ hasToken, setHasToken] = useState();

  if (hasToken === null) return <Guest />;
  return <Home />;
}

export default Index

