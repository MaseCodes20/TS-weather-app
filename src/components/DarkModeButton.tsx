import React, { useEffect, useState } from 'react'

function DarkModeButton() {
  const [theme, setTheme] = useState('light')

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
      {theme}
    </button>
  )
}

export default DarkModeButton
