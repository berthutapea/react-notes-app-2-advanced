import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexPage() {
  return (
    <p>
      Go to
      {' '}
      <Link to="/">Home page</Link>
    </p>
  )
}
