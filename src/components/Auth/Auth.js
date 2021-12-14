import React from 'react'

import Card from '../UI/Card/Card'

import './Auth.css'

const Auth = (props) => {
  const loginHandler = () => {}

  return (
    <div className="auth">
      <Card>
        <p>Please login for continue.</p>
        <button onClick={loginHandler}>Login</button>
      </Card>
    </div>
  )
}

export default Auth
