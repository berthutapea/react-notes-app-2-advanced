import React, { useEffect, useState } from 'react'
import { GrSun } from 'react-icons/gr'
import { IoMdMoon } from 'react-icons/io'
import useTheme from '../../hooks/useTheme'

export default function ThemeToggler() {
  const [theme, changeTheme] = useTheme()

  return (
    <button
      type="button"
      className="toggle-theme"
      onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {
        theme === 'dark' ? <IoMdMoon /> : <GrSun />
      }
    </button>
  )
}

