import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { themeState } from '../atoms/themeAtom'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

function DarkModeButton() {
  const [theme, setTheme] = useRecoilState(themeState)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <button className='absolute top-0 right-0 m-5' onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon className='h-6' /> : <SunIcon className='h-7' />}
    </button>
  )
}

export default DarkModeButton
