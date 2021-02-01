import {useState} from 'react';
import {useCookies} from 'react-cookie'
import { lightTheme, darkTheme} from './../styles/global';
export const useDarkMode = () => {
    const [cookies] = useCookies(['color-theme'])
    const [theme,setTheme] = useState(cookies['color-theme']);
    const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark')
    const themeMode = () => (theme === "light" ? lightTheme : darkTheme);
    return [theme, toggleTheme, themeMode];
}