import { useEffect, useState } from 'react';

export const useDarkMode = () => {
const [theme, setTheme] = useState('light');
const [mountedComponent, setMountedComponent] = useState(false)
const setMode = mode => {
window.localStorage.setItem('theme', mode)
setTheme(mode)
};

const themeToggler = () => {
theme === 'light' ? setMode('dark') : setMode('light')
};

useEffect(() => {
const localTheme = window.localStorage.getItem('theme');
console.log(localTheme);
localTheme ? setTheme(localTheme) :setMode('light')
setMountedComponent(true)
}, [theme]);

return [theme, themeToggler, mountedComponent]
};
