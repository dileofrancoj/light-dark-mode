
import {Route,Redirect} from 'wouter';

import {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import {useCookies} from 'react-cookie'

import Content from './Components/SomeContent'
import {ThemeProvider} from 'styled-components';
import Toggle from './Components/Toggle'
import {GlobalStyles} from './styles/global'
import {useDarkMode} from './customHooks/useDarkMode'


function App() {
  const [currentTheme,setCurrentTheme] = useState('light')
  const [theme,toggleTheme, themeMode] = useDarkMode()
  const [cookie,setCookie] = useCookies(['color-theme'])

  useEffect(() => {
    if(!cookie) {
      setCookie(currentTheme)
 
    }

  }, [])
  return (
    <ThemeProvider theme={themeMode()}>
    <Container>
        <GlobalStyles/>
          <Toggle theme={theme} toggleTheme = {toggleTheme} />
          <Route path="/harry-potter" component={Content} />
          <Redirect to="/harry-potter"/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
