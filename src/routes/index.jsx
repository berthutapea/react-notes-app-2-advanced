import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import RouteMiddleware from '../middleware/RouteMiddleware'
import IndexPage from '../pages'
import ArchivesPage from '../pages/archives'
import LoginPage from '../pages/login'
import NotFoundPages from '../pages/not-found'
import NotesNewPages from '../pages/notes/new'
import NotesIdPages from '../pages/notes/_id'
import RegisterPage from '../pages/register'

const Routes = () => useRoutes([
  {
    path: '/',
    element: (
      <RouteMiddleware middleware="auth">
        <IndexPage />
      </RouteMiddleware>
    )
  },
  {
    path: '/login',
    element: (
      <RouteMiddleware middleware="public">
        <LoginPage />
      </RouteMiddleware>
    )
  },
  {
    path: '/register',
    element: (
      <RouteMiddleware middleware="public">
        <RegisterPage />
      </RouteMiddleware>
    )
  },
  {
    path: '/archives',
    element: (
      <RouteMiddleware middleware="auth">
        <ArchivesPage />
      </RouteMiddleware>
    )
  },
  {
    path: '/notes',
    element: (
      <RouteMiddleware middleware="auth">
        <Navigate to="/" replace />
      </RouteMiddleware>
    )
  },
  {
    path: '/notes/new',
    element: (
      <RouteMiddleware middleware="auth">
        <NotesNewPages />
      </RouteMiddleware>
    )
  },
  {
    path: '/notes/:id',
    element: (
      <RouteMiddleware middleware="auth">
        <NotesIdPages />
      </RouteMiddleware>
    )
  },
  {
    path: '/*',
    element: (
      <RouteMiddleware middleware="auth">
        <NotFoundPages />
      </RouteMiddleware>
    )
  }
])

export default Routes
