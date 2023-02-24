import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import useInput from '../hooks/useInput'
import useLanguage from '../hooks/useLanguage'
import { getUserLogged, login, putAccessToken } from '../utils/network-data'

export default function LoginPage() {
  const { setAuth } = useContext(AuthContext)
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const navigate = useNavigate()
  const textApp = useLanguage('app')
  const textLogin = useLanguage('login')

  const handleSubmit = (e) => {
    e.preventDefault()
    /**
     * 1. Login
     * 2. Simpan access token
     * 3. Ambil data user yang sedang login
     */
    login({ email, password })
      .then((res) => {
        if (!res.error) {
          putAccessToken(res.data.accessToken)
          getUserLogged()
            .then((res) => {
              if (!res.error) {
                setAuth(res.data)
              } else {
                setAuth(null)
              }
              navigate('/')
            })
            .catch(() => {
              alert(textApp.msg.error)
            })
        }
      })
  }

  return (
    <section className="login-page">
      <h2>{textLogin.header}</h2>
      <form className="input-login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          minLength="6"
          maxLength="255"
          onChange={onEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          minLength="6"
          maxLength="255"
          onChange={onPasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="login-page__footer">
        { textLogin.footer }
        {' '}
        <Link to="/register">{ textLogin.footerRegisterLink }</Link>
      </p>
    </section>
  )
}
