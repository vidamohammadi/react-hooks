import React , {useContext} from 'react'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import './Auth.css'
import { AuthContext } from '../../context/auth-context'

const Auth = (props) => {

  const authContext = useContext(AuthContext)

  const loginHandler = () => {
    authContext.login()
  }

  return (
    <div className="auth">
      <Card>
        <p>Please login for continue.</p>
        <Button onClick={loginHandler} value="Login" />
      </Card>
    </div>
  )
}

export default Auth
