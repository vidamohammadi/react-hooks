import React, { useContext } from 'react'
import Products from './components/Products/Products'
import Auth from './components/Auth/Auth'
import { AuthContext } from './context/auth-context'
import useDarkMode from './hooks/dark-mood'
import Button from './components/UI/Button/Button'

const App = (props) => {
  const [theme, toggleTheme] = useDarkMode()

  const authContext = useContext(AuthContext)

  let content = <Auth />

  if (authContext.isAuth) {
    content = (
      <div
        className='app'
        style={{
          background: theme === 'dark' ? '#212121' : '#ffffff' ,
          color: theme === 'dark' ? '#ffffff' : '#212121' ,
          transition: '.2s all',
          textAlign: 'center'
        }}
        >
          <Products />
          <Button value="change theme" btnType="change-theme" onClick={toggleTheme}/>
      </div>
    )
  }

  return content

}

export default App;
