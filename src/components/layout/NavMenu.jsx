import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import useLanguage from '../../hooks/useLanguage'
import LangToggler from './LangToggler'
import LogoutButton from './LogoutButton'
import ThemeToggler from './ThemeToggler'

export default function NavMenu() {
  const { auth } = useContext(AuthContext)
  const { pathname } = useLocation()
  const text = useLanguage('app')

  return (
    <>
      {
        auth ? (
          <nav className="navigation">
            <ul>
              <li>
                {
                  pathname !== '/archives' ? (
                    <Link
                      to="/archives"
                      title={text.nav.archives}
                    >
                      {text.nav.archives}
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      title={text.nav.archives}
                    >
                      {text.nav.home}
                    </Link>
                  )
                }
              </li>
            </ul>
          </nav>
        ) : ''
      }
      <LangToggler />
      <ThemeToggler />
      <LogoutButton />
    </>
  )
}
