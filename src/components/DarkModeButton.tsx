import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { themeState } from '../atoms/themeAtom'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

function DarkModeButton() {
  const [theme, setTheme] = useRecoilState(themeState)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className='absolute top-0 right-0 m-5 flex items-center'>
      <button onClick={() => setTheme('light')}>
        {' '}
        <SunIcon className='h-7' />
      </button>
      <div
        className={`flex items-center ${
          theme === 'dark' && 'justify-end'
        } transition-all w-14 h-6 mx-1 bg-[#046] border-2 border-fuchsia-300 rounded-full`}
      >
        <div className='w-6 h-5 bg-white rounded-full'></div>
      </div>
      <button onClick={() => setTheme('dark')}>
        <MoonIcon className='h-6' />
      </button>
    </div>
  )
}

export default DarkModeButton
