import React from 'react'
import useLanguage from '../../hooks/useLanguage'

export default function NotFoundMessage() {
  const text = useLanguage('app')

  return (
    <>
      <h2>404</h2>
      <p>{ text.pageNotFound }</p>
    </>
  )
}
