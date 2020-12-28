import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import style from './components/CategoryList/CategoryList.module.css'
import NavBar from "./components/NavBar/NavBar"
import IdeasBoard from './components/IdeasBoard/IdeasBoard'
import CategoryList from './components/CategoryList/CategoryList'
import UserPage from './components/UserPage/UserPage'
import ViewShareList from './components/ViewShareList/ViewShareList'
import NewYear from './components/NewYear/NewYear'

import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes'
import { useDarkMode } from './components/useDarkMode'
import { ThemeProvider } from 'styled-components'
import Toggle from './components/Toggler'
import './App.css'
import { useState } from 'react'

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show);
  
  if (!mountedComponent) return <div />
 

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <NavBar handleShow={handleShow}/>
          <NewYear show={show} setShow={setShow}/>
     

          <Switch>
          
            <Route exact path='/'>
        
              <div className={style.main}>
                <Container>
                {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
                  <h1> IWish </h1>
                  <div> Приложение по подбору подарков </div>
                  <div><Link to="/ideas/Все категории"> <img className={style.img} src='https://pngicon.ru/file/uploads/1303507150_box3-256x256.png' /> </Link></div>
                  <div></div>
                  <div><h3>Посмотреть идеи</h3></div>
                </Container>
              </div>
              <CategoryList />
            </Route>

            <Route path='/ideas/:category'>
              <IdeasBoard />
            </Route>
            <Route path="/share/:id/:user">
              <ViewShareList />
            </Route>
            <Route path='/dashboard/'>
              {/* Личный кабинет */}
              <UserPage />
            </Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
